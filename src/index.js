import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import reducer from "./reducers";
import App from "./App";

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html {
   height: 100%;
   font-size: 100%;
 }

 body {
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: 'Nunito', Arial, Helvetica, sans-serif;
   font-size: 14px;
 }

 .app {
   width: 360px;
   margin-top: 5rem;
 }
`;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
