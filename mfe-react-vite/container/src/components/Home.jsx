import React from "react";
import "./Home.scss";

const Home = ({ user }) => {
  return (
    <div className="ho-container">
      <h1>Home App</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ipsa sed
        omnis perspiciatis quidem id recusandae, soluta deleniti, voluptatibus
        perferendis cumque minima quasi sapiente reprehenderit aut quisquam
        necessitatibus voluptatem nisi.
      </p>

      <br />

      {user && <p>Logged in as {user.name}!</p>}
    </div>
  );
};

export default Home;
