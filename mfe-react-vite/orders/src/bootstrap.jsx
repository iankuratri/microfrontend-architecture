import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DynamicRouter from "./routing/DynamicRouter";

// Function to mount the App
export default ({
  standalone,
  mountPoint,
  initialPathname,
  routingStrategy,
  user,
}) => {
  const root = ReactDOM.createRoot(mountPoint);

  root.render(
    <React.StrictMode>
      <DynamicRouter
        routingStrategy={routingStrategy}
        initialPathname={initialPathname}
      >
        <App standalone={standalone} user={user} />
      </DynamicRouter>
    </React.StrictMode>
  );

  return root;
};
