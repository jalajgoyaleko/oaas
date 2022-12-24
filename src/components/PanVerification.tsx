import React from 'react';
import camera from '../assets/icons/camera.svg';
import imageicon from '../assets/icons/imageicon.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import crossicon from '../assets/icons/cross.svg';

type PanVerificationProps = { uploadedImage: number; setUploadedImage: any; setFetchData: any };
const PanVerification = ({
  uploadedImage,
  setUploadedImage,
  setFetchData
}: PanVerificationProps) => {
  return (
    <form className="mt-10">
      <div className="relative">
        {uploadedImage === 0 ? (
          <>
            <img
              src={camera}
              className="absolute w-7 h-7 top-1/2 transform -translate-y-1/2 left-3"
            />
            <input
              type="search"
              id="search"
              className="block w-full p-3 pl-11 text-sm text-extrdarkgray border border-darkgray rounded-md bg-gray focus:ring-blue-500 focus:border-blue-500 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-dashed"
              placeholder="Drag and drop copy of PAN Card or you can"
              required
            />
            <button
              type="submit"
              className="flex absolute text-white text-xs left-[63%] bottom-1.5 bg-sky hover:bg-black focus:ring-4 focus:outline-none focus:ring-sky font-medium rounded-md pl-2 pr-2 py-[6px] dark:bg-sky dark:hover:bg-black dark:focus:ring-sky"
              onClick={() => {
                setUploadedImage((prev: any) => prev + 1);
                setFetchData(true);
              }}>
              <img src={imageicon} className="w-[18px] h-[18px] mr-2" />
              Browse
            </button>
            <button
              type="submit"
              className="flex absolute text-white text-xs right-2.5 bottom-1.5 bg-sky hover:bg-black focus:ring-4 focus:outline-none focus:ring-sky font-medium rounded-md pl-2 pr-2 py-[6px] dark:bg-sky dark:hover:bg-black dark:focus:ring-sky">
              <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
            </button>
          </>
        ) : uploadedImage === 1 ? (
          <>
            <input
              type="search"
              id="search"
              className="block w-full p-3 text-sm text-extrdarkgray border border-darkgray rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Drag and drop copy of PAN Card or you can"
              required
            />
            <button
              type="submit"
              className="flex absolute text-xs -right-2.5 -top-2.5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-sky font-medium rounded-full pl-2 pr-2 py-[8px] dark:bg-sky dark:hover:bg-black dark:focus:ring-sky"
              onClick={() => {
                setUploadedImage((prev: number) => prev + 1);
              }}>
              <img src={crossicon} className="w-[9px] h-[9px]" />
            </button>
            <div className="block w-full p-3 mt-5 text-sm text-extrdarkgray border border-darkgray rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray dark:border-gray dark:placeholder-gray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
          <>
            <div className="absolute w-full h-full flex backdrop-blur-sm justify-center z-10 rounded-2xl items-center text-center text-black">
              Hello
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default PanVerification;
