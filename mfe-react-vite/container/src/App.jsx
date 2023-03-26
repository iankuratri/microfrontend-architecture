import "./App.scss";

function ContainerApp() {
  return (
    <div className="topbar">
      <div>
        <h1>Container App</h1>

        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Orders</li>
        </ul>
      </div>

      <button>Login</button>
    </div>
  );
}

export default ContainerApp;
