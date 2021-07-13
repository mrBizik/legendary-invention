import React from 'react';
import { FieldProps } from 'src/FromBuilder/Field';
import { Field } from './Field';

export interface DivProps {
  content: string | JSX.Element | JSX.Element[] | React.Component | React.Component[];
};

export const Div: React.FC<FieldProps<DivProps>> = function ({ label, config: { content } }) {
  return (
    <Field {...{ label, content }} />
  );
}