import React, { useEffect } from 'react';
import camera from '../assets/icons/camera.svg';
import imageicon from '../assets/icons/imageicon.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import alert from '../assets/icons/alert.svg';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';
import { useStore } from '../store/zustand';

const PanVerification = () => {
  const {
    cameraStatus,
    uploadedImage,
    setUploadedImage,
    setCameraStatus,
    setSelectedFile,
    selectedFile,
    preview,
    setPreview,
    setManageVeriyStep,
    setManageVeriyStepback,
    panVerificationfailed,
    setIsYourPan
  } = useStore();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
    setManageVeriyStep();
  };

  const clearSelectedImg = () => {
    setSelectedFile(undefined);
    setManageVeriyStepback();
  };

  return (
    <div className="mt-8">
      <div className="relative">
        {uploadedImage === 0 ? (
          cameraStatus === true ? (
            <Camera type="Pan" />
          ) : (
            <div className="documentimgstyle w-[100%] h-[330px]">
              <img src={camera} className="w-[3rem] h-[3rem] flex-col mb-6" />
              <div className="">Drag and drop copy of PAN Card or you can</div>
              <div className="flex">
                <ButtonGlobal
                  className="documentbtn mt-8"
                  onClick={() => {
                    setUploadedImage(uploadedImage + 1);
                  }}>
                  <img src={imageicon} className="w-[18px] h-[18px] mr-2" />
                  Browse
                </ButtonGlobal>
                <ButtonGlobal className="documentbtn mt-8" onClick={() => setCameraStatus(true)}>
                  <img src={filledcamera} className="w-[18px] h-[18px] mr-2" /> Open Camera
                </ButtonGlobal>
              </div>
            </div>
          )
        ) : panVerificationfailed === 3 ? (
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
            <div className="block w-full p-3 mt-5 text-sm text-extrdarkgray border border-darkgray rounded-md">
              <div className="mt-1 mb-3">
                <span className="font-[400] text-lg text-black">Your PAN Details</span>
                <div>Below are the details as per PAN record.</div>
              </div>
              <div className="flex justify-between w-[50%] mt-8 mb-4">
                <div>
                  <div className="text-extrdarkgray text-xs">Your Full Name</div>
                  <div className="text-black text-md font-[400] mt-2">Priyanka Kothari</div>
                </div>
                <div>
                  <div className="text-extrdarkgray text-xs">PAN</div>
                  <div className="text-black text-md font-[400] mt-2">AAGPQ3801C</div>
                </div>
              </div>
            </div>
          </>
        ) : panVerificationfailed === 1 ? (
          <div className="max-w-[57rem] mb-7">
            <div className="flex">
              <div className="w-[37rem] mr-3 p-[5px] text-sm text-black border rounded-md bg-lightred border-red">
                <div className="flex justify-start">
                  <img src={preview} className="w-8 h-8" />
                  <span className="flex flex-col ml-2">
                    <div className="text-xs text-extrdarkgray font-sans font-[300]">Pan Copy</div>
                    {selectedFile?.name}
                  </span>
                </div>
              </div>
              <div className="side"></div>
              <div className="w-[11rem] flex justify-center items-center p-2 text-white text-[12px] rounded-md bg-red">
                You have 1 attempt left
              </div>
            </div>
            <div className="mt-2 text-[12px] max-w-[37rem] text-extrdarkgray flex font-sans">
              <img src={alert} alt="alert" className="w-6 h-6 mr-3" /> We couldn&lsquo;t fetch
              details from PAN. Please upload a clear copy of PAN to proceed. You can also skip this
              step to proceed with next option.
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
              <div className="flex justify-between items-center">
                <div className="mt-1 mb-3">
                  <span className="font-[500] text-black">Is this your PAN</span>
                  <div className="text-md mt-2">BJGD6432G</div>
                </div>
                <div>
                  <ButtonGlobal
                    className="bg-sky border-sky border-[1px] hover:bg-black text-white py-1 px-6 rounded mr-3"
                    onClick={() => (setIsYourPan(true), setManageVeriyStep())}>
                    Yes
                  </ButtonGlobal>
                  <ButtonGlobal className="bg-white shadow-2xl border-sky border-[1px] hover:bg-white text-sky py-1 px-6 rounded">
                    No
                  </ButtonGlobal>
                </div>
              </div>
            </div>
          </>
        ) : panVerificationfailed === 0 || panVerificationfailed === 4 ? (
          <>
            <div
              className={`relative p-2 mb-8 text-sm text-black border border-darkgray rounded-md max-w[36rem]`}>
              {!selectedFile ? (
                <div>
                  <input type="file" onChange={onSelectFile} />
                </div>
              ) : (
                <div className="flex justify-start">
                  <img src={preview} className="w-8 h-8" />
                  <span className="flex flex-col ml-2">
                    <div className="text-xs text-extrdarkgray font-sans font-[300]">Pan Copy</div>
                    {selectedFile?.name}
                  </span>
                </div>
              )}
            </div>
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
    </div>
  );
};

export default PanVerification;
