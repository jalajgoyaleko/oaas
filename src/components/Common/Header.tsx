import React from 'react';
import Logo from '../../assets/Images/logo.png';

const Header = () => {
  return (
    <div className="md:container md:mx-auto w-screen h-[56px] z-10 bg-white fixed drop-shad low-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-ceter">
          <div className="text-sm font-500 mr-4 sm:text-2lg">
            <img src={Logo} alt="logo" className="h-8 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;