import React from 'react';
import ReactDOM from 'react-dom';
import fields, { FieldName } from './fields';
import { FormBuilder, FieldSchemaElement, FieldProps } from './form/FormBuilder';

const testFields: FieldSchemaElement<FieldName>[] = [
  {
    type: "CheckBox",
    config: {
      label: 'Field 1',
      name: 'check1',
      value: false,
    },
  },
];

const fieldGetter = (type: unknown) => {
  const concreteType = type as FieldName;
  return fields[concreteType] as React.FC<FieldProps>;
};

ReactDOM.render(<FormBuilder fieldsShema={testFields} getComponent={fieldGetter} />, document.getElementById('root'));
