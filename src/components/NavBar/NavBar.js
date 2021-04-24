import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="row">
      <nav id="nav-wrap">
        <ul className="nav nav-tabs">
            {/* <li className="current nav-item">
              <a className="smoothscroll" href="#home"></a>
            </li> */}
            <li className="nav-item">
              {" "}
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li className="nav-item">
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
        </ul>
      </nav>
      </div>
    );
  }
}

export default NavBar;
