import React from 'react';
import thumup from '../assets/icons/thumup.svg';
import thumpdown from '../assets/icons/thumpdown.svg';

type PanAdhaMatchProps = { panStatus: boolean; panStatusResult: string };
const PanAdharMatch = ({ panStatus, panStatusResult }: PanAdhaMatchProps) => {
  return (
    <>
      {panStatus === false ? (
        <ul className="list-disc pt-2 pl-5">
          <li className="pb-2">Please click the button below to start matching your details.</li>
          <li className="pb-2">It is required to for verification purpose.</li>
          <li className="pb-2">Minimum match requirement is 60%</li>
        </ul>
      ) : panStatusResult === 'Matching Failed' ? (
        <div className="flex justify-between items-center">
          <span className="mt-4 rounded-full flex w-16 h-16 items-center justify-center border-2 border-green">
            <img src={thumup} alt="tumpup icon" className="w-7 h-7" />
          </span>
          <span className="ml-5 mt-2">
            <span className="text-lg font-semibold text-green">Good match</span>{' '}
            <div className="mt-1 font-semibold text-md">
              Your name, PAN and Aadhaar matches by <span className="font-bold text-lg">70%</span>
            </div>
          </span>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <span className="mt-4 rounded-full flex w-16 h-16 items-center justify-center border-2 border-red">
            <img src={thumpdown} alt="tumpdown icon" className="w-7 h-7" />
          </span>
          <span className="ml-5 mt-2">
            <span className="text-lg font-semibold text-red">Matching Failed</span>{' '}
            <div className="mt-1 font-semibold text-md">
              Your name, PAN and Aadhaar matches by <span className="font-bold text-lg">30%</span>
            </div>
          </span>
        </div>
      )}
    </>
  );
};

export default PanAdharMatch;
