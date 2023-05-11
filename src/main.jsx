import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "normalize.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// fetch coin data for Table.jsx
import { fetchCoins } from "./redux/coinSlice";

store.dispatch(fetchCoins());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
