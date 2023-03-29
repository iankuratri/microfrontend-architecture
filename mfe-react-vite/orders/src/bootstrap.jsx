import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Function to mount the App
export default ({ container, standalone }) => {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App standalone={standalone} />
    </React.StrictMode>
  );
};
