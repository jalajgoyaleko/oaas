import React from 'react';
import thumup from '../assets/icons/thumup.svg';
import retry from '../assets/Images/retry.png';

const OnboardingStatus = () => {
  return (
    <div className="flex justify-between mt-8">
      <span className="rounded-full flex w-16 h-16 items-center justify-center border-2 border-green">
        <img src={thumup} alt="tumpup icon" className="w-7 h-7" />
      </span>
      <span className="flex flex-col ml-5">
        <span className="text-lg font-semibold text-green">64% Completed</span>{' '}
        <div className="mt-1 font-semibold text-md">
          4 Steps completed, 1 step skipped, 1 step disqualified{' '}
        </div>
        <span className="flex mt-8 items-center justify-between w-[80%]">
          <span className="flex-col">
            <div className="text-sm text-extrdarkgray">Skipped</div>
            <div className="text-md text-black font-bold">Aadhaar Verification</div>
          </span>
          <button className="flex items-center justify-center bg-sky  hover:bg-black text-white font-semibold w-28 h-8 px-5 rounded">
            <img src={retry} alt="retry icon" className="w-4 h-4 mr-2" /> Retry
          </button>
        </span>
        <span className="flex mt-8 mb-4 items-center justify-between w-[60%]">
          <span className="flex-col">
            <span className="text-sm text-extrdarkgray">Disqualified</span>
            <div className="text-md text-black font-bold">Video KYC</div>
          </span>
          <div className="w-fit rounded-full p-2 text-xs text-center text-red bg-white border-red border-2">
            No Attempts Left
          </div>
        </span>
      </span>
    </div>
  );
};

export default OnboardingStatus;
