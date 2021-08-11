import React from "react";
import ReactDOM from "react-dom";
import fields from "./fields";
import { ComponentGetter, createFormBuilder } from "./form/FormBuilder";
import { FormSchema } from "./form/form.schema";

type Fields = typeof fields;

const testFields: FormSchema<Fields> = [
  {
    type: "CheckBox",
    config: {
      label: "Field 1",
      name: "check1",
      value: false,
    },
  },
  {
    type: "Text",
    config: {
      label: 'Field 2',
      name: 'text 1',
      value: 'false',
    }
  },
];

const fieldGetter: ComponentGetter<Fields> = (type) => {
  if (!fields[type]) {
    throw Error(`Field type ${type} not found into fields config`);
  }

  return fields[type];
};

const FormBuilder = createFormBuilder<Fields>();
ReactDOM.render(
  <FormBuilder fieldsShema={testFields} getComponent={fieldGetter} />,
  document.getElementById("root")
);
