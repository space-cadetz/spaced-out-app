import React from 'react';
import Photo from '../images/wolf-space.jpg';
import Container from 'react-bootstrap/Container';
import '../styles/Home.css';

function Home() {
  return (
    <Container className="home-container">
      <h1>Home Page</h1>
      <img src={Photo} />
    </Container>
  );
}

export default Home;
