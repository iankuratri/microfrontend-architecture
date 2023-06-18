import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Home.scss";

const Home = ({ user }) => {
  return (
    <div className="ho-container">
      <h1>Home component inside Container App</h1>
      <br />

      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="page-1">Page 1</Link>
        </li>
        <li>
          <Link to="page-2">Page 2</Link>
        </li>
      </ul>

      <br />

      <Routes>
        <Route index element={<p>This is Home</p>} />
        <Route path="page-1" element={<p>This is Page 1</p>} />
        <Route path="page-2" element={<p>This is Page 2</p>} />
      </Routes>

      <br />

      {user && <p>Logged in as {user.name}!</p>}
    </div>
  );
};

export default Home;
