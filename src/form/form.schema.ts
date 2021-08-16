import { FieldConfig, FieldMap } from './field';

type FieldMapSchema<FM extends FieldMap> = {
  [type in keyof FM]: {
    type: type;
    config: FieldConfig<FM[type]['defaultProps']['value']>;
  };
};

export type FieldSchema<FM extends FieldMap> =
  FieldMapSchema<FM>[keyof FieldMapSchema<FM>];

export type FormSchema<FM extends FieldMap> = FieldSchema<FM>[];
