import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// import '../styles/Mars.css';
import Photo from '../images/wolf-space.jpg';

function Mars() {
  return (

    <Container className="gallery-container" fluid>
      <h1 class="text-center">Placeholder for potential Mars Weather API</h1>
      <Image src={Photo} class="img-thumbnail" alt="Responsive image"/>
    </Container>
  );
}

export default Mars;
