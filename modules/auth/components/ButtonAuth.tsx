import { buttonType } from "@/common/types/auth";
import React from "react";

const ButtonAuth = ({ type, onClick, children, className }: buttonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` w-full p-2 text-base rounded-md flex items-center justify-center gap-x-2 ${
        className ? className : "bg-black"
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonAuth;
