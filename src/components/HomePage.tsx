import React, { useState } from 'react';
import Sidebar from './Common/Sidebar';
import Welcome from './Welcome';

const HomePage = () => {
  const steps = [
    'Location Capturing',
    'Pan Verification',
    'Aadhaar Verification',
    'PAN - Aadhaar Matching',
    'Business Details',
    'Video KYC',
    'Onboarding Status'
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  return (
    <div className="md:container md:mx-auto h-screens pt-16 pb-[90px] w-screens">
      <div className="px-2 pt-2 flex justify-between items-center w-full h-full">
        <div className="flex">
          <Sidebar currentStep={currentStep} steps={steps} completed={completed} />
          <Welcome
            setCurrentStep={setCurrentStep}
            setCompleted={setCompleted}
            currentStep={currentStep}
            steps={steps}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
