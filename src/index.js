import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./store/store";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/index.css";

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
