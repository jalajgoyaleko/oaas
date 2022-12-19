import React from 'react';

const Stepper = () => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="p-5 bg-sky-800 rounded-t-2xl">
        <div className="flex-col">
          <div className="mb-2 text-base text-white">ONBOARDING PROGRESS</div>
          <div className="w-[230px] bg-gray-200 rounded-full h-2.5 mb-4">
            <div className="bg-gray-200 h-2.5 rounded-full"></div>
            <div className="text-xs text-end pt-1 text-white">0 Steps Completed</div>
          </div>
        </div>
      </div>
      <div className="pt-5 pr-5 pb-10 pl-5 bg-white rounded-b-2xl">
        <div className="flex-col items-center">
          <div className="flex justify-start items-center text-center text-black-600 relative">
            <div className="rounded-full transition duration-500 h-8 w-8 py-1 border-2 bg-gray-200 border-gray-200">
              1
            </div>
            <span className="text-center text-sm ml-2 font-medium text-black-600">
              Location Capturing
            </span>
          </div>
          <div className="flex-auto divide-x-2 border-l-2 transition duration-500 ease-in-out border-black"></div>
          <div className="flex mt-7 justify-start items-center text-center text-black-600 relative">
            <div className="rounded-full transition duration-500 h-8 w-8 py-1 border-2 bg-gray-200 border-gray-200">
              2
            </div>
            <span className="text-center text-sm ml-2 font-medium text-black-600">
              Pan Verification
            </span>
          </div>
          <div className="flex-auto border-l-2 transition duration-500 ease-in-out border-black"></div>
          <div className="flex mt-7 justify-start items-center text-center text-black-600 relative">
            <div className="rounded-full transition duration-500 h-8 w-8 py-1 border-2 bg-gray-200 border-gray-200">
              3
            </div>
            <span className="text-center text-sm ml-2 font-medium text-black-600">
              Aadhaar Verification
            </span>
          </div>
          <div className="flex-auto border-l-2 transition duration-500 ease-in-out border-black"></div>
          <div className="flex mt-7 justify-start items-center text-center text-black-600 relative">
            <div className="rounded-full transition duration-500 h-8 w-8 py-1 border-2 bg-gray-200 border-gray-200">
              4
            </div>
            <span className="text-center text-sm ml-2 font-medium text-black-600">
              PAN - Aadhaar Matching
            </span>
          </div>
          <div className="flex-auto border-l-2 transition duration-500 ease-in-out border-black"></div>
          <div className="flex mt-7 justify-start items-center text-center text-black-600 relative">
            <div className="rounded-full transition duration-500 h-8 w-8 py-1 border-2 bg-gray-200 border-gray-200">
              5
            </div>
            <span className="text-center text-sm ml-2 font-medium text-black-600">
              Business Details
            </span>
          </div>
          <div className="flex-auto border-l-2 transition duration-500 ease-in-out border-black"></div>
          <div className="flex mt-7 justify-start items-center text-center text-black-600 relative">
            <div className="rounded-full transition duration-500 h-8 w-8 py-1 border-2 bg-gray-200 border-gray-200">
              6
            </div>
            <span className="text-center text-sm ml-2 font-medium text-black-600">Video KYC</span>
          </div>
          <div className="flex-auto border-l-2 transition duration-500 ease-in-out border-black"></div>
          <div className="flex mt-7 justify-start items-center text-center text-black-600 relative">
            <div className="rounded-full transition duration-500 h-8 w-8 py-1 border-2 bg-gray-200 border-gray-200">
              7
            </div>
            <span className="text-center text-sm ml-2 font-medium text-black-600">
              Onboarding Status
            </span>
          </div>
          {/* <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
