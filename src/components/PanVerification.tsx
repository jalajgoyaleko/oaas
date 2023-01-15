import React from 'react';
import camera from '../assets/icons/camera.svg';
import imageicon from '../assets/icons/imageicon.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';
import { useStore } from '../store/zustand';
import Browse from './Common/Browse';

const PanVerification = () => {
  const { cameraStatus, uploadedImage, setUploadedImage, setCameraStatus } = useStore();

  return (
    <div className="mt-8">
      <div className="relative">
        {uploadedImage === 0 ? (
          cameraStatus === true ? (
            <Camera type="Pan" />
          ) : (
            <div className="documentimgstyle w-[100%] h-[330px]">
              <img src={camera} className="w-[3rem] h-[3rem] flex-col mb-6" />
              <div className="">Drag and drop copy of PAN Card or you can</div>
              <div className="flex">
                <ButtonGlobal
                  className="documentbtn mt-8"
                  onClick={() => {
                    setUploadedImage(uploadedImage + 1);
                  }}>
                  <img src={imageicon} className="w-[18px] h-[18px] mr-2" />
                  Browse
                </ButtonGlobal>
                <ButtonGlobal className="documentbtn mt-8" onClick={() => setCameraStatus(true)}>
                  <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
                </ButtonGlobal>
              </div>
            </div>
          )
        ) : (
          <Browse copyType="Pan Copy" />
        )}
      </div>
    </div>
  );
};

export default PanVerification;
