import React from 'react';
import camera from '../assets/icons/camera.svg';
import imageicon from '../assets/icons/imageicon.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import InputGlobal from './Common/InputGlobal';
import ButtonGlobal from './Common/ButtonGlobal';

type AadhaarVerifProps = { setUploadedImage: React.Dispatch<React.SetStateAction<number>> };
const AdharVerifiction = ({ setUploadedImage }: AadhaarVerifProps) => {
  const aadhar = ['front', 'back'];
  const handleBrowse = () => {
    setUploadedImage((prev: any) => prev + 1);
  };
  return (
    <form className="mt-10">
      {aadhar.map((aadharImage: string, index: number) => {
        return (
          <div className="relative mt-5" key={index}>
            <img
              src={camera}
              className="absolute w-7 h-7 top-1/2 transform -translate-y-1/2 left-3"
            />
            <InputGlobal
              type="search"
              id="search"
              className="documentimgstyle"
              placeholder={`Drag and drop ${aadharImage} copy of Aadhaar or you can`}
            />
            <ButtonGlobal className="documentbtn left-[63%]" onClick={handleBrowse}>
              <img src={imageicon} className="w-[18px] h-[18px] mr-2" />
              Browse
            </ButtonGlobal>
            <ButtonGlobal className="documentbtn right-2.5">
              <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
            </ButtonGlobal>
          </div>
        );
      })}
    </form>
  );
};

export default AdharVerifiction;
