
export interface FieldProps<T> {
  name: string;
  onChange: React.ChangeEventHandler;
  value?: T;
}
