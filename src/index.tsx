import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<input value="Привет" />, document.getElementById('root'));

setTimeout(function() {
  ReactDOM.render(<input value={null} />, document.getElementById('root'));
}, 100);
