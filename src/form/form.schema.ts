import { FieldConfig, FieldMap } from "./field";

type FieldMapSchema<FM extends FieldMap = FieldMap> = {
  [type in keyof FM]: {
    type: type;
    config: FieldConfig<FM[type]["defaultProps"]["value"]>;
  };
};

export type FieldSchema<FM extends FieldMap = FieldMap> =
  FieldMapSchema<FM>[keyof FieldMapSchema<FM>];

export type FormSchema<FM extends FieldMap = FieldMap> = FieldSchema<FM>[];
