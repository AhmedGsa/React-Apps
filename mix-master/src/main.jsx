import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css'
import App from './App';
import {ToastContainer} from 'react-toastify'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position='top-center' autoClose={2000} />
    <App />
  </React.StrictMode>
);
