import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainProvider from './context/MainProvider';
import 'bootstrap/dist/js/bootstrap.min.js';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);

/*
  If you want to start measuring performance in your app, pass a function
  to log results (for example: reportWebVitals(console.log))
  or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/

// reportWebVitals();
