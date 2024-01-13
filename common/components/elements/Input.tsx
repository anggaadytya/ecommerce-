import React from "react";
import { inputType } from "@/common/types/auth";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Input = ({
  label,
  name,
  type,
  placeholder,
  hidePassword,
  showPassword,
}: inputType) => {
  return (
    <div className="flex flex-col mb-[20px] relative">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="p-2 rounded-md shadow-mini"
      />
      {hidePassword && (
        <button className="absolute right-4 top-9" onClick={hidePassword}>
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      )}
    </div>
  );
};

export default Input;
