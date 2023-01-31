import React from 'react';
import WelcomeIcon from '../assets/Images/welcomeIcon.png';
import { useStore } from '../store/zustand';
import ButtonGlobal from './Common/ButtonGlobal';

type WelcomeProps = {
  steps: string[];
};
const Welcome = ({ steps }: WelcomeProps) => {
  const { currentStep, setCompleted, setCurrentStepPlus } = useStore();
  return (
    <div className="welcome">
      <div className="items-center text-center text-black">
        <img src={WelcomeIcon} alt="welcome icon" className="welcome_img" />
        <b className="text-[24px]">Welcome!</b>
        <p className="sm:font-normal text-[18px] pt-2 pl-4 pr-4">
          <span className="sm:block">
            Happy to see you here. Lets start your onboarding journey.
          </span>
          <span className="sm:block"> We ensure, you&apos;ll be assisted at every step.</span>
        </p>
        <ButtonGlobal
          className="welcome_btn"
          onClick={() => {
            currentStep === steps.length + 1 ? setCompleted(true) : setCurrentStepPlus();
          }}>
          {currentStep === steps.length + 1 ? 'Done' : 'Start Onboarding'}
        </ButtonGlobal>
      </div>
    </div>
  );
};

export default Welcome;
