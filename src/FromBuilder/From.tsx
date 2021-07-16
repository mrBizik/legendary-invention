import React from 'react';
import fields from '../Fields';

export type FiledComponents = typeof fields;

export interface FromProps {
  title?: string;
  fields: any[];
  components: FiledComponents;
};

export const From: React.FC<FromProps> = function (props) {
  const { title, fields: fieldProps, components } = props;
  const fields = [];
  for (const props of fieldProps) {
    const p: { type: keyof FiledComponents } = props;
    if (components[p.type]) {
      const Component = components[p.type];
      fields.push((<Component {...props} key={p.type} />));
    }
  }

  return (
    <div>
      <h1>{title}</h1>
      <form>{fields}</form>
    </div>
  );
}
