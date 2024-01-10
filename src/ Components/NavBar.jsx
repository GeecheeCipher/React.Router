import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar">
      <Link to="/home">Home</Link>
      <Link to="/red">Red</Link>
      <Link to="/orange">Orange</Link>
      <Link to="/green">Green</Link>
      <Link to="/blue">Blue</Link>
    </div>
  );
}

export default NavBar;
