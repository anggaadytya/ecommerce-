import React from "react";
import { buttonHideType } from "@/common/types/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const ButtonHide = ({ showPassword, handleHidePassword, className }: buttonHideType) => {
  return (
    <button
      className={`absolute  ${className}`}
      onClick={() => handleHidePassword()}
    >
      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
    </button>
  );
};

export default ButtonHide;
