import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import React, { lazy, Suspense, useState, useEffect } from "react";
import DashboardApp from "./components/DashboardApp";

function ContainerApp() {
  return (
    <BrowserRouter>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" element={<DashboardApp />} />
          <Route path="/orders" element={<div>Load orders app here...</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default ContainerApp;
