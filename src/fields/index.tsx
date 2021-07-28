import { CheckBox } from './CheckBox';
import { Text } from './Text';

const fields = {
  CheckBox,
  Text,
};

export default fields;

export type FieldMap = typeof fields;

export type FieldName = keyof FieldMap;

export type FieldType = FieldMap[FieldName];

export type FieldProps = FieldType['defaultProps'];

export type FieldValue = FieldProps['value'];
