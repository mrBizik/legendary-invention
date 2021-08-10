import React from "react";

export interface FieldConfig<V = unknown> {
  label?: string;
  name: string;
  value?: V;
}

export type FieldProps<V = unknown> =  FieldConfig<V> & {
  onChange: (key: string, val: V) => void,
};

export interface FieldMap<T = unknown> { 
  [key: string]: React.FC<FieldProps<T>> 
};

export type FieldName<FMap extends FieldMap = FieldMap> = keyof FMap;

export type FieldType<FMap extends FieldMap = FieldMap> = FMap[FieldName<FMap>];

export type FieldValue<FMap extends FieldMap = FieldMap> = FieldType<FMap>['defaultProps']['value'];
