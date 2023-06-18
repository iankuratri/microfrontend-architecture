import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mountOrdersApp from "orders/OrdersApp";

const hostAppBaseName = `/orders`;

export default ({ user }) => {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside ordersApp mfe.
  useEffect(() => {
    const childAppNavigationHandler = (event) => {
      const pathname = event.detail;
      const newPathname = `${hostAppBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };

    window.addEventListener("[ordersApp] navigated", childAppNavigationHandler);

    return () => {
      window.removeEventListener(
        "[ordersApp] navigated",
        childAppNavigationHandler
      );
    };
  }, [location]);

  // Listen for containerApp location changes and dispatch a notification.
  useEffect(() => {
    if (location.pathname.startsWith(hostAppBaseName)) {
      window.dispatchEvent(
        new CustomEvent("[containerApp] navigated", {
          detail: location.pathname.replace(hostAppBaseName, ""),
        })
      );
    }
  }, [location]);

  // Mount ordersApp MFE
  useEffect(() => {
    const root = mountOrdersApp({
      standalone: false,
      mountPoint: wrapperRef.current,
      initialPathname: location.pathname.replace(hostAppBaseName, ""),
      routingStrategy: "memory",
      user,
    });

    return () => {
      root?.unmount();
    };
  }, []);

  return (
    <div
      id="_orderApp_root"
      ref={wrapperRef}
      style={{ position: "relative", minHeight: "100%" }}
    />
  );
};
