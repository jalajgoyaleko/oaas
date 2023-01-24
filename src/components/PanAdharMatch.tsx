import React from 'react';
import thumb from '../assets/icons/thumb.svg';
import thumpdown from '../assets/icons/thumpdown.svg';
import { useStore } from '../store/zustand';

const PanAdharMatch = () => {
  const { panStatus, panStatusResult } = useStore();
  return (
    <>
      {panStatus === 0 ? (
        <ul className="pt-2 pl-5 text-[16px] font-[300]">
          <li className="pb-2">Please click the button below to start matching your details.</li>
          <li className="pb-2">It is required to for verification purpose.</li>
          <li className="pb-2">Minimum match requirement is 60%</li>
        </ul>
      ) : panStatusResult === 'Matching Failed' ? (
        <div className="flex justify-between items-center">
          <span className="mt-4 rounded-full flex px-4 py-3 sm:w-16 sm:h-16 items-center justify-center border-2 border-green">
            <img src={thumb} alt="tumpup icon" className="w-10 h-10 sm:w-7 sm:h-7" />
          </span>
          <span className="ml-5 mt-2">
            <span className="text-lg font-semibold text-green">Good match</span>{' '}
            <div className="mt-1 font-[400] text-md">
              Your name, PAN and Aadhaar matches by <span className="font-bold text-lg">70%</span>
            </div>
          </span>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <span className="mt-4 rounded-full flex w-[105px] h-[80px] sm:w-16 sm:h-16 items-center justify-center border-2 border-red">
            <img src={thumpdown} alt="tumpdown icon" className="w-9 h-9 sm:w-7 sm:h-7" />
          </span>
          <span className="ml-5 mt-2">
            <span className="text-lg font-semibold text-red">Matching Failed</span>{' '}
            <div className="mt-1 font-[400] text-md">
              Your name, PAN and Aadhaar matches by <span className="font-bold text-lg">30%</span>
            </div>
            <div className="text-red block sm:hidden mt-2">You have 1 attempt left</div>
          </span>
        </div>
      )}
    </>
  );
};

export default PanAdharMatch;
