import React from 'react';

const Header = () => {
  return (
    <div className="md:container md:mx-auto w-screen h-[56px] z-10 bg-white fixed drop-shad low-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-ceter">
          <div className="text-sm font-500 mr-4 sm:text-2lg">
            <span>LOGO </span>
            <span className="text-cyan-400">NAME</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
