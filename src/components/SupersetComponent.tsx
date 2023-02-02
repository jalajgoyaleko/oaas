import React from 'react';
import ButtonGlobal from './Common/ButtonGlobal';

type SupersetComponentProps = {
  pagename: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  currentStep: number;
  steps: string[];
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  children?: React.ReactNode;
  btnName: string;
  setPanStatus?: any;
  panStatus: boolean;
  setPanStatusResult?: any;
  panStatusResult?: string;
  tagLine?: string;
  finish?: boolean;
  setFinish?: any;
  capturelocationData?: any;
  capturelocation?: any;
  setCapturelocationData?: React.Dispatch<React.SetStateAction<any | null>>;
  setCapturelocation?: React.Dispatch<React.SetStateAction<number>>;
};
const SupersetComponent = ({
  pagename,
  currentStep,
  steps,
  children,
  btnName,
  setPanStatus,
  panStatus,
  setPanStatusResult,
  panStatusResult,
  tagLine,
  finish,
  setFinish,
  capturelocationData,
  capturelocation,
  setCurrentStep,
  setCompleted,
  setStatus,
  setCapturelocationData,
  setCapturelocation
}: SupersetComponentProps) => {
  const handleStatus = () => {
    setCurrentStep((prev) => prev + 1);
    setStatus('Skipped');
  };
  const handleStepbtn = () => {
    currentStep === steps.length + 1
      ? setCompleted(true)
      : panStatus === true && panStatusResult === 'Matching Failed' && finish === false
      ? setCurrentStep((prev) => prev + 1)
      : setCurrentStep((prev) => prev);
    setPanStatus(true);
    btnName === 'Next' ? setPanStatusResult('Good Match') : setPanStatusResult('Matching Failed');
    currentStep === 8 ? setFinish(true) : '';
  };
  const captureLocation = () => {
    setCapturelocation?.((prev) => prev + 1);
  };
  const handleOnclick = capturelocation === 0 ? captureLocation : handleStepbtn;
  console.log(capturelocationData);

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
        className="bg-sky hover:bg-black text-white font-semibold mt-8 py-2 px-8 rounded"
        capturelocation={capturelocation}
        setCapturelocationData={setCapturelocationData}
        onClick={handleOnclick}>
        {btnName}
      </ButtonGlobal>

      {currentStep === steps.length + 1 || currentStep === 7 ? (
        ''
      ) : (
        <ButtonGlobal className="font-semibold ml-10" onClick={handleStatus}>
          Skip this step
        </ButtonGlobal>
      )}
    </div>
  );
};

export default SupersetComponent;
