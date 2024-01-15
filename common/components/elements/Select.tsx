import { inputType } from "@/common/types/auth";
import React from "react";

interface optionType {
  value: string;
  label: string;
}

interface SelectProps extends inputType {
  options: optionType[];
}

const Select = ({
  label,
  name,
  defaultValue,
  disabled,
  options,
}: SelectProps) => {
  return (
    <div className="flex flex-col mb-[20px]">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        disabled={disabled}
        className="p-2 rounded-md shadow-mini border focus:outline-none disabled:text-neutral-400"
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
