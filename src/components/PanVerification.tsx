import React from 'react';
import camera from '../assets/icons/camera.svg';
import imageicon from '../assets/icons/imageicon.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import crossicon from '../assets/icons/cross.svg';
import InputGlobal from './Common/InputGlobal';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';

type PanVerificationProps = {
  uploadedImage: number;
  cameraStatus: boolean;
  imge: string | null;
  setImg: React.Dispatch<React.SetStateAction<string | null>>;
  setCameraStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setUploadedImage: React.Dispatch<React.SetStateAction<number>>;
  setFetchData: React.Dispatch<React.SetStateAction<boolean>>;
};
const PanVerification = ({
  uploadedImage,
  cameraStatus,
  setUploadedImage,
  setFetchData,
  setCameraStatus,
  imge,
  setImg
}: PanVerificationProps) => {
  return (
    <form className="mt-10">
      <div className="relative">
        {uploadedImage === 0 ? (
          cameraStatus === true ? (
            <Camera setCameraStatus={setCameraStatus} imge={imge} setImg={setImg} />
          ) : (
            <span>
              <img
                src={camera}
                className="absolute w-[1.9rem] h-[1.7rem] top-1/2 transform -translate-y-1/2 left-[0.5rem]"
              />
              <InputGlobal
                type="search"
                id="search"
                className="documentimgstyle"
                placeholder="Drag and drop copy of PAN Card or you can"
              />
              <ButtonGlobal
                className="documentbtn left-[63%]"
                onClick={() => {
                  setUploadedImage((prev: any) => prev + 1);
                  setFetchData(true);
                }}>
                <img src={imageicon} className="w-[22px] h-[18px] mr-[0.2rem]" />
                Browse
              </ButtonGlobal>
              <ButtonGlobal
                className="documentbtn right-2.5"
                onClick={() => {
                  setCameraStatus(true);
                }}>
                <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
              </ButtonGlobal>
            </span>
          )
        ) : uploadedImage === 1 ? (
          <>
            <div className="relative max-w-[36.2rem] p-3 text-sm text-black border border-darkgray rounded-md">
              <span className="max-w[36rem]">{imge?.slice(0, 40)}</span>
            </div>
            <ButtonGlobal
              className="cancel"
              onClick={() => {
                setCameraStatus(true);
              }}>
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
    </form>
  );
};

export default PanVerification;
