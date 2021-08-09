import React from 'react';
import { FieldProps } from '../form/Field';

export const CheckBox: React.FC<FieldProps<boolean>> = ({ name, value, onChange, label }) => {
  const changeField = () => { onChange(name, !!!value) };
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" name={name} checked={value} onChange={changeField}></input>
    </div>
  )
};
