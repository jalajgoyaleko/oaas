import React, { useState } from 'react';
import { useStore } from '../store/zustand';
import ButtonGlobal from './Common/ButtonGlobal';
import Modal from './Common/Modal';

type SupersetComponentProps = {
  pagename: string;
  steps: string[];
  children?: React.ReactNode;
  btnName: string;
  tagLine?: string;
};
const SupersetComponent = ({
  pagename,
  steps,
  children,
  btnName,
  tagLine
}: SupersetComponentProps) => {
  const {
    currentStep,
    panStatus,
    finish,
    capturelocation,
    capturelocationData,
    setCapturelocation,
    setPanStatusResult,
    setFinish,
    setPanStatus,
    setCurrentStep,
    setCompleted,
    setStatus,
    manageVeriyStep
  } = useStore();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleStatus = () => {
    setCurrentStep(currentStep + 1);
    setStatus('Skipped');
  };
  const handleStepbtn = () => {
    currentStep === steps.length + 1
      ? setCompleted(true)
      : panStatus === 0 || panStatus === 1 || (panStatus === 2 && finish === false)
      ? setCurrentStep(currentStep + 1)
      : setCurrentStep(currentStep);
    setPanStatus(panStatus === 2 ? panStatus : panStatus + 1);
    btnName === 'Next' ? setPanStatusResult('Good Match') : setPanStatusResult('Matching Failed');
    currentStep === 8 ? setFinish(true) : '';
  };

  const captureLocation = () => {
    setCapturelocation(capturelocationData + 1);
  };
  const handleOnclick = capturelocation === 0 ? captureLocation : handleStepbtn;

  const showInfromation = () => {
    setShowModal(true);
  };

  return (
    <div className="p-8">
      <div className="text-[24px]">{pagename}</div>
      {currentStep === 2 ||
      currentStep === 3 ||
      currentStep === 5 ||
      currentStep === 6 ||
      currentStep === 7 ? (
        <div className="mt-3">
          {tagLine}
          {currentStep === 2 || currentStep === 3 || currentStep === 5 ? (
            <span className="text-sky">.jpg, .png, .pdf</span>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
      {children}
      <ButtonGlobal
        className={
          (manageVeriyStep === 0 && btnName === 'Verify PAN') || btnName === 'Verify Aadhaar'
            ? 'bg-darkgray text-white mt-8 py-2 px-8 rounded'
            : 'bg-sky hover:bg-black text-white font-semibold mt-8 py-2 px-8 rounded'
        }
        onClick={
          btnName === 'Verify PAN' || btnName === 'Verify Aadhaar' ? showInfromation : handleOnclick
        }
        disabled={
          (manageVeriyStep === 0 && btnName === 'Verify PAN') || btnName === 'Verify Aadhaar'
            ? true
            : false
        }>
        {btnName}
      </ButtonGlobal>

      {currentStep === steps.length + 1 || currentStep === 7 ? (
        ''
      ) : (
        <ButtonGlobal className="font-semibold ml-10" onClick={handleStatus}>
          Skip this step
        </ButtonGlobal>
      )}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        handleOnclick={handleOnclick}
        attentionmsg={
          btnName === 'Verify PAN' ? (
            <>
              Are you sure you want to upload this PAN. You will <br /> get only two attempts for
              PAN verification
            </>
          ) : btnName === 'Verify Aadhaar' ? (
            <>
              Are you sure you want to upload this Aadhaar. You will <br /> get only one attempt for
              Aadhaar verification.
            </>
          ) : (
            ''
          )
        }
      />
    </div>
  );
};

export default SupersetComponent;
