import React from 'react';
import { FieldProps } from './Props';

export const CheckBox: React.FC<FieldProps<boolean>> = ({ name, value, onChange }) => (
  <input type="checkbox" name={name} checked={value} onChange={onChange}></input>
);
