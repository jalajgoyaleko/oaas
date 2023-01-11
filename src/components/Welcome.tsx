import React from 'react';
import WelcomeIcon from '../assets/Images/welcomeIcon.png';
import { useStore } from '../store/zustand';
import ButtonGlobal from './Common/ButtonGlobal';

type WelcomeProps = {
  steps: string[];
};
const Welcome = ({ steps }: WelcomeProps) => {
  const { currentStep, setCompleted, setCurrentStep } = useStore();
  return (
    <div className="ml-8 w-full flex items-center justify-center bg-white rounded-2xl">
      <div className="items-center text-center text-black">
        <img
          src={WelcomeIcon}
          alt="welcome icon"
          className="flex items-center text-center h-52 w-52 mr-auto ml-auto mt-auto mb-6"
        />
        <b className="text-[24px]">Welcome!</b>
        <p className="font-normal">Happy to see you here. Lets start your onboarding journey.</p>
        <p className="font-normal">We ensure, you&apos;ll be assisted at every step.</p>
        <ButtonGlobal
          className="bg-sky hover:bg-black text-white font-bold mt-8 py-2 px-8 rounded"
          onClick={() => {
            currentStep === steps.length + 1 ? setCompleted(true) : setCurrentStep(currentStep + 1);
          }}>
          {currentStep === steps.length + 1 ? 'Done' : 'Start Onboarding'}
        </ButtonGlobal>
      </div>
    </div>
  );
};

export default Welcome;
