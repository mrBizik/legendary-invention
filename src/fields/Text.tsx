import React from 'react';
import { FieldProps } from '../form-builder/field';

export const Text: React.FC<FieldProps<string>> = React.forwardRef<
  HTMLInputElement,
  FieldProps<string>
>(({ name, onChange, label }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" name={name} onChange={onChange} ref={ref}></input>
    </div>
  );
});
