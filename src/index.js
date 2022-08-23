import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";

//wrap provider around your store from react-redux

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
