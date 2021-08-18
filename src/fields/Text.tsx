import React from 'react';
import { FieldProps } from '../form-builder';

export const Text: React.FC<FieldProps<string>> = React.forwardRef<
  HTMLInputElement,
  FieldProps<string>
>(({ name, onChange, label, value }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        onChange={onChange}
        ref={ref}
        defaultValue={value}
      ></input>
    </div>
  );
});
