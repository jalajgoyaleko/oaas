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
    <div className="md:container md:mx-auto h-screens pt-20 w-screens">
      <div className="flex justify-between items-center w-screens h-screens">
        <div className="flex h-full w-full">
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
