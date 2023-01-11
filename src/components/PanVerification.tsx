import React from 'react';
import camera from '../assets/icons/camera.svg';
import imageicon from '../assets/icons/imageicon.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import crossicon from '../assets/icons/cross.svg';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';
import { useStore } from '../store/zustand';

const PanVerification = () => {
  const { cameraStatus, uploadedImage, imge, setUploadedImage, setCameraStatus, setFetchData } =
    useStore();
  console.log('uploadedImage', uploadedImage);

  return (
    <div className="mt-8">
      <div className="relative">
        {uploadedImage === 0 ? (
          cameraStatus === true ? (
            <Camera />
          ) : (
            <div className="documentimgstyle w-[100%] h-[330px]">
              <img src={camera} className="w-[3rem] h-[3rem] flex-col mb-6" />
              <div className="">Drag and drop copy of PAN Card or you can</div>
              <div className="flex">
                <ButtonGlobal
                  className="documentbtn mt-8"
                  onClick={() => {
                    setUploadedImage(uploadedImage + 1);
                    setFetchData(true);
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
        ) : uploadedImage === 1 ? (
          <>
            <div className="relative p-3 text-sm text-black border border-darkgray rounded-md">
              <span className="max-w[36rem]">{imge?.slice(0, 40)}</span>
            </div>
            <ButtonGlobal className="cancel">
              <img src={crossicon} className="w-[9px] h-[9px]" />
            </ButtonGlobal>
            <div className="block w-full p-3 mt-5 text-sm text-extrdarkgray border border-darkgray rounded-md">
              <div className="mt-1 mb-3">
                <span className="font-semibold text-black">Your PAN Details</span>
                <div>Below are the details as per PAN record.</div>
              </div>
              <div className="flex justify-between w-[50%] mt-8 mb-4">
                <div>
                  <div className="text-extrdarkgray text-xs">Your Full Name</div>
                  <div className="text-black text-md font-semibold mt-2">Priyanka Kothari</div>
                </div>
                <div>
                  <div className="text-extrdarkgray text-xs">PAN</div>
                  <div className="text-black text-md font-semibold mt-2">AAGPQ3801C</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>Hello</>
        )}
      </div>
    </div>
  );
};

export default PanVerification;
