import React from 'react';

const Welcome = () => {
  return (
    <div className="ml-8 p-24 bg-white rounded-2xl ">
      <div className="pr-24 pl-24">
        <div className="items-center text-center text-black-600 relative pr-28 pl-28">
          <div className="font-bold text-lg mt-auto mb-4 mr-auto ml-auto h-20 w-20 text-gray-700 rounded-full bg-gray-200 py-20 px-20 flex items-center justify-center font-mono">
            <div className="font-bold text-lg h-16 w-16 text-gray-700 rounded-full bg-gray-400 py-16 px-16 flex items-center justify-center font-mono">
              ICON
            </div>
          </div>
          <b className="text-lg font-serif">Welcome!</b>
          <p>Happy to see you here. Lets start your onboarding journey.</p>
          <p>We ensure, you&apos;ll be assisted at every step.</p>
          <button className="bg-sky-800  hover:bg-gray-900 text-white font-bold mt-12 py-2 px-4 rounded">
            Start Onboarding
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
