import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "../src/components/app";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";

// DEV ONLY!!!
window.store = store;
store.dispatch({ type: "SETFLIGHTS" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
