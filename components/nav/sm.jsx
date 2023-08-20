import React from "react";


const Sidebar = ({ isOpen, onClose }) => {
    return (
      <div
        className={`fixed inset-y-0 left-0 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-gray-800 text-white p-4`}
      >
        <ul className="space-y-4">
          <li>
            <a href="#" className="hover:text-gray-300 block">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 block">
              Link 2
            </a>
          </li>
          {/* Add more links as needed */}
        </ul>
        <button onClick={onClose} className="mt-8 text-gray-400 hover:text-white">
          Close
        </button>
      </div>
    );
  };
  
  export default Sidebar;
  