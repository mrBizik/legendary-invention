import React from 'react';
import { FieldProps } from '../form/Field';

export const Text: React.FC<FieldProps<string>> = ({ name, value, onChange, label }) => {
  const changeField = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => onChange(name, currentTarget.value);
  return (
    <div>
      <label>{label}</label>
      <input type="text" name={name} value={value} onChange={changeField}></input>
    </div>
  )
};
