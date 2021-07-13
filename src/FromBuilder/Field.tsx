import { FiledComponents } from './From';

export type Label = string | JSX.Element;

export interface FieldProps<P = {}> {
  type: keyof FiledComponents;
  config?: P;
  label?: Label;
};

