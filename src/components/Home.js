import React from 'react';
// import Photo from '../images/wolf-space.jpg';
// import Container from 'react-bootstrap/Container';
import Landing from './Landing';
// import '../styles/Home.css';
// import '../styles/App.css';

import { withAuth0 } from '@auth0/auth0-react';

function Home() {
  return (
    <div className="home-container">
      <Landing />
    </div>
  );
}

export default withAuth0(Home);
