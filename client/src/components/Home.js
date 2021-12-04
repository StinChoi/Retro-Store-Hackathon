import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Everything Retro</h1>
      <Link to="/categories">Enter Shop</Link>
      <br />
      <Link to="/jobs">Careers</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  )
}

export default Home;