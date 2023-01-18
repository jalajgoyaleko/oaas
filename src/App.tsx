import React from 'react';
import Header from './components/Common/Header';
import HomePage from './components/HomePage';
import { useStore } from './store/zustand';

function App() {
  const { currentStep } = useStore();
  return (
    <div className={`${currentStep === 0 ? 'bg-gray' : 'bg-white'} sm:bg-gray w-full min-h-screen`}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
