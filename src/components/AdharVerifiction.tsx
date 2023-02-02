import React from 'react';
import camera from '../assets/icons/camera.svg';
import imageicon from '../assets/icons/imageicon.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import InputGlobal from './Common/InputGlobal';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';

type AadhaarVerifProps = {
  setUploadedImage: React.Dispatch<React.SetStateAction<number>>;
  cameraStatus: boolean;
  setCameraStatus: React.Dispatch<React.SetStateAction<boolean>>;
  imge: string | null;
  setImg: React.Dispatch<React.SetStateAction<string | null>>;
};
const AdharVerifiction = ({
  cameraStatus,
  setUploadedImage,
  setCameraStatus,
  imge,
  setImg
}: AadhaarVerifProps) => {
  const aadhar = ['front', 'back'];
  const handleBrowse = () => {
    setUploadedImage((prev: any) => prev + 1);
  };
  return (
    <form className="mt-10">
      {cameraStatus === true ? (
        <Camera setCameraStatus={setCameraStatus} imge={imge} setImg={setImg} />
      ) : (
        <>
          {aadhar.map((aadharImage: string, index: number) => {
            return (
              <div className="relative w-[90%] mt-5" key={index}>
                <>
                  <img
                    src={camera}
                    className="absolute w-[1.9rem] h-[1.7rem] top-1/2 transform -translate-y-1/2 left-[0.5rem]"
                  />
                  <InputGlobal
                    type="search"
                    id="search"
                    className="documentimgstyle"
                    placeholder={`Drag and drop ${aadharImage} copy of Aadhaar or you can`}
                    value={imge}
                  />
                  <ButtonGlobal className="documentbtn left-[63%]" onClick={handleBrowse}>
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
                </>
              </div>
            );
          })}
        </>
      )}
    </form>
  );
};

export default AdharVerifiction;
