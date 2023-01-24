import React from 'react';
import { useStore } from '../../store/zustand';
import tickmark from './../../assets/icons/tickmark.svg';

const Fetching = () => {
  const { setFetchData } = useStore();
  return (
    <div className="z-20 absolute top-[7.5rem] sm:top-0 backdrop-blur-[32px] left-0 bottom-0 right-0 sm:rounded-2xl flex flex-col items-center justify-center">
      <span className="w-32 h-32 items-center justify-center flex rounded-full border-4 border-green">
        <span
          className="w-24 h-24 items-center justify-center flex rounded-full bg-white drop-shadow-2xl"
          onClick={() => {
            setFetchData(false);
          }}>
          <span className="w-24 h-24 items-center justify-center flex flex-col rounded-full">
            <img src={tickmark} alt="complete mark" className="w-[3rem] h-[2.3rem]" />
            <div className="text-green">70%</div>
          </span>
        </span>
      </span>
      <span className="mt-4 font-bold text-black text-xl">Fetching Details!</span>
      <span className="mt-4 text-black text-[16px] sm:text-md font-[500] sm:font-normal text-center sm:text-start p-2">
        Please wait while we fetch details from PAN. This may take a few seconds.
      </span>
    </div>
  );
};

export default Fetching;
