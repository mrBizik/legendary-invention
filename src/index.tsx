import React from 'react';
import ReactDOM from 'react-dom';
import fields, { FieldName } from './fields';

type Full<T> = {
  [P in keyof T]-?: T[P];
}

interface FieldConfig<T = unknown> {
  type: FieldName,
  config: T,
}

interface FormProps {
  fields: FieldConfig[],
}

interface FormState {
  [fieldKey: string]: unknown;
}

const testFields: FieldConfig[] = [
  {
    type: "CheckBox",
    config: {
      label: 'Field 2',
      name: 'check',
      value: '1',
    },
  },
];

const From: React.FC<FormProps> = ({fields: fieldsConfig}) => {
  const formFields = [];
  for (const { type, config } of fieldsConfig) {
    if (fields[type]) {
      const Field = fields[type];
      const fieldConfig = config as Full<typeof Field['defaultProps']>;
      formFields.push(<Field {...fieldConfig} />)
    }
  }
  return (<form>{formFields}</form>)
};

ReactDOM.render(<From fields={testFields}/>, document.getElementById('root'));
