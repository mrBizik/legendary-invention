import React from 'react';
import ReactDOM from 'react-dom';
import fields, { FieldName, FieldValue } from './fields';
import { FormBuilder, FieldSchemaElement, FieldProps, FieldConfig } from './form/FormBuilder';

const testFields: FieldSchemaElement<FieldName, FieldConfig<FieldValue>>[] = [
  {
    type: "CheckBox",
    config: {
      label: 'Field 1',
      name: 'check1',
      value: false,
    },
  },
];

const fieldGetter = (type: FieldName) => {
  if (!fields[type]) {
    throw Error(`Field type ${type} not found into fields config`);
  }

  return fields[type] as React.FC<FieldProps>;
};

ReactDOM.render(<FormBuilder fieldsShema={testFields} getComponent={fieldGetter} />, document.getElementById('root'));
