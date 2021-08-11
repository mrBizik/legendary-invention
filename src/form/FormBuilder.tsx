import React, { useState } from "react";
import { FieldMap, FieldName, FieldProps, FieldValue } from "./field";
import { FormSchema } from "./form.schema";

export type ComponentGetter<FM extends FieldMap = FieldMap> = (
  type: FieldName<FM>
) => React.FC<FieldProps<FieldValue<FM>>>;

interface FormBuilderProps<FM extends FieldMap = FieldMap> {
  fieldsShema: FormSchema<FM>;
  getComponent: ComponentGetter<FM>;
}

interface FormFieldsState {
  [fieldKey: string]: unknown;
}

export function createFormBuilder<FM extends FieldMap = FieldMap>(): React.FC<
  FormBuilderProps<FM>
> {
  return ({ fieldsShema, getComponent }) => {
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
      const Field = getComponent(type);
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
