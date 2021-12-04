import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.container}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/categories" style={styles.link}>Shop</Link>
      <Link to="/jobs" style={styles.link}>Careers</Link>

    </div>
  )
}

const styles = {
  container: {
    backgroundColor: "#187bcd",
    margin: "0px",
    padding: "10px"
  },
  link: {
    textDecoration: "none",
    fontSize: "1em",
    color: "white",
    margin: "10px",
    padding: "5px"
  }
}

export default Navbar;