import React from 'react';
import { FieldProps } from '../form-builder';

export const CheckBox: React.FC<FieldProps<boolean>> = React.forwardRef<
  HTMLInputElement,
  FieldProps<boolean>
>(({ name, onChange, label, value }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="checkbox"
        name={name}
        onChange={onChange}
        ref={ref}
        defaultChecked={value}
      ></input>
    </div>
  );
});
