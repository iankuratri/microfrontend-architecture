import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Function to mount the App
export default () => {
  const container = document.getElementById("_containerApp_root");

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
