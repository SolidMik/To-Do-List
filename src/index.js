import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const {v4 : uuidv4} = require('uuid')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

