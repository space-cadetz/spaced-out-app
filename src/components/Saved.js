import React from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

class Saved extends React.Component {

  render() {
    return (
      <Card className="card">
        <Card.Img className="apod-img" variant="top" src={this.props.photoData.url} />
        <Card.Body>
          <Card.Title>{this.props.photoData.title}</Card.Title>
          <Card.Text>
            {this.props.photoData.explanation}.
  </Card.Text>
          <Button>Save to Favorites</Button>
        </Card.Body>
      </Card>
    );
  }
}
export default Saved;
