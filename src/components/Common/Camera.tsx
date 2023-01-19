import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import ButtonGlobal from './ButtonGlobal';
import filledcamera from '../../assets/icons/filledcamera.svg';
import retry from '../../assets/Images/retry.png';
import { useStore } from '../../store/zustand';
import camera from '../../assets/icons/camera.svg';
import Uploadfile from './Uploadfile';

type CameraProps = {
  mediaRecorderRef?: any | null;
  capturing?: boolean;
  setCapturing?: React.Dispatch<React.SetStateAction<boolean>>;
  recordedChunks?: any;
  setRecordedChunks?: React.Dispatch<React.SetStateAction<any>>;
  type: string;
  cameraType?: string;
  handleCamera?: (input: string) => void;
};
const Camera = ({
  capturing,
  setCapturing,
  mediaRecorderRef,
  recordedChunks,
  setRecordedChunks,
  type,
  cameraType,
  handleCamera
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
          <span
            className={`${type === 'Pan' || type === 'videoRecord' ? 'flex justify-end' : 'flex'}`}>
            {type === 'Pan' || type === 'videoRecord' ? (
              <Webcam
                audio={false}
                mirrored={true}
                height={type === 'videoRecord' ? 500 : 500}
                width={type === 'videoRecord' ? 500 : 500}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                className="rounded-[10px]"
              />
            ) : cameraType === 'front' ? (
              <>
                <div className="flex flex-col">
                  <Webcam
                    audio={false}
                    mirrored={true}
                    height={340}
                    width={340}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    className="rounded-[10px]"
                  />
                  <span className={`flex flex-col items-end mt-3`}>
                    <ButtonGlobal
                      onClick={capture}
                      className="bg-sky flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]">
                      <img src={filledcamera} className="w-[16px] h-[16px] mr-1" /> Capture
                    </ButtonGlobal>
                  </span>
                </div>
                <div className="documentimgstyle w-[40%] h-[190px] ml-4 text-center">
                  <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
                  <div className="text-sm">{`Drag and drop back copy of Aadhaar or you can`}</div>
                  <div className="flex">
                    <ButtonGlobal className="documentbtn mt-4">
                      <Uploadfile />
                    </ButtonGlobal>
                    <ButtonGlobal
                      className="documentbtn mt-4"
                      onClick={() => handleCamera?.('back')}>
                      <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
                    </ButtonGlobal>
                  </div>
                </div>
              </>
            ) : cameraType === 'back' ? (
              <>
                <div className="documentimgstyle w-[40%] h-[190px] mr-4 text-center">
                  <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
                  <div className="text-sm">{`Drag and drop back copy of Aadhaar or you can`}</div>
                  <div className="flex">
                    <ButtonGlobal className="documentbtn mt-4">
                      <Uploadfile />
                    </ButtonGlobal>
                    <ButtonGlobal
                      className="documentbtn mt-4"
                      onClick={() => handleCamera?.('front')}>
                      <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
                    </ButtonGlobal>
                  </div>
                </div>
                <div className="flex flex-col">
                  <Webcam
                    audio={false}
                    mirrored={true}
                    height={340}
                    width={340}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    className="rounded-[10px]"
                  />
                  <span className={`flex flex-col justify-end mt-3`}>
                    <ButtonGlobal
                      onClick={capture}
                      className="bg-sky flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]">
                      <img src={filledcamera} className="w-[16px] h-[16px] mr-1" /> Capture
                    </ButtonGlobal>
                  </span>
                </div>
              </>
            ) : (
              ''
            )}
          </span>
          {type !== 'Aadhaar' ? (
            <>
              {type !== 'videoRecord' ? (
                <span
                  className={`flex ${type !== 'Aadhaar' ? 'justify-end' : 'justify-center'} mt-3`}>
                  <ButtonGlobal
                    onClick={capture}
                    className="bg-sky flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]">
                    <img src={filledcamera} className="w-[16px] h-[16px] mr-1" /> Capture
                  </ButtonGlobal>
                </span>
              ) : (
                <span className="flex justify-end mt-3">
                  {capturing ? (
                    <ButtonGlobal
                      onClick={handleStopCaptureClick}
                      className="bg-sky flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]">
                      Stop Capture
                    </ButtonGlobal>
                  ) : (
                    <ButtonGlobal
                      onClick={handleStartCaptureClick}
                      className="bg-sky flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]">
                      Start Capture
                    </ButtonGlobal>
                  )}
                  {recordedChunks.length > 0 && (
                    <ButtonGlobal
                      onClick={handleDownload}
                      className="bg-sky flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem] ml-2">
                      Download
                    </ButtonGlobal>
                  )}
                </span>
              )}
            </>
          ) : (
            ''
          )}
        </>
      ) : type !== 'Aadhaar' ? (
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
      ) : cameraType === 'front' ? (
        <div className="flex">
          <div>
            <img src={imge} alt="screenshot" className="rounded-[10px]" />
            <span className="flex flex-col justify-end items-end mt-3">
              <ButtonGlobal
                onClick={handleRetake}
                className="bg-sky flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]">
                <img src={retry} className="w-[16px] h-[16px] mr-1" /> Re-Capture
              </ButtonGlobal>
            </span>
          </div>
          <div className="documentimgstyle w-[40%] h-[190px] ml-4 text-center">
            <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
            <div className="text-sm">{`Drag and drop back copy of Aadhaar or you can`}</div>
            <div className="flex">
              <ButtonGlobal className="documentbtn mt-4">
                <Uploadfile />
              </ButtonGlobal>
              <ButtonGlobal
                className="documentbtn mt-4"
                onClick={() => (setImg(null), handleCamera?.('back'))}>
                <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
              </ButtonGlobal>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="documentimgstyle w-[40%] h-[190px] mr-4 text-center">
            <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
            <div className="text-sm">{`Drag and drop back copy of Aadhaar or you can`}</div>
            <div className="flex">
              <ButtonGlobal className="documentbtn mt-4">
                <Uploadfile />
              </ButtonGlobal>
              <ButtonGlobal
                className="documentbtn mt-4"
                onClick={() => (setImg(null), handleCamera?.('front'))}>
                <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
              </ButtonGlobal>
            </div>
          </div>
          <div>
            <img src={imge} alt="screenshot" className="rounded-[10px]" />
            <span className="flex flex-col justify-end items-start mt-3">
              <ButtonGlobal
                onClick={handleRetake}
                className="bg-sky flex justify-center items-center text-white text-[12px] p-1 rounded-[4px] w-[6rem]">
                <img src={retry} className="w-[16px] h-[16px] mr-1" /> Re-Capture
              </ButtonGlobal>
            </span>
          </div>
        </div>
      )}
    </span>
  );
};

export default Camera;
