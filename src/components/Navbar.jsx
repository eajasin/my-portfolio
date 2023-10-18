import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./FlowerLogo.png";

function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">
            <img src={Logo} alt="Link to Home" />
          </Link>
        </div>
        <div className="rightNavBar">
          <a>
            <Link to="/about">About</Link>
          </a>
          <a>
            <Link to="/projects">Projects</Link>
          </a>
          <a>
            <Link to="/contact">Contact</Link>
          </a>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
