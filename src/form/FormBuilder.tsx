import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FieldComponent, FieldMap } from './field';
import { FormSchema } from './form.schema';

interface FormBuilderProps<FM extends FieldMap = FieldMap> {
  fieldsShema: FormSchema<FM>;
  fieldComponents: FM;
}

interface FormFieldsState {
  [fieldKey: string]: unknown;
}

function getFileldComponent<FM extends FieldMap>(
  type: keyof FM,
  fieldComponents: FM
): FieldComponent<FM> {
  if (!fieldComponents[type]) {
    throw Error(`Field type ${type} not found into fields config`);
  }

  return fieldComponents[type];
}

export function createFormBuilder<FM extends FieldMap>(): React.FC<
  FormBuilderProps<FM>
> {
  return ({ fieldsShema: { fields, buttons }, fieldComponents }) => {
    const { control, handleSubmit } = useForm<FormFieldsState>();

    const onSubmit: SubmitHandler<FormFieldsState> = (data) => {
      console.log(data);
    };
    const formFields = [];
    for (const {
      type,
      config: { name, value: defaultValue, ...other },
    } of fields) {
      const Field = getFileldComponent(type, fieldComponents);
      formFields.push(
        <Controller
          name={name}
          key={`${name}.${type}`}
          control={control}
          render={({ field }) => <Field {...field} {...other} />}
        />
      );
    }

    const formButtons = [];
    for (const key in buttons) {
      const { type, label } = buttons[key];
      formButtons.push(<input type={type} name={label} key={key} />);
    }
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {formFields} {formButtons}
      </form>
    );
  };
}
