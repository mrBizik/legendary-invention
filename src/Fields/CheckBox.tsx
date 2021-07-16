import React from 'react';
import { FieldProps } from 'src/FromBuilder/Field';
import { Field } from './Field';

export interface CheckBoxProps {
  name: string;
  value: string;
  checked: boolean;
};

export class CheckBox extends React.Component<FieldProps<CheckBoxProps>, Partial<CheckBoxProps>>  {
  constructor(props: FieldProps<CheckBoxProps>) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      checked: props.config?.checked,
    };
  }

  onChange() {
    this.setState(
      ({ checked }) => ({
        checked: !!!checked,
      })
    )
  }

  render() {
    const { label, config: { name, value } } = this.props;
    const { checked } = this.state;
    const content = (<input type="checkbox" name={name} value={value} checked={checked} onChange={this.onChange}></input>);
    return (
      <Field {...{ label, content }} />
    );
  }
}