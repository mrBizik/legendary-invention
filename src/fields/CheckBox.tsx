import React from 'react';
import { FieldProps } from '../form/field';

export const CheckBox: React.FC<FieldProps<boolean>> = ({ name, value, onChange, label, ref }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" name={name} checked={value} onChange={onChange} ref={ref}></input>
    </div>
  );
};
