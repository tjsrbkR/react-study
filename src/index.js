import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // <App.js .js 확장자 명이 생략된것
import reportWebVitals from './reportWebVitals';
import NotificationList from './chapter_06/NotificationList';
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <NotificationList />
    </React.StrictMode>
  );
}, 1000);

reportWebVitals();
