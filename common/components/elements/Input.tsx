import React from "react";
import { inputType } from "@/common/types/auth";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Input = ({
  label,
  name,
  type,
  placeholder,
}: inputType) => {
  return (
    <div className="flex flex-col mb-[20px]">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="p-2 rounded-md shadow-mini"
      />
    </div>
  );
};

export default Input;
