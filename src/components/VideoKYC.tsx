import React from 'react';
import filledcamera from '../assets/icons/filledcamera.svg';
import selfie from '../assets/Images/selfie.png';

const VideoKYC = () => {
  return (
    <div className="flex items-center mt-8 mb-4">
      <img src={selfie} alt="selfie icon" className="w-20 h-20" />
      <div className="relative w-[50%] ml-4">
        <input
          type="search"
          id="search"
          className="block w-full py-3 pl-2 text-sm text-extrdarkgray border border-darkgray rounded-md bg-gray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-dashed"
          placeholder="Take a live photo/video with ID proof"
          required
        />
        <button
          type="submit"
          className="flex absolute text-white text-xs right-2.5 bottom-1.5 bg-sky hover:bg-black focus:ring-4 focus:outline-none focus:ring-sky font-medium rounded-md pl-2 pr-2 py-[6px] dark:bg-sky dark:hover:bg-black dark:focus:ring-sky">
          <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
        </button>
      </div>
    </div>
  );
};

export default VideoKYC;
