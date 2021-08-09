import { FieldConfig } from "./Field";

interface FieldSchema<T = string, C extends FieldConfig = FieldConfig>
{
  type: string;
  config: FieldConfig;
}

export type FormSchema<T = string, C extends FieldConfig = FieldConfig> = FieldSchema<T, C>[];
