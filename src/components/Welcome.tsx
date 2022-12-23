import React from 'react';
import WelcomeIcon from '../assets/Images/welcomeIcon.png';

type WelcomeProps = {
  setCurrentStep: any;
  setCompleted: any;
  currentStep: number;
  steps: any;
};
const Welcome = ({ setCurrentStep, setCompleted, currentStep, steps }: WelcomeProps) => {
  return (
    <div className="ml-8 w-full flex items-center justify-center bg-white rounded-2xl">
      <div className="items-center text-center text-black">
        <img
          src={WelcomeIcon}
          alt="welcome icon"
          className="flex items-center text-center h-52 w-52 mr-auto ml-auto mt-auto mb-6"
        />
        <b className="text-lg font-semibold">Welcome!</b>
        <p className="font-normal">Happy to see you here. Lets start your onboarding journey.</p>
        <p className="font-normal">We ensure, you&apos;ll be assisted at every step.</p>
        <button
          className="bg-sky  hover:bg-black text-white font-bold mt-8 py-2 px-4 rounded"
          onClick={() => {
            currentStep === steps.length + 1
              ? setCompleted(true)
              : setCurrentStep((prev: any) => prev + 1);
          }}>
          {currentStep === steps.length + 1 ? 'Done' : 'Start Onboarding'}
        </button>
      </div>
    </div>
  );
};

export default Welcome;
