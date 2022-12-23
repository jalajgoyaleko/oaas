import React from 'react';
import downarrowfilled from '../assets/icons/downarrowfilled.svg';

const Business = () => {
  return (
    <>
      <div className="mt-8 text-black text-sm font-bold">Business Type</div>
      <div className="mt-2 border-2 border-gray rounded-md">
        <button
          id="dropdownSmallButton"
          data-dropdown-toggle="dropdownSmall"
          className="inline-flex items-center py-2 px-3 mr-3 mb-3 text-sm font-medium text-center text-darkgray bg-white rounded-lg md:mb-0"
          type="button">
          -- Select --
          <img
            src={downarrowfilled}
            alt="downarrowfilled"
            className="w-3 h-3 flex absolute left-[64%]"
          />
        </button>
      </div>
      <form className="bg-white mt-4">
        <label className="block text-black text-sm font-bold mb-2">Shop Name</label>
        <input
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
