import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import styles from "./indexStyles.module.css";

ReactDOM.render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>,
  document.getElementById("root")
);
