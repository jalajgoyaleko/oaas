import React, { useEffect, useState } from 'react';
import camera from '../assets/icons/camera.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';
import { useStore } from '../store/zustand';
import Browse from './Common/Browse';
import Uploadfile from './Common/Uploadfile';

const AdharVerifiction = () => {
  const { cameraStatus, uploadedImage, setCameraStatus } = useStore();
  const [cameraType, setCameraType] = useState<string>('');

  const handleCamera = (aadharImage: any) => {
    setCameraStatus(true);
    setCameraType(aadharImage);
  };
  useEffect(() => {
    setCameraStatus(false);
  }, []);

  return (
    <>
      <div className="relative sm:hidden block mt-8" onClick={() => setCameraStatus(true)}>
        {uploadedImage === 0 ? (
          cameraStatus === true ? (
            <Camera type="Pan" />
          ) : (
            <>
              <div className="flex text-center">
                <div className="documentimgstylemobl w-[100%] h-[190px]">
                  <img src={camera} className="w-[2.4rem] h-[2.4rem] flex-col mb-6" />
                  Upload front copy
                </div>
                <div className="documentimgstylemobl ml-2 w-[100%] h-[190px]">
                  <img src={camera} className="w-[2.4rem] h-[2.4rem] flex-col mb-6" />
                  Upload back copy
                </div>
              </div>
              <div className="flex justify-center">
                <div className="sidemobl"></div>
              </div>
              <div className="flex justify-center items-center p-3 text-white text-[16px] rounded-md bg-red">
                You will get only one attempt for Aadhaar verification
              </div>
            </>
          )
        ) : (
          <Browse copyType="Pan Copy" />
        )}
      </div>
      <div className="mt-10 relative">
        {uploadedImage === 0 ? (
          cameraStatus === true ? (
            <Camera type="Aadhaar" cameraType={cameraType} handleCamera={handleCamera} />
          ) : (
            <div className="hidden sm:flex text-center">
              <div className="documentimgstyle w-[38%] h-[190px] mr-4">
                <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
                <div className="text-sm">Drag and drop front copy of Aadhaar or you can</div>
                <div className="flex mt-4">
                  <Uploadfile />
                  <ButtonGlobal className="documentbtn" onClick={() => handleCamera('front')}>
                    <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
                  </ButtonGlobal>
                </div>
              </div>
              <div className="documentimgstyle w-[38%] h-[190px] mr-4">
                <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
                <div className="text-sm">Drag and drop back copy of Aadhaar or you can</div>
                <div className="flex mt-4">
                  <Uploadfile />
                  <ButtonGlobal className="documentbtn" onClick={() => handleCamera('back')}>
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
    </>
  );
};

export default AdharVerifiction;
