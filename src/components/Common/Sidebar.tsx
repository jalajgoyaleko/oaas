import React from 'react';
import '../../assets/Styles/sidebar.css';
import CompleteMark from '../../assets/icons/completemark.svg';
import ButtonGlobal from './ButtonGlobal';

type StepperProps = {
  currentStep: number;
  steps: string[];
  completed: boolean;
  status: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};
const Sidebar = ({ currentStep, steps, completed, status, setCurrentStep }: StepperProps) => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="p-5 bg-sky rounded-t-2xl">
        <div className="flex-col">
          <div className="mb-2 text-base text-white">ONBOARDING PROGRESS</div>
          <div className="w-[230px] bg-white rounded-full h-2.5 mb-4">
            <div
              className={`bg-green h-2.5 rounded-full ${
                currentStep === 2
                  ? 'w-[14%]'
                  : currentStep === 3
                  ? 'w-[28%]'
                  : currentStep === 4
                  ? 'w-[42%]'
                  : currentStep === 5
                  ? 'w-[56%]'
                  : currentStep === 6
                  ? 'w-[70%]'
                  : currentStep === 7
                  ? 'w-[84%]'
                  : currentStep === 8
                  ? 'w-[100]'
                  : 'w-[0]'
              }`}></div>
            <div className="text-xs text-end pt-1 text-white">
              {currentStep >= 2 ? currentStep - 1 : 0} Steps Completed
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pr-5 pb-5 pl-5 bg-white rounded-b-2xl">
        {steps?.map((step: any, i: any) => {
          return (
            <ButtonGlobal
              key={i}
              className={`step-item ${currentStep === i + 1 && 'active'} ${
                (i + 1 < currentStep || completed) && 'complete'
              }`}
              onClick={() => {
                setCurrentStep(i + 1);
              }}>
              <span className="flex pb-5">
                <span className="step">
                  {currentStep === i + 1 ? (
                    i + 1
                  ) : currentStep < i + 1 ? (
                    i + 1
                  ) : (
                    <img src={CompleteMark} alt="complete mark" className="w-[15px] h-[11px]" />
                  )}
                </span>{' '}
                <span>
                  <p className="text-black ml-2 pb-2">{step}</p>
                  {currentStep === i + 1 ? (
                    <div
                      className={`w-[80px] rounded-full h-[20px] ml-2 text-xs flex justify-center items-center ${
                        status === 'Skipped'
                          ? 'text-red bg-white border-red border-2'
                          : 'text-white bg-orange'
                      }`}>
                      {status}
                    </div>
                  ) : currentStep < i + 1 ? (
                    ''
                  ) : (
                    ''
                  )}
                </span>
              </span>
            </ButtonGlobal>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
