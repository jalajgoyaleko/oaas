import React, { useRef, useState } from 'react';
import filledcamera from '../assets/icons/filledcamera.svg';
import selfie from '../assets/Images/selfie.png';
import { useStore } from '../store/zustand';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';
import InputGlobal from './Common/InputGlobal';

const VideoKYC = () => {
  const { cameraStatus, imge, setCameraStatus } = useStore();
  const mediaRecorderRef = useRef<any | null>(null);
  const [capturing, setCapturing] = useState<boolean>(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  return (
    <div className="flex items-center mt-8 mb-4">
      {cameraStatus === true ? (
        <Camera
          mediaRecorderRef={mediaRecorderRef}
          capturing={capturing}
          setCapturing={setCapturing}
          recordedChunks={recordedChunks}
          setRecordedChunks={setRecordedChunks}
          type="videoRecord"
        />
      ) : (
        <>
          <img src={selfie} alt="selfie icon" className="w-20 h-20" />
          <div className="relative w-[50%] ml-4">
            <InputGlobal
              type="search"
              id="search"
              className="videoKyc"
              placeholder="Take a live photo/video with ID proof"
              value={imge}
            />
            <ButtonGlobal
              className="documentbtn mt-8 right-2.5"
              onClick={() => setCameraStatus(true)}>
              <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
            </ButtonGlobal>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoKYC;
