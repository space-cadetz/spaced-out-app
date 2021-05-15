import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Photo from '../images/hidethepainharold.jpg';
import '../styles/About.css';

function AboutUs() {
  return (

    <div className="about-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Photo} />
        <Card.Body>
          <Card.Title>Bios</Card.Title>
          <Card.Text>Your Name</Card.Text>
          <Button variant="primary">links</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Photo} />
        <Card.Body>
          <Card.Title>Bios</Card.Title>
          <Card.Text>Your Name</Card.Text>
          <Button variant="primary">links</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Photo} />
        <Card.Body>
          <Card.Title>Bios</Card.Title>
          <Card.Text>Your Name</Card.Text>
          <Button variant="primary">link</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Photo} />
        <Card.Body>
          <Card.Title>Bios</Card.Title>
          <Card.Text>Your Name</Card.Text>
          <Button variant="primary">links</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutUs;
