import React from 'react';
import ReactDOM from 'react-dom';
import fields from './fields';
import { createFormBuilder, FormFieldsState, FormSchema } from './form-builder';
import { SubmitHandler } from 'react-hook-form';

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

const onSubmit: SubmitHandler<FormFieldsState<Fields>> = (data) => {
  console.log(data);
};

const FormBuilder = createFormBuilder<Fields>();
ReactDOM.render(
  <FormBuilder
    fieldsShema={testFields}
    fieldComponents={fields}
    onSubmit={onSubmit}
  />,
  document.getElementById('root')
);
