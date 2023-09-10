import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/APP";
import "normalize.css";
import "./index.css";
import { Provider } from "react-redux";
import sliceStares from "./sliceStores/sliceStores";

createRoot(document.getElementById("root")).render(
  <Provider store={sliceStares}>
    <StrictMode>
      <App tab="home" />
    </StrictMode>
  </Provider>
);
