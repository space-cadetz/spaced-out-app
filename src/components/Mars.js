import React from 'react';
import Container from 'react-bootstrap/Container';
// import '../styles/Mars.css';
import Photo from '../images/wolf-space.jpg';

function Mars() {
  return (

    <Container className="gallery-container">
      <h1>Placeholder for potential Mars Weather API</h1> 
      <img src={Photo} />

    </Container>
  );
}

export default Mars;
