import React from 'react';
import { FieldProps } from '../form-builder/field';

export const CheckBox: React.FC<FieldProps<boolean>> = React.forwardRef<
  HTMLInputElement,
  FieldProps<boolean>
>(({ name, onChange, label }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" name={name} onChange={onChange} ref={ref}></input>
    </div>
  );
});
