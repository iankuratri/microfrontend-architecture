import mount from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount({
      container: ref.current,
      standalone: false,
    });
  }, []);

  return <div id="_dashboardApp_root" ref={ref} />;
};
