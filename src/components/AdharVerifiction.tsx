import React from 'react';
import camera from '../assets/icons/camera.svg';
import imageicon from '../assets/icons/imageicon.svg';
import filledcamera from '../assets/icons/filledcamera.svg';

type AadhaarVerifProps = { setUploadedImage: any };
const AdharVerifiction = ({ setUploadedImage }: AadhaarVerifProps) => {
  const aadhar = ['front', 'back'];
  return (
    <form className="mt-10">
      {aadhar.map((val, idx) => {
        return (
          <div className="relative mt-5" key={idx}>
            <img
              src={camera}
              className="absolute w-7 h-7 top-1/2 transform -translate-y-1/2 left-3"
            />
            <input
              type="search"
              id="search"
              className="block w-full p-3 pl-11 text-sm text-extrdarkgray border border-darkgray rounded-md bg-gray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-dashed"
              placeholder={`Drag and drop ${val} copy of Aadhaar or you can`}
              required
            />
            <button
              type="submit"
              className="flex absolute text-white text-xs left-[63%] bottom-1.5 bg-sky hover:bg-black focus:ring-4 focus:outline-none focus:ring-sky font-medium rounded-md pl-2 pr-2 py-[6px] dark:bg-sky dark:hover:bg-black dark:focus:ring-sky"
              onClick={() => {
                setUploadedImage((prev: any) => prev + 1);
              }}>
              <img src={imageicon} className="w-[18px] h-[18px] mr-2" />
              Browse
            </button>
            <button
              type="submit"
              className="flex absolute text-white text-xs right-2.5 bottom-1.5 bg-sky hover:bg-black focus:ring-4 focus:outline-none focus:ring-sky font-medium rounded-md pl-2 pr-2 py-[6px] dark:bg-sky dark:hover:bg-black dark:focus:ring-sky">
              <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
            </button>
          </div>
        );
      })}
    </form>
  );
};

export default AdharVerifiction;
