import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
// import { Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="navigation">
        <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/About">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Resume</Nav.Link>
    </Nav.Item>
    {/* <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item> */}
  </Nav>
      </div>
    );
  }
}

export default NavBar;
