import React from 'react';
import ReactDOM from 'react-dom';
import fields from './fields';
import { createFormBuilder } from './form/FormBuilder';
import { FormSchema } from './form/form.schema';

type Fields = typeof fields;

const testFields: FormSchema<Fields> = {
  buttons: [
    {
      type: 'submit',
      label: 'Send label',
    },
  ],
  fields: [
    {
      type: 'CheckBox',
      config: {
        label: 'Field 1',
        name: 'check1',
        value: false,
      },
    },
    {
      type: 'Text',
      config: {
        label: 'Field 2',
        name: 'text 1',
        value: 'false',
      },
    },
  ],
};

const FormBuilder = createFormBuilder<Fields>();
ReactDOM.render(
  <FormBuilder fieldsShema={testFields} fieldComponents={fields} />,
  document.getElementById('root')
);
