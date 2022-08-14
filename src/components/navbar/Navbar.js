import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <h1>TMDB</h1>
        </Link>
        <div className="navbar__container__right">
          <Link to="/">
            <p>Home</p>
          </Link>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
