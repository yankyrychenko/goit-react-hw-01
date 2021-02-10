import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './style.css';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
