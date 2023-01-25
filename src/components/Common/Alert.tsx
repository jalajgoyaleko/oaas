import React from 'react';
import { useStore } from '../../store/zustand';
import ButtonGlobal from './ButtonGlobal';
import alert from './../../assets/Images/alert.png';

const Alert = () => {
  const { setFinish } = useStore();
  return (
    <div className="z-20 absolute top-14 sm:top-0 backdrop-blur-[32px] left-0 bottom-0 right-0 sm:rounded-2xl flex flex-col items-center justify-center">
      <span className="w-32 h-32 items-center justify-center flex rounded-full border-4 border-pink">
        <span className="w-24 h-24 items-center justify-center flex rounded-full bg-white">
          <img src={alert} alt="alert" className="w-12 h-12" />
        </span>
      </span>
      <span className="mt-4 font-bold text-black text-xl">Alert!</span>
      <span className="mt-2 sm:mt-4 text-black sm:text-[16px] p-5 sm:p-0 text-[18px] sm:w-[35%] text-center">
        Your onboarding process can not be completed without Aadhaar verification. Please complete
        the same to proceed.
      </span>
      <ButtonGlobal
        className="bg-sky hover:bg-black text-white font-semibold mt-8 sm:py-2 py-2 px-8 w-[80%] sm:w-[10%] text-lg sm:px-8 rounded"
        onClick={() => {
          setFinish(false);
        }}>
        Go Back
      </ButtonGlobal>
    </div>
  );
};

export default Alert;
