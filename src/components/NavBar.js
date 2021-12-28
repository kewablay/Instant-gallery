import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        I-Gall<span id="text-design">ery.</span>
      </div>
      <div className="nav-items">
        <Link to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/gallery">
          <li className="nav-link">Gallery</li>
        </Link>
      </div>
    </div>
  );
};
