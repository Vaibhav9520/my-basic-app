import React from 'react';
import ReactDOM from 'react-dom/client';
// import Player from './Component/Player';
// import Favcolor from './Component/Favcolor';
import FavColorClass from './Component/FavColorClass';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavColorClass />
  </React.StrictMode>
);
