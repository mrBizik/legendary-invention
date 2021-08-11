import React, { useState } from "react";
import { FieldComponent, FieldMap } from "./field";
import { FormSchema } from "./form.schema";

interface FormBuilderProps<FM extends FieldMap = FieldMap> {
  fieldsShema: FormSchema<FM>;
  fieldComponents: FM;
}

interface FormFieldsState {
  [fieldKey: string]: unknown;
}

function getFileldComponent<FM extends FieldMap = FieldMap>(
  type: keyof FM,
  fieldComponents: FM
): FieldComponent<FM> {
  if (!fieldComponents[type]) {
    throw Error(`Field type ${type} not found into fields config`);
  }

  return fieldComponents[type];
}

export function createFormBuilder<FM extends FieldMap = FieldMap>(): React.FC<
  FormBuilderProps<FM>
> {
  return ({ fieldsShema, fieldComponents }) => {
    const [fieldValues, setFieldValues] = useState<FormFieldsState>({});
    const updateFieldValueHook = (name: string, value: unknown) => {
      fieldValues[name] = value;
      setFieldValues({ ...fieldValues });
      console.log(fieldValues);
    };

    const fields = [];
    for (const {
      type,
      config: { name, value: defaultValue, ...other },
    } of fieldsShema) {
      const Field = getFileldComponent(type, fieldComponents);
      const fieldProps = {
        name,
        value:
          fieldValues[name] === undefined ? defaultValue : fieldValues[name],
        ...other,
      };
      fields.push(
        <Field {...fieldProps} onChange={updateFieldValueHook} key={name} />
      );
    }
    return <form>{fields}</form>;
  };
}
