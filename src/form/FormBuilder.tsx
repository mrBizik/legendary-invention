import React, { useState } from 'react';

export interface FieldConfig<T = unknown> {
  name: string;
  label?: string;
  value: T;
}

export interface FieldSchemaElement<T = string, C extends FieldConfig = FieldConfig<unknown>> {
  type: T,
  config: C,
}

export interface FieldProps<T = unknown> extends FieldConfig<T> {
  onChange(name: string, value?: T): void;
}

export type ComponentGetter<T = string> = (type: T) => React.FC<FieldProps>;

interface FormBuilderProps {
  fieldsShema: FieldSchemaElement[],
  getComponent: ComponentGetter,
}

interface FormFieldsState {
  [fieldKey: string]: unknown;
}

export const FormBuilder: React.FC<FormBuilderProps> = ({ fieldsShema, getComponent }) => {
  const [fieldValues, setFieldValues] = useState<FormFieldsState>({});
  const updateFieldValueHook = (name: string, value: unknown) => {
    fieldValues[name] = value;
    setFieldValues({ ...fieldValues });
    console.log(fieldValues);
  }

  const fields = [];
  for (const { type, config: { name, value: defaultValue, ...other } } of fieldsShema) {
    const Field = getComponent(type);
    const fieldProps = {
      name,
      value: fieldValues[name] === undefined ? defaultValue : fieldValues[name],
      ...other
    };
    fields.push(<Field {...fieldProps} onChange={updateFieldValueHook} key={name} />);
  }
  return (<form>{fields}</form>);
}
