import mount from "orders/OrdersApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount({
      container: ref.current,
      standalone: false,
    });
  }, []);

  return <div id="_ordersApp_root" ref={ref} />;
};
