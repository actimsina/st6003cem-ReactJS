import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const notes = [
  {
    "id": 1,
    "content": "HTML is easy",
    "date": "2022-1-17T17:30:31.098Z",
    "important": true
  },
  {
    "id": 2,
    "content": "Browser can execute only JavaScript",
    "date": "2022-1-17T18:39:34.091Z",
    "important": false
  },
  {
    "id": 3,
    "content": "GET and POST are the most important methods of HTTP protocol",
    "date": "2022-1-17T19:20:14.298Z",
    "important": false
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App notes={notes} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
