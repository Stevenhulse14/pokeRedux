import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import store from ./store && Provider from react-redux
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    {/* wrap provider around App */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
