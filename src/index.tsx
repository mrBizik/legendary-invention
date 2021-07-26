import React from 'react';
import ReactDOM from 'react-dom';
// import fields from './fields';

const From: React.FC = ({ children }) => (<form>{children}</form>);

ReactDOM.render(<From>Hello</From>, document.getElementById('root'));
