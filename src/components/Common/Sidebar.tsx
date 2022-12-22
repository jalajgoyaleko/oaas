import React from 'react';
import '../../assets/Styles/sidebar.css';
import CompleteMark from '../../assets/Images/completemark.svg';

type StepperProps = {
  currentStep: number;
  steps: any;
  completed: boolean;
};
const Sidebar = ({ currentStep, steps, completed }: StepperProps) => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="p-5 bg-sky rounded-t-2xl">
        <div className="flex-col">
          <div className="mb-2 text-base text-white">ONBOARDING PROGRESS</div>
          <div className="w-[230px] bg-white rounded-full h-2.5 mb-4">
            <div className="bg-green h-2.5 rounded-full w-[50%]"></div>
            <div className="text-xs text-end pt-1 text-white">{currentStep} Steps Completed</div>
          </div>
        </div>
      </div>
      <div className="pt-5 pr-5 pb-5 pl-5 bg-white rounded-b-2xl">
        {steps?.map((step: any, i: any) => {
          return (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && 'active'} ${
                (i + 1 < currentStep || completed) && 'complete'
              }`}>
              <span className="flex pb-5">
                <span className="step">
                  {currentStep === i + 1 ? (
                    i + 1
                  ) : currentStep < i + 1 ? (
                    i + 1
                  ) : (
                    <img src={CompleteMark} alt="complete mark" className="w-[15px] h-[15px]" />
                  )}
                </span>{' '}
                <span>
                  <p className="text-black ml-2 pb-2">{step}</p>
                  {currentStep === i + 1 ? (
                    <div className="w-[80px] rounded-full h-[20px] ml-2 text-xs text-center text-white bg-orange">
                      In Progress
                    </div>
                  ) : currentStep < i + 1 ? (
                    ''
                  ) : (
                    ''
                  )}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
