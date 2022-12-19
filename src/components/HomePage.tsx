import React from 'react';
import Stepper from './Stepper';
import Welcome from './Welcome';

const HomePage = () => {
  return (
    <div className="md:container md:mx-auto h-screen pt-20 pb-20 w-screen">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex">
          <Stepper />
          <Welcome />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
