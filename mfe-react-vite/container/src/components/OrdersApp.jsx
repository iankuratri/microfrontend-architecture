import { mount } from "orders/OrdersApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div id="_ordersApp_root" ref={ref} />;
};
