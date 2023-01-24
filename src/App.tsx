import React, { useState } from 'react';
import Header from './components/Common/Header';
import HomePage from './components/HomePage';
import { useStore } from './store/zustand';
import nextarrow from './assets/icons/nextarrow.svg';
import previousarrow from './assets/icons/previousarrow.svg';

function App() {
  const { currentStep } = useStore();
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);
  const handleSidebarToggle = () => {
    setSideBarToggle((prev) => !prev);
  };
  return (
    <div className={`${currentStep === 0 ? 'bg-gray' : 'bg-white'} sm:bg-gray w-full min-h-screen`}>
      <Header />
      <div
        className={`${
          currentStep !== 0 ? 'block shadow-xl border-2 border-gray p-2' : 'hidden'
        } sm:hidden`}>
        <span className="flex px-4">
          <img
            src={previousarrow}
            alt="nextarrow"
            className="bg-sky p-3 rounded-lg"
            onClick={handleSidebarToggle}
          />
          <span className="w-[100%] flex justify-center">
            <span className="mbl_snd_head_step mr-2">1</span>
            <span>
              <div className="text-[18px] text-sky font-[500]">Location Capturing</div>
              <div className="text-[15px] text-orange">In-Progress</div>
            </span>
          </span>
          <img
            src={nextarrow}
            alt="nextarrow"
            className="bg-sky p-3 rounded-lg"
            onClick={handleSidebarToggle}
          />
        </span>
      </div>
      <HomePage sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle} />
    </div>
  );
}

export default App;
