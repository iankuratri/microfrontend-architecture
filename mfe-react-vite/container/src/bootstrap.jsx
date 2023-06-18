import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Function to mount the App
export default ({ standalone, mountPoint }) => {
  ReactDOM.createRoot(mountPoint).render(
    <React.StrictMode>
      <BrowserRouter>
        <App standalone={standalone} />
      </BrowserRouter>
    </React.StrictMode>
  );
};
