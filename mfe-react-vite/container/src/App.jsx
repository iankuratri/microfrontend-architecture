import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const DashboardAppLazy = lazy(() => import("./components/DashboardApp"));
const OrdersAppLazy = lazy(() => import("./components/OrdersApp"));

function ContainerApp() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" element={<DashboardAppLazy />} />
          <Route path="/orders" element={<OrdersAppLazy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default ContainerApp;
