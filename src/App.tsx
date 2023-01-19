import React from 'react';
import Header from './components/Common/Header';
import HomePage from './components/HomePage';
import { useStore } from './store/zustand';
import nextarrow from './assets/icons/nextarrow.svg';

function App() {
  const { currentStep } = useStore();
  return (
    <div className={`${currentStep === 0 ? 'bg-gray' : 'bg-white'} sm:bg-gray w-full min-h-screen`}>
      <Header />
      <div
        className={`${
          currentStep !== 0 ? 'block shadow-xl border-2 border-gray p-2' : 'hidden'
        } sm:hidden`}>
        <span className="flex justify-between px-2">
          <span className="w-[100%] text-center">1 Location Capturing</span>
          <img src={nextarrow} alt="nextarrow" className="bg-sky p-3 rounded-lg" />
        </span>
      </div>
      <HomePage />
    </div>
  );
}

export default App;
