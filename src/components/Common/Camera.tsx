import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import ButtonGlobal from './ButtonGlobal';
import filledcamera from '../../assets/icons/filledcamera.svg';
import retry from '../../assets/Images/retry.png';
import { useStore } from '../../store/zustand';

type CameraProps = {
  mediaRecorderRef?: any | null;
  capturing?: boolean;
  setCapturing?: React.Dispatch<React.SetStateAction<boolean>>;
  recordedChunks?: any;
  setRecordedChunks?: React.Dispatch<React.SetStateAction<any>>;
  type?: string;
};
const Camera = ({
  capturing,
  setCapturing,
  mediaRecorderRef,
  recordedChunks,
  setRecordedChunks,
  type
}: CameraProps) => {
  const { imge, setImg, setManageVeriyStep, setManageVeriyStepback } = useStore();
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
      setImg(imageSrc);
      setManageVeriyStep();
    },
    [webcamRef]
  );

  const handleRetake = (e: any) => {
    e.preventDefault();
    setImg(null);
    setManageVeriyStepback();
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
          <span className="flex">
            <Webcam
              audio={false}
              mirrored={true}
              height={590}
              width={590}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="rounded-[10px]"
            />
          </span>
          {type !== 'videoRecord' ? (
            <span className="flex justify-end mt-3">
              <ButtonGlobal
                onClick={capture}
                className="bg-sky flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]">
                <img src={filledcamera} className="w-[16px] h-[16px] mr-1" /> Capture
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
          <img src={imge} alt="screenshot" className="rounded-[10px]" />
          <span className="flex justify-end mt-3">
            <ButtonGlobal
              onClick={handleRetake}
              className="bg-sky flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]">
              <img src={retry} className="w-[16px] h-[16px] mr-1" /> Re-Capture
            </ButtonGlobal>
          </span>
        </>
      )}
    </span>
  );
};

export default Camera;
