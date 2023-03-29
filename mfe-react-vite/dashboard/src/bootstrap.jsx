import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Function to mount the App
export default ({ standalone, user }) => {
  if (standalone) {
    const container = document.getElementById("_dashboardApp_root");

    ReactDOM.createRoot(container).render(
      <React.StrictMode>
        <BrowserRouter>
          <App standalone={standalone} />
        </BrowserRouter>
      </React.StrictMode>
    );
  } else {
    return <App standalone={standalone} user={user} />;
  }
};
