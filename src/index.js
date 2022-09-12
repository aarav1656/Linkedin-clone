import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider, provider } from "react-redux";
import store from "./store";
import { createRoot } from 'react-dom/client'
import * as ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals