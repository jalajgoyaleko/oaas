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
import ButtonGlobal from './Common/ButtonGlobal';
import { useStore } from '../store/zustand';

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
  const { currentStep, panStatus, fetchData, finish, setFinish, setFetchData } = useStore();

  const [capturelocationData, setCapturelocationData] = useState<any | null>();
  const [stepsStatus, setStepsStatus] = useState<any>([]);

  return (
    <div className="h-screens py-7 w-full px-24">
      <div className="flex items-center">
        <div className="containerboxover relative">
          <div className="boxover">
            <div className="flex justify-between">
              <Sidebar steps={steps} stepsStatus={stepsStatus} />
              <div className="flex w-full rounded-2xl ml-8 bg-white relative">
                {currentStep === 0 ? (
                  <Welcome steps={steps} />
                ) : currentStep === 1 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName="Start Location Capture"
                    pagename="Location Capturing"
                    capturelocationData={capturelocationData}
                    setCapturelocationData={setCapturelocationData}
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <LoctionCapture />
                  </SupersetComponent>
                ) : currentStep === 2 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName="Verify PAN"
                    pagename="PAN Verification"
                    tagLine="Upload your PAN copy to verify your business. Accepted format are "
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <PanVerification />
                  </SupersetComponent>
                ) : currentStep === 3 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName="Verify Aadhaar"
                    pagename="Aadhaar Verification"
                    tagLine="Upload your Aadhar Copy front and back to verify yourself. Accepted format are "
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <AdharVerifiction />
                  </SupersetComponent>
                ) : currentStep === 4 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName={`${
                      panStatus === 0 ? 'Start Matching' : panStatus === 1 ? 'Next' : 'Retry'
                    }`}
                    pagename="PAN - Aadhaar Matching"
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <PanAdharMatch />
                  </SupersetComponent>
                ) : currentStep === 5 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName="Next"
                    pagename="Business Details"
                    tagLine="Upload your PAN copy to verify your business. Accepted format are "
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <Business />
                  </SupersetComponent>
                ) : currentStep === 6 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName="Next"
                    pagename="Video KYC"
                    tagLine="Thanks for completing your personal and address verification. Take a selfie of 5-10 seconds
                to complete the eKYC process."
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <VideoKYC />
                  </SupersetComponent>
                ) : (
                  <SupersetComponent
                    steps={steps}
                    btnName="Submit"
                    pagename="Onboarding Status"
                    tagLine="Below are the details of the completion status of your onboarding."
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <OnboardingStatus />
                  </SupersetComponent>
                )}
                {fetchData === true ? (
                  <div className="z-20 absolute top-0 backdrop-blur-lg left-0 bottom-0 right-0 rounded-2xl flex flex-col items-center justify-center">
                    <span className="w-32 h-32 items-center justify-center flex rounded-full border-4 border-green">
                      <span
                        className="w-24 h-24 items-center justify-center flex rounded-full bg-white drop-shadow-2xl"
                        onClick={() => {
                          setFetchData(false);
                        }}>
                        <span className="w-24 h-24 items-center justify-center flex flex-col rounded-full">
                          <img src={tickmark} alt="complete mark" className="w-[3rem] h-[2.3rem]" />
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
              <ButtonGlobal
                className="bg-sky  hover:bg-black text-white font-semibold mt-8 py-2 px-8 rounded"
                onClick={() => {
                  setFinish(false);
                }}>
                Go Back
              </ButtonGlobal>
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
