import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // <App.js .js 확장자 명이 생략된것
import Practice from './Practice';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Practice /> */}
    <Library />
  </React.StrictMode>
);

reportWebVitals();
