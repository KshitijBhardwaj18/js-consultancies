import React from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'; 
import { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 text-white hover:text-gray-300 focus:outline-none"
      >
        <span>Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-2 w-36 bg-white rounded-lg shadow-lg transform origin-top-right transition duration-300 ease-out scale-100 opacity-100">
          <li className="px-4 py-2 hover:bg-gray-100 transition duration-300">Item 1</li>
          <li className="px-4 py-2 hover:bg-gray-100 transition duration-300">Item 2</li>
          <li className="px-4 py-2 hover:bg-gray-100 transition duration-300">Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
