import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//import { GlobalStyle } from "./shared/styles/GlobalStyles";
import "./shared/styles/media.css";
import "./shared/styles/roots.css";
//import './index.css';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/pets-project-front">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
