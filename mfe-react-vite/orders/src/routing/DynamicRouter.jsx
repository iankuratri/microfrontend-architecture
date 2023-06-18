import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { MfeNavigationManager } from "./MfeNavigationManager";

const DynamicRouter = (props) => {
  const { children, routingStrategy, initialPathname } = props;

  if (routingStrategy === "memory") {
    return (
      <MemoryRouter initialEntries={[initialPathname]}>
        <MfeNavigationManager>{children}</MfeNavigationManager>
      </MemoryRouter>
    );
  }

  return <BrowserRouter>{children}</BrowserRouter>;
};

export default DynamicRouter;
