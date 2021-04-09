import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TextSection from './TextSection';
import ShowStyleSection from './ShowStyleSection';
import {printMessage} from './MyUtinity.js';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App>HELLO ON ROOT</App>
    <TextSection msg="最新消息" today={new Date()} btnClick={printMessage}/>
    <ShowStyleSection>樣式測試</ShowStyleSection>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
