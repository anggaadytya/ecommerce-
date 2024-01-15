import React from "react";
import { inputType } from "@/common/types/auth";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Input = ({ label, name, type, placeholder, defaultValue, disabled }: inputType) => {
  return (
    <div className="flex flex-col mb-[20px]">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={defaultValue}
        disabled={disabled}
        className="p-2 rounded-md shadow-mini border focus:outline-none disabled:text-neutral-400"
      />
    </div>
  );
};

export default Input;
