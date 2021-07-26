import React, { useState } from 'react';
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

interface FormFieldsState {
  [fieldKey: string]: unknown;
}

const testFields: FieldConfig[] = [
  {
    type: "CheckBox",
    config: {
      label: 'Field 1',
      name: 'check1',
      value: false,
    },
  },
];

const From: React.FC<FormProps> = ({ fields: fieldsConfig }) => {
  const [fieldValues, setFieldValues] = useState<FormFieldsState>({});
  const formFields = [];
  for (const { type, config } of fieldsConfig) {
    if (fields[type]) {
      const Field = fields[type];
      const { value: defaultValue, ...otherConf } = config as Full<typeof Field['defaultProps']>;
      const changeFieldValue: typeof Field['defaultProps']['onChange'] = (name, value) => {
        fieldValues[name] = value;
        console.log(fieldValues)
        setFieldValues({ ...fieldValues });
      }

      const { name } = otherConf;
      if (fieldValues[name] === undefined) {
        fieldValues[name] = defaultValue;
        setFieldValues({ ...fieldValues });
      }

      const fieldConfig = {
        ...otherConf,
        value: fieldValues[name] as typeof Field['defaultProps']['value'],
        onChange: changeFieldValue,
        key: name,
      };
      formFields.push(<Field {...fieldConfig} />);
    }
  }
  return (<form>{formFields}</form>)
};

ReactDOM.render(<From fields={testFields} />, document.getElementById('root'));
