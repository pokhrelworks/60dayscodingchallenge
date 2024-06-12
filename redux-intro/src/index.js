import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Importing whole file so that it would run in this program
import './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


