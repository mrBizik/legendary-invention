import { FieldConfig, FieldMap, FieldName, FieldValue } from "./Field";

interface FieldSchema<FM extends FieldMap = FieldMap>
{
  type: FieldName<FM>;
  config: FieldConfig<FieldValue<FM>>;
}

export type FormSchema<FM extends FieldMap = FieldMap> = FieldSchema<FM>[];
