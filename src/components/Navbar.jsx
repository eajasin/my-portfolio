import React from "react";
import { Link, Outlet } from "react-router-dom";
import Me from "./toonMe.jpg";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="leftNavBar">
          <Link to="/">
            <img src={Me} alt="Link to Home" />
          </Link>
          <span className="myName"> Elizabeth </span>
        </div>
        <div className="rightNavBar">
          <a>
            <Link to="/about">ABOUT</Link>
          </a>
          <a>
            <Link to="/projects">PROJECTS</Link>
          </a>
          <a>
            <Link to="/contact">CONTACT</Link>
          </a>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;
