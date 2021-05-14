import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import '../styles/Nav.css';

function Navigation() {
  return (

    <div className="nav-container">
      <Navbar>
        <h3 className="navbar-logo">Space Cadets</h3>
        <Nav>
          <Nav.Item as="li">
            <Nav.Link className="links" href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="links" href='/picture'>Nasa Photo</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="links" href='/gallery'>Gallery</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="links" href='/profile'>Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="links" href='/calender'>Calender</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="links" href='/about'>About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
