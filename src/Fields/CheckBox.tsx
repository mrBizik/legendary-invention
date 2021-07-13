import React from 'react';
import { FieldProps } from 'src/FromBuilder/Field';
import { Field } from './Field';

export interface CheckBoxProps {
  name: string;
  value: string;
  checked: boolean;
};

export const CheckBox: React.FC<FieldProps<CheckBoxProps>> = function ({ label, config: { name, value, checked } }) {
  const content = (<input type="checkbox" name={name} value={value} {...checked && "checked"}></input>);
  return (
    <Field {...{ label, content }} />
  );
}