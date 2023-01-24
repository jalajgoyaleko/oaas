import React from 'react';
import { useStore } from '../../store/zustand';
import alert from '../../assets/icons/alert.svg';
import ButtonGlobal from './ButtonGlobal';

type Browse = {
  copyType: string;
};
const Browse = ({ copyType }: Browse) => {
  const {
    panVerificationfailed,
    preview,
    selectedFile,
    isYourPan,
    setIsYourPan,
    setManageVeriyStep,
    setPanVerificationfailed,
    setSelectedFile,
    setManageVeriyStepback,
    setUploadedImage
  } = useStore();

  const clearSelectedImg = () => {
    setSelectedFile(undefined);
    setManageVeriyStepback();
    setUploadedImage(0);
  };
  return (
    <div>
      {panVerificationfailed === 3 ? (
        <>
          <div className="relative p-[5px] text-sm text-black border border-darkgray rounded-md max-w[36rem]">
            <div className="flex justify-start">
              <img src={preview} className="w-8 h-8" />
              <span className="flex flex-col ml-2">
                <div className="text-xs text-extrdarkgray font-sans font-[300]">{copyType}</div>
                {selectedFile?.name}
              </span>
            </div>
          </div>
          <div className="block w-full p-3 mt-5 text-sm text-extrdarkgray border border-darkgray rounded-md">
            <div className="mt-1 mb-3">
              <span className="font-[600] sm:font-[400] text-lg text-black">Your PAN Details</span>
              <div className="font-[450] sm:font-normal">
                Below are the details as per PAN record.
              </div>
            </div>
            <div className="sm:flex justify-between w-[50%] mt-8 mb-4">
              <div>
                <div className="text-extrdarkgray text-[16px] sm:text-xs">Your Full Name</div>
                <div className="text-black text-[18px] sm:text-[14px] font-[400] mt-2">
                  Priyanka Kothari
                </div>
              </div>
              <div>
                <div className="text-extrdarkgray text-[16px] sm:text-xs mt-4 sm:mt-0">PAN</div>
                <div className="text-black text-[18px] sm:text-[14px] font-[400] mt-2">
                  AAGPQ3801C
                </div>
              </div>
            </div>
          </div>
        </>
      ) : panVerificationfailed === 1 ? (
        <div className="max-w-[21rem] sm:max-w-[57rem] mb-7">
          <div className="flex">
            <div className="w-[100%] sm:mr-3 p-[5px] text-sm text-black border rounded-md bg-lightred border-red">
              <div className="flex justify-start">
                <img src={preview} className="w-8 h-8" />
                <span className="flex flex-col ml-2">
                  <div className="text-xs text-extrdarkgray font-sans font-[300]">Pan Copy</div>
                  {selectedFile?.name}
                </span>
              </div>
            </div>
            <div className="side"></div>
            <div className="hidden sm:w-[11rem] sm:flex justify-center items-center p-2 text-white text-[12px] rounded-md bg-red">
              You have 1 attempt left
            </div>
          </div>
          <div className="mt-2 text-[14px] sm:text-[12px] max-w-[37rem] text-extrdarkgray flex font-sans">
            <img src={alert} alt="alert" className="w-6 h-6 mr-3" />
            <div>
              We couldn&lsquo;t fetch details from PAN. Please upload a clear copy of PAN to
              proceed. You can also skip this step to proceed with next option.
              <div className="text-red block sm:hidden mt-2">You have 1 attempt left</div>
            </div>
          </div>
        </div>
      ) : panVerificationfailed === 2 ? (
        <>
          <div className="relative p-[5px] text-sm text-black border border-darkgray rounded-md max-w[36rem]">
            <div className="flex justify-start">
              <img src={preview} className="w-8 h-8" />
              <span className="flex flex-col ml-2">
                <div className="text-xs text-extrdarkgray font-sans font-[300]">Pan Copy</div>
                {selectedFile?.name}
              </span>
            </div>
          </div>
          <div className="block w-full mb-6 p-3 mt-5 text-sm text-extrdarkgray border border-darkgray rounded-md">
            <div className="sm:flex sm:justify-between items-center">
              <div className="mt-1 mb-3">
                <span className="font-[500] text-black text-[16px]">Is this your PAN</span>
                <div className="text-md mt-2 text-[16px]">BJGD6432G</div>
              </div>
              {isYourPan === false ? (
                <div>
                  <ButtonGlobal
                    className="bg-sky border-sky border-[1px] hover:bg-black text-white py-1 px-6 rounded mr-3 text-[16px]"
                    onClick={() => (setIsYourPan(true), setManageVeriyStep())}>
                    Yes
                  </ButtonGlobal>
                  <ButtonGlobal
                    className="bg-white shadow-2xl border-sky border-[1px] hover:bg-white text-sky py-1 px-6 rounded text-[16px]"
                    onClick={() => (setPanVerificationfailed(0), setSelectedFile(undefined))}>
                    No
                  </ButtonGlobal>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </>
      ) : panVerificationfailed === 0 || panVerificationfailed === 4 ? (
        <>
          {selectedFile ? (
            <div
              className={`relative p-2 mb-8 text-sm text-black border border-darkgray rounded-md max-w[36rem]`}>
              <div className="flex justify-start">
                <img src={preview} className="w-8 h-8" />
                <span className="flex flex-col ml-2">
                  <div className="text-xs text-extrdarkgray font-sans font-[300]">Pan Copy</div>
                  {selectedFile?.name}
                </span>
              </div>
            </div>
          ) : (
            ''
          )}
          {selectedFile ? (
            <ButtonGlobal className="cancel text-white" onClick={() => clearSelectedImg()}>
              X
            </ButtonGlobal>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Browse;
