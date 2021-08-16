import React from 'react';
import { RefCallBack } from 'react-hook-form';

export interface FieldConfig<V = unknown> {
  label?: string;
  name: string;
  value?: V;
}

export type FieldProps<V> = FieldConfig<V> & {
  onChange: (...event: any[]) => void;
  ref: RefCallBack;
};

export interface FieldMap<V = unknown> {
  [key: string]: React.FC<FieldProps<V>>;
}

type FieldValue<FMap extends FieldMap> =
  FMap[keyof FMap]['defaultProps']['value'];

export type FieldComponent<FMap extends FieldMap> = React.FC<
  FieldProps<FieldValue<FMap>>
>;
