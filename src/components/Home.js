import React from 'react';
import Photo from '../images/wolf-space.jpg';
import Container from 'react-bootstrap/Container';
import '../styles/Home.css';

import { withAuth0 } from '@auth0/auth0-react';

function Home() {
  return (
    <Container className="home-container">
      <h1>Home Page</h1>
      <img src={Photo} />
    </Container>
  );
}

export default withAuth0(Home);
