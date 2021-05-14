import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/Gallery.css';
import Photo from '../images/wolf-space.jpg';

function Gallery() {
  return (

    <Container className="gallery-container">

      <img src={Photo} />

    </Container>
  );
}

export default Gallery;
