import React from 'react';
import filledcamera from '../assets/icons/filledcamera.svg';
import selfie from '../assets/Images/selfie.png';
import ButtonGlobal from './Common/ButtonGlobal';
import InputGlobal from './Common/InputGlobal';

const VideoKYC = () => {
  return (
    <div className="flex items-center mt-8 mb-4">
      <img src={selfie} alt="selfie icon" className="w-20 h-20" />
      <div className="relative w-[50%] ml-4">
        <InputGlobal
          type="search"
          id="search"
          className="videoKyc"
          placeholder="Take a live photo/video with ID proof"
        />
        <ButtonGlobal className="documentbtn right-2.5">
          <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
        </ButtonGlobal>
      </div>
    </div>
  );
};

export default VideoKYC;
