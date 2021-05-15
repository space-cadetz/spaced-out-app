import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import {useAuth0} from '@auth0/auth0-react';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import '../styles/Nav.css';

class Navigation extends React.Component {
  render() {
    return (
      <>
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
              <Nav.Item as="li">
                <LogoutButton />
              </Nav.Item>
            </Nav>
          </Navbar>
        </div>
      </>
    );
  }
}

export default withAuth0(Navigation);
