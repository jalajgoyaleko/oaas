import React from 'react';
import WelcomeIcon from '../assets/Images/welcomeIcon.png';
import { useStore } from '../store/zustand';
import ButtonGlobal from './Common/ButtonGlobal';

type WelcomeProps = {
  steps: string[];
  stepsStatus: any;
  setStepsStatus: React.Dispatch<React.SetStateAction<any>>;
};
const Welcome = ({ steps, stepsStatus, setStepsStatus }: WelcomeProps) => {
  const { currentStep, setCompleted, setCurrentStepPlus } = useStore();
  return (
    <div className="w-full min-h-[80vh] sm:min-h-[85%] flex items-center justify-center bg-white rounded-2xl">
      <div className="items-center text-center text-black">
        <img
          src={WelcomeIcon}
          alt="welcome icon"
          className="flex items-center text-center h-48 w-48 sm:h-52 sm:w-52 mr-auto ml-auto sm:mt-auto mb-6 sm:mb-6"
        />
        <b className="text-[24px]">Welcome!</b>
        <p className="sm:font-normal text-[18px] pt-2 pl-4 pr-4">
          <span className="sm:block">
            Happy to see you here. Lets start your onboarding journey.
          </span>
          <span className="sm:block"> We ensure, you&apos;ll be assisted at every step.</span>
        </p>
        <ButtonGlobal
          className="bg-sky hover:bg-black text-white font-bold mt-6 sm:mt-8 py-2 px-8 rounded"
          onClick={() => {
            currentStep === steps.length + 1
              ? setCompleted(true)
              : (setCurrentStepPlus(),
                setStepsStatus([
                  ...stepsStatus,
                  { progress: 'In Progress', step: currentStep + 1 }
                ]));
          }}>
          {currentStep === steps.length + 1 ? 'Done' : 'Start Onboarding'}
        </ButtonGlobal>
      </div>
    </div>
  );
};

export default Welcome;
