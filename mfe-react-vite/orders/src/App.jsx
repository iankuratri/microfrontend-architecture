import { Route, Routes, Link } from "react-router-dom";
import "./App.scss";

function OrderApp() {
  return (
    <div className="od-container">
      <h1>Order App</h1>

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
    </div>
  );
}

export default OrderApp;
