import { useState } from 'react';

const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState();

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
      <div
        className={`fixed z-20 top-0 right-0 h-full bg-white w-60 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-60'
        }`}
      >
        <ul className="p-4 space-y-2">
          <li className="hover:bg-gray-100 transition duration-300">Item 1</li>
          <li className="hover:bg-gray-100 transition duration-300">Item 2</li>
          <li className="hover:bg-gray-100 transition duration-300">Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default SlidingMenu;
