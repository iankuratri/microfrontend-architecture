import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.createRoot(document.getElementById(el)).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRootEl = document.getElementById("#_orderApp_root");

  if (devRootEl) {
    mount(devRootEl);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
