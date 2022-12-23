import React, { useState } from 'react';
import Sidebar from './Common/Sidebar';
import SupersetComponent from './SupersetComponent';
import Welcome from './Welcome';
import PanVerification from './PanVerification';
import AdharVerifiction from './AdharVerifiction';
import PanAdharMatch from './PanAdharMatch';
import Business from './Business';
import VideoKYC from './VideoKYC';
import OnboardingStatus from './OnboardingStatus';
import LoctionCapture from './LoctionCapture';

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
  const [status, setStatus] = useState('In Progress');
  const [uploadedImage, setUploadedImage] = useState(0);
  const [panStatus, setPanStatus] = useState(false);
  const [finish, setFinish] = useState(false);
  const [panStatusResult, setPanStatusResult] = useState('Good Match');

  return (
    <div className="md:container md:mx-auto h-screens pt-20 w-screens">
      <div className="flex justify-between items-center w-screens h-screens">
        <div className="flex h-full w-full">
          <Sidebar
            currentStep={currentStep}
            steps={steps}
            completed={completed}
            status={status}
            setCurrentStep={setCurrentStep}
          />
          <div className="flex w-full rounded-2xl ml-8 bg-white">
            {currentStep === 0 ? (
              <Welcome
                setCurrentStep={setCurrentStep}
                setCompleted={setCompleted}
                currentStep={currentStep}
                steps={steps}
              />
            ) : currentStep === 1 ? (
              <SupersetComponent
                setCurrentStep={setCurrentStep}
                setCompleted={setCompleted}
                currentStep={currentStep}
                steps={steps}
                setStatus={setStatus}
                btnName="Start Location Capture"
                panStatus={true}
                panStatusResult="Matching Failed"
                pagename="Location Capturing"
                setFinish={setFinish}
                finish={finish}>
                <LoctionCapture />
              </SupersetComponent>
            ) : currentStep === 2 ? (
              <SupersetComponent
                setCurrentStep={setCurrentStep}
                setCompleted={setCompleted}
                currentStep={currentStep}
                steps={steps}
                setStatus={setStatus}
                btnName="Verify PAN"
                panStatus={true}
                panStatusResult="Matching Failed"
                pagename="PAN Verification"
                tagLine="Upload your PAN copy to verify your business. Accepted format are "
                setFinish={setFinish}
                finish={finish}>
                <PanVerification
                  uploadedImage={uploadedImage}
                  setUploadedImage={setUploadedImage}
                />
              </SupersetComponent>
            ) : currentStep === 3 ? (
              <SupersetComponent
                setCurrentStep={setCurrentStep}
                setCompleted={setCompleted}
                currentStep={currentStep}
                steps={steps}
                setStatus={setStatus}
                btnName="Verify Aadhaar"
                panStatus={true}
                panStatusResult="Matching Failed"
                pagename="Aadhaar Verification"
                tagLine="Upload your Aadhar Copy front and back to verify yourself. Accepted format are "
                setFinish={setFinish}
                finish={finish}>
                <AdharVerifiction setUploadedImage={setUploadedImage} />
              </SupersetComponent>
            ) : currentStep === 4 ? (
              <SupersetComponent
                setCurrentStep={setCurrentStep}
                setCompleted={setCompleted}
                currentStep={currentStep}
                steps={steps}
                setStatus={setStatus}
                btnName={`${panStatus === false ? 'Start Matching' : 'Next'}`}
                setPanStatus={setPanStatus}
                setPanStatusResult={setPanStatusResult}
                panStatus={true}
                panStatusResult={panStatusResult}
                pagename="PAN - Aadhaar Matching"
                setFinish={setFinish}
                finish={finish}>
                <PanAdharMatch panStatus={true} panStatusResult={panStatusResult} />
              </SupersetComponent>
            ) : currentStep === 5 ? (
              <SupersetComponent
                setCurrentStep={setCurrentStep}
                setCompleted={setCompleted}
                currentStep={currentStep}
                steps={steps}
                setStatus={setStatus}
                btnName="Verify Aadhaar"
                panStatus={true}
                panStatusResult="Matching Failed"
                pagename="Business Details"
                tagLine="Upload your PAN copy to verify your business. Accepted format are "
                setFinish={setFinish}
                finish={finish}>
                <Business />
              </SupersetComponent>
            ) : currentStep === 6 ? (
              <SupersetComponent
                setCurrentStep={setCurrentStep}
                setCompleted={setCompleted}
                currentStep={currentStep}
                steps={steps}
                setStatus={setStatus}
                btnName={'Next'}
                setPanStatus={setPanStatus}
                panStatus={panStatus}
                setPanStatusResult={setPanStatusResult}
                panStatusResult="Matching Failed"
                pagename="Video KYC"
                tagLine="Thanks for completing your personal and address verification. Take a selfie of 5-10 seconds
                to complete the eKYC process."
                setFinish={setFinish}
                finish={finish}>
                <VideoKYC />
              </SupersetComponent>
            ) : (
              <SupersetComponent
                setCurrentStep={setCurrentStep}
                setCompleted={setCompleted}
                currentStep={currentStep}
                steps={steps}
                setStatus={setStatus}
                btnName="Submit"
                setPanStatus={setPanStatus}
                panStatus={panStatus}
                setPanStatusResult={setPanStatusResult}
                panStatusResult={panStatusResult}
                pagename="Onboarding Status"
                tagLine="Below are the details of the completion status of your onboarding."
                setFinish={setFinish}
                finish={finish}>
                <OnboardingStatus />
              </SupersetComponent>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
