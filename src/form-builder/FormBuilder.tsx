import React from 'react';
import { Control, Controller, DefaultValues, SubmitHandler, useForm } from 'react-hook-form';
import { ButtonConfig, FieldComponent, FieldMap, FieldValue } from './field';
import { FieldSchema, FormSchema } from './form.schema';

export interface FormFieldsState<FM extends FieldMap> {
  [fieldKey: string]: FieldValue<FM>;
}
interface FormBuilderProps<FM extends FieldMap> {
  fieldsShema: FormSchema<FM>;
  fieldComponents: FM;
  onSubmit: SubmitHandler<FormFieldsState<FM>>;
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

function getDefaultValues<FM extends FieldMap>(
  fields: FieldSchema<FM>[]
): DefaultValues<FormFieldsState<FM>> {
  const defaultState: DefaultValues<FormFieldsState<FM>> = {};
  for (const {
    config: { name, value },
  } of fields) {
    defaultState[name] = value as any; // TODO: fix any
  }

  return defaultState;
}

function createFields<FM extends FieldMap>(
  fields: FieldSchema<FM>[],
  control: Control<FormFieldsState<FM>>,
  fieldComponents: FM
): JSX.Element[] {
  const formFields = [];
  for (const {
    type,
    config: { name, value, ...other },
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

  return formFields;
}

function createButtons(buttons: ButtonConfig[]): JSX.Element[] {
  const formButtons = [];
  for (const key in buttons) {
    const { type, label } = buttons[key];
    formButtons.push(<input type={type} name={label} key={key} />);
  }

  return formButtons;
}

export function createFormBuilder<FM extends FieldMap>(): React.FC<
  FormBuilderProps<FM>
> {
  return ({ fieldsShema, fieldComponents, onSubmit }) => {
    const { control, handleSubmit } = useForm<FormFieldsState<FM>>({
      defaultValues: getDefaultValues<FM>(fieldsShema.fields),
    });
    const formFields = createFields(
      fieldsShema.fields,
      control,
      fieldComponents
    );
    const formButtons = createButtons(fieldsShema.buttons);
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {formFields} {formButtons}
      </form>
    );
  };
}
