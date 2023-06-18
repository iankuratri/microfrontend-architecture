import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function MfeNavigationManager({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function parentAppNavigationHandler(event) {
      const pathname = event.detail;
      if (location.pathname === pathname) {
        return;
      }
      navigate(pathname);
    }

    window.addEventListener(
      "[containerApp] navigated",
      parentAppNavigationHandler
    );

    return () => {
      window.removeEventListener(
        "[containerApp] navigated",
        parentAppNavigationHandler
      );
    };
  }, [location]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("[ordersApp] navigated", { detail: location.pathname })
    );
  }, [location]);

  return children;
}
