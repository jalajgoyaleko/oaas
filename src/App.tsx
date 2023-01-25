import React, { useState } from 'react';
import Header from './components/Common/Header';
import SncdHeadermobile from './components/Common/SncdHeadermobile';
import HomePage from './components/HomePage';
import { useStore } from './store/zustand';

function App() {
  const { currentStep } = useStore();
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);
  const handleSidebarToggle = () => {
    setSideBarToggle((prev) => !prev);
  };
  return (
    <div className={`${currentStep === 0 ? 'bg-gray' : 'bg-white'} sm:bg-gray w-full min-h-screen`}>
      <Header />
      <SncdHeadermobile handleSidebarToggle={handleSidebarToggle} />
      <HomePage sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle} />
    </div>
  );
}

export default App;
