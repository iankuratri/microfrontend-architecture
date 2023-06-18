import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mountDashboardApp from "dashboard/DashboardApp";

const hostAppBaseName = `/dashboard`;

export default ({ user }) => {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside dashboardApp mfe.
  useEffect(() => {
    const childAppNavigationHandler = (event) => {
      const pathname = event.detail;
      const newPathname = `${hostAppBaseName}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };

    window.addEventListener(
      "[dashboardApp] navigated",
      childAppNavigationHandler
    );

    return () => {
      window.removeEventListener(
        "[dashboardApp] navigated",
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

  // Mount dashboardApp MFE
  useEffect(() => {
    const root = mountDashboardApp({
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
      id="_dashboardApp_root"
      ref={wrapperRef}
      style={{ position: "relative", minHeight: "100%" }}
    />
  );
};
