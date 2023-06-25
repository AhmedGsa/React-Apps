import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContext from './Context'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <App />
  </AppContext>
);
