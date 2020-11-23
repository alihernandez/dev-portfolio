import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <Nav className="justify-content-center" activeKey="/">
    <Nav.Item>
    <Link
              to="/"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
    </Nav.Item>
    <Nav.Item>
    <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
    </Nav.Item>
    <Nav.Item>
    <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
    </Nav.Item>
  </Nav>
  );
}

export default Navbar;
