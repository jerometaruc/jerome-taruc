import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './styles/navbar.css';
import './styles/content.css';
import './styles/credits.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
