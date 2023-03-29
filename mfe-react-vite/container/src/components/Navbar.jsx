import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  return (
    <div className="topbar">
      <div>
        <h1>Container App</h1>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
        </ul>
      </div>

      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button onClick={() => setUser({ name: "Superman", age: 35 })}>
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
