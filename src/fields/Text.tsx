import React from "react";
import { FieldProps } from "../form/field";

export const Text: React.FC<FieldProps<string>> = ({
  name,
  value,
  onChange,
  label,
  ref,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
      ></input>
    </div>
  );
};
