import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { GlobalStateProvider } from "./context/GlobalContext";
import { ImagesContextProvider } from "./context/ImagesContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GlobalStateProvider>
      <ThemeContextProvider>
        <ImagesContextProvider>
          <App />
        </ImagesContextProvider>
      </ThemeContextProvider>
    </GlobalStateProvider>
  </Router>
);
