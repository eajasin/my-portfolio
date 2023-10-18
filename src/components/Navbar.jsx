import React from "react";
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
                <a>
                <Link to="/">
        <img src="your-image-source.png" alt="Link to Home" />
      </Link>
                </a>
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
    )
}

export default Navbar