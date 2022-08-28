import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <a href="/">
          <h1>TMDB</h1>
        </a>
        <div className="navbar__container__right">
          <a href="/">
            <p>Home</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
