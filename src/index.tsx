import React from 'react'
import ReactDOM from 'react-dom'
import { From } from './FromBuilder/From';
import fields from './Fields';


const testFields = [
  {
    type: "Div",
    label: 'Field 1',
    config: {
      content: 'this is div content',
    },
  },
  {
    type: "CheckBox",
    label: 'Field 2',
    config: {
      name: 'check',
      value: '1',
      checked: true,
    },
  },
];
ReactDOM.render(<From fields={testFields} title="test fields from" components={fields}></From>, document.getElementById('root'));

