import React from 'react';
import downarrowfilled from '../assets/icons/downarrowfilled.svg';
import ButtonGlobal from './Common/ButtonGlobal';
import InputGlobal from './Common/InputGlobal';
import Labelglobal from './Common/Labelglobal';

const Business = () => {
  return (
    <>
      <div className="mt-8 text-black text-sm font-bold">Business Type</div>
      <div className="mt-2 border-2 border-gray rounded-md">
        <ButtonGlobal
          data-dropdown-toggle="dropdownSmall"
          className="inline-flex items-center py-2 px-3 mr-3 mb-3 text-sm font-medium text-center text-darkgray bg-white rounded-lg md:mb-0">
          -- Select --
          <img
            src={downarrowfilled}
            alt="downarrowfilled"
            className="w-3 h-3 flex absolute left-[64%]"
          />
        </ButtonGlobal>
      </div>
      <form className="bg-white mt-4">
        <Labelglobal className="block text-black text-sm font-bold mb-2">Shop Name</Labelglobal>
        <InputGlobal
          className="block w-full border-2 border-gray rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder=""
        />
      </form>
    </>
  );
};

export default Business;
