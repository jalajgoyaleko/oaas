import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import ButtonGlobal from './ButtonGlobal';

type CameraProps = {
  setCameraStatus?: React.Dispatch<React.SetStateAction<boolean>>;
  imge?: string | null;
  setImg?: React.Dispatch<React.SetStateAction<string | null>>;
  mediaRecorderRef?: any | null;
  capturing?: boolean;
  setCapturing?: React.Dispatch<React.SetStateAction<boolean>>;
  recordedChunks?: any;
  setRecordedChunks?: React.Dispatch<React.SetStateAction<any>>;
  type?: string;
};
const Camera = ({
  setCameraStatus,
  imge,
  setImg,
  capturing,
  setCapturing,
  mediaRecorderRef,
  recordedChunks,
  setRecordedChunks,
  type
}: CameraProps) => {
  const videoConstraints = {
    width: { min: 1280 },
    height: { min: 720 },
    aspectRatio: 0.6666666667,
    facingMode: 'user'
  };

  const webcamRef = useRef<any | null>(null);

  const capture = useCallback(
    async (e: any) => {
      e.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      const blob = await fetch(imageSrc).then((res) => res.blob());
      const formData = new FormData();

      formData.append('images', blob);
      setImg?.(imageSrc);
    },
    [webcamRef]
  );

  const handleRetake = (e: any) => {
    e.preventDefault();
    setImg?.(null);
  };

  const handleDataAvailable = useCallback(({ data }) => {
    if (data.size > 0) {
      setRecordedChunks?.((prev: any) => prev.concat(data));
    }
  }, []);

  const handleStartCaptureClick = useCallback(
    (e: any) => {
      e.preventDefault();
      setCapturing?.(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/webm'
      });
      mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
      mediaRecorderRef.current.start();
    },
    [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]
  );

  const handleStopCaptureClick = useCallback(
    (e: any) => {
      e.preventDefault();
      mediaRecorderRef.current.stop();
      setCapturing?.(false);
    },
    [mediaRecorderRef, setCapturing]
  );

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm'
      });
      const url = URL.createObjectURL(blob);
      const a: any = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = url;
      a.download = 'react-webcam-stream-capture.webm';
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks?.([]);
    }
  }, [recordedChunks]);

  return (
    <span>
      {imge === null ? (
        <>
          <span className="flex justify-center">
            <Webcam
              audio={false}
              mirrored={true}
              height={550}
              width={550}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </span>
          {type !== 'videoRecord' ? (
            <span className="flex justify-center items-center">
              <ButtonGlobal
                onClick={capture}
                className="bg-sky text-white block w-[47%] p-3 pl-11 rounded-md mt-2 mr-2">
                Capture photo
              </ButtonGlobal>
              <ButtonGlobal
                onClick={() => {
                  setCameraStatus?.((prev: any) => !prev);
                }}
                className="bg-sky text-white block w-[47%] p-3 pl-11 rounded-md mt-2">
                Turn off Camera
              </ButtonGlobal>
            </span>
          ) : (
            <>
              {capturing ? (
                <ButtonGlobal
                  onClick={handleStopCaptureClick}
                  className="bg-sky text-white block w-[47%] p-3 pl-11 rounded-md mt-2 mr-2">
                  Stop Capture
                </ButtonGlobal>
              ) : (
                <ButtonGlobal
                  onClick={handleStartCaptureClick}
                  className="bg-sky text-white block w-[47%] p-3 pl-11 rounded-md mt-2 mr-2">
                  Start Capture
                </ButtonGlobal>
              )}
              {recordedChunks.length > 0 && (
                <ButtonGlobal
                  onClick={handleDownload}
                  className="bg-sky text-white block w-[47%] p-3 pl-11 rounded-md mt-2 mr-2">
                  Download
                </ButtonGlobal>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <img src={imge} alt="screenshot" />

          <span className="flex justify-center items-center">
            <ButtonGlobal
              onClick={handleRetake}
              className="bg-sky text-white block w-[35%] p-3 rounded-md mt-2 mr-2">
              Retake
            </ButtonGlobal>
            <ButtonGlobal
              onClick={() => {
                setCameraStatus?.((prev: any) => !prev);
              }}
              className="bg-sky text-white block w-[35%] p-3 rounded-md mt-2">
              Done
            </ButtonGlobal>
          </span>
        </>
      )}
    </span>
  );
};

export default Camera;
