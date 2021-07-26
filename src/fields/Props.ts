
export interface FieldProps<T> {
  label?: string;
  name: string;
  onChange: (key: string, val: T) => void;
  value?: T;
}
