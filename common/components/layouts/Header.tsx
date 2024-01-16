import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center px-3 py-2 bg-white w-full shadow shadow-neutral-500">
        <h1 className="font-bold">Shopping-Car</h1>
        <div>
          <button className="p-1 rounded-full">
            <FiMoreVertical />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
