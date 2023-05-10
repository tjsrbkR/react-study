import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // <App.js .js 확장자 명이 생략된것
import Practice from './Practice';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';
import Clock from './chapter_04/clock';
import CommentList from './chparter_05/CommentList';
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>
  );
}, 1000);

reportWebVitals();
