import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import {useAuth0} from '@auth0/auth0-react';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import '../styles/NavBar.css';

class Navigation extends React.Component {
  render() {
    return (

      <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='logo' href='/'>SpaceOut</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/picture'>Nasa Photo</Nav.Link>
            <Nav.Link href='/profile'>Profile</Nav.Link>
            <NavDropdown title="Explore" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nasa Photo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

            <LogoutButton />

          </Nav>
        </Navbar.Collapse>
      </Navbar>



    );
  }
}

export default withAuth0(Navigation);
