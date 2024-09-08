import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Component/Car.js';
import Bus from './Component/Bus.js';


import './index.css';
import App1 from './App1.js';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car />
    <Bus />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
