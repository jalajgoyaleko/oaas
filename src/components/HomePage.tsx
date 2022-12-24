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
import alert from './../assets/Images/alert.png';
import tickmark from './../assets/icons/tickmark.svg';

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
  const [fetchData, setFetchData] = useState(false);
  const [finish, setFinish] = useState(false);
  const [panStatusResult, setPanStatusResult] = useState('Good Match');

  return (
    <div className="md:container h-screens pt-7 w-screens">
      <div className="flex items-center">
        <div className="containerboxover relative">
          <div className="boxover">
            <div className="flex justify-between">
              <Sidebar
                currentStep={currentStep}
                steps={steps}
                completed={completed}
                status={status}
                setCurrentStep={setCurrentStep}
              />
              <div className="flex w-full rounded-2xl ml-8 bg-white relative">
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
                      setFetchData={setFetchData}
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
                    btnName="Next"
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
                {fetchData === true ? (
                  <div className="z-20 absolute top-0 backdrop-blur-lg left-0 bottom-0 right-0 rounded-2xl flex flex-col items-center justify-center">
                    <span className="w-32 h-32 items-center justify-center flex rounded-full border-4 border-green">
                      <span
                        className="w-24 h-24 items-center justify-center flex rounded-full bg-white"
                        onClick={() => {
                          setFetchData(false);
                        }}>
                        <span className="w-24 h-24 items-center justify-center flex flex-col rounded-full">
                          <img src={tickmark} alt="complete mark" className="w-10 h-10" />
                          <div className="text-green">70%</div>
                        </span>
                      </span>
                    </span>
                    <span className="mt-4 font-bold text-black text-xl">Fetching Details!</span>
                    <span className="mt-4 text-black text-md">
                      Please wait while we fetch details from PAN. This may take a few seconds.
                    </span>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          {finish === true ? (
            <div className="z-20 absolute top-0 backdrop-blur-lg left-0 bottom-0 right-0 rounded-2xl flex flex-col items-center justify-center">
              <span className="w-32 h-32 items-center justify-center flex rounded-full border-4 border-pink">
                <span className="w-24 h-24 items-center justify-center flex rounded-full bg-white">
                  <img src={alert} alt="alert" className="w-12 h-12" />
                </span>
              </span>
              <span className="mt-4 font-bold text-black text-xl">Alert!</span>
              <span className="mt-4 text-black text-md w-[35%] text-center">
                Your onboarding process can not be completed without Aadhaar verification. Please
                complete the same to proceed.
              </span>
              <button
                className="bg-sky  hover:bg-black text-white font-semibold mt-8 py-2 px-8 rounded"
                onClick={() => {
                  setFinish(false);
                }}>
                Go Back
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
