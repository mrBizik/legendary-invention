import React from "react";

export interface FieldConfig<T = unknown> {
  label?: string;
  name: string;
  value?: T;
}

export type FieldProps<T = unknown> =  FieldConfig<T> & {
  onChange: (key: string, val: T) => void,
};

export interface FieldMap<T = unknown> { 
  [key: string]: React.FC<FieldProps<T>> 
};

export type FieldName<FMap extends FieldMap = FieldMap> = keyof FMap;

export type FieldType<FMap extends FieldMap = FieldMap> = FMap[FieldName<FMap>];

export type FieldValue<FMap extends FieldMap = FieldMap> = FieldType<FMap>['defaultProps']['value'];
