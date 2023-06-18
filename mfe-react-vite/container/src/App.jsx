import React, { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const DashboardAppLazy = lazy(() => import("./components/DashboardApp"));
const OrdersAppLazy = lazy(() => import("./components/OrdersApp"));

function ContainerApp({ standalone }) {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar user={user} setUser={setUser} />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" exact element={<Home user={user} />} />
          <Route
            path="/dashboard/*"
            element={<DashboardAppLazy user={user} />}
          />
          {/* <Route path="/orders/*" element={<OrdersAppLazy user={user} />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default ContainerApp;
