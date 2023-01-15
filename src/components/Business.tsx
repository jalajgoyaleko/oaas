import React from 'react';
import InputGlobal from './Common/InputGlobal';
import Labelglobal from './Common/Labelglobal';

const Business = () => {
  return (
    <>
      <div className="mt-8 text-black text-sm font-bold">Business Type</div>

      <div className="dropdown relative mt-2">
        <button
          className="dropdown-toggle px-3 py-2 bg-white text-darkgray font-medium text-sm leading-tights shadow-md hover:bg-sky hover:shadow-lg focus:bg-sky focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky active:shadow-lg active:text-white transition duration-150 ease-in-out flex justify-between whitespace-nowrap w-full border-2 border-gray rounded-md"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          -- Select --
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className="w-3 text-extrdarkgray"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512">
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
          </svg>
        </button>
        <ul
          className="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
          aria-labelledby="dropdownMenuButton1">
          <li>
            <a
              className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
              href="#">
              Action
            </a>
          </li>
          <li>
            <a
              className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
              href="#">
              Another action
            </a>
          </li>
          <li>
            <a
              className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
              href="#">
              Something else here
            </a>
          </li>
        </ul>
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
