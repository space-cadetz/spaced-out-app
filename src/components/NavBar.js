import React from 'react';
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap';
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
            {/* <Nav.Link href='/picture'>Nasa Photo</Nav.Link> */}
            {/* <Nav.Link href='/profile'>Profile</Nav.Link> */}
            <NavDropdown title="Explore" id="collasible-nav-dropdown">
              <NavDropdown.Item href='/picture'>Nasa Photo</NavDropdown.Item>
              <NavDropdown.Item href="#">Mars</NavDropdown.Item>
              <NavDropdown.Item href="#">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
              <NavDropdown.Item href='/about'>About Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="logout-btn">

            <LogoutButton />

          </Nav>
        </Navbar.Collapse>
      </Navbar>



    );
  }
}

export default withAuth0(Navigation);
