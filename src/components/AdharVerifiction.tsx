import React, { useState } from 'react';
import camera from '../assets/icons/camera.svg';
import imageicon from '../assets/icons/imageicon.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';
import { useStore } from '../store/zustand';
import Browse from './Common/Browse';
import Uploadfile from './Common/Uploadfile';

const AdharVerifiction = () => {
  const { cameraStatus, uploadedImage, setUploadedImage, setCameraStatus } = useStore();
  const [cameraType, setCameraType] = useState<string>('');

  const handleCamera = (aadharImage: any) => {
    setCameraStatus(true);
    setCameraType(aadharImage);
  };
  return (
    <div className="mt-10 relative">
      {uploadedImage === 0 ? (
        cameraStatus === true ? (
          <Camera type="Aadhaar" cameraType={cameraType} handleCamera={handleCamera} />
        ) : (
          <div className="flex text-center">
            <div className="documentimgstyle w-[38%] h-[190px] mr-4">
              <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
              <div className="text-sm">{`Drag and drop front copy of Aadhaar or you can`}</div>
              <div className="flex">
                <ButtonGlobal className="documentbtn mt-4">
                  <Uploadfile />
                </ButtonGlobal>
                <ButtonGlobal className="documentbtn mt-4" onClick={() => handleCamera('front')}>
                  <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
                </ButtonGlobal>
              </div>
            </div>
            <div className="documentimgstyle w-[38%] h-[190px] mr-4">
              <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
              <div className="text-sm">{`Drag and drop back copy of Aadhaar or you can`}</div>
              <div className="flex">
                <ButtonGlobal
                  className="documentbtn mt-4"
                  onClick={() => {
                    setUploadedImage(uploadedImage + 1);
                  }}>
                  <img src={imageicon} className="w-[18px] h-[18px] mr-2" />
                  Browse
                </ButtonGlobal>
                <ButtonGlobal className="documentbtn mt-4" onClick={() => handleCamera('back')}>
                  <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
                </ButtonGlobal>
              </div>
            </div>
          </div>
        )
      ) : (
        <Browse copyType="Aadhaar copy" />
      )}
    </div>
  );
};

export default AdharVerifiction;
