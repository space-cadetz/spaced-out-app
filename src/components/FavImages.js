import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { CardDeck, Card, Button, Container } from 'react-bootstrap';

import '../styles/FavImages.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class FavImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: '',
      images: [],
      email: this.props.auth0.user.email,
    };
  }

  handleDelete = async (id) => {
    try {
      let imageData = await axios.delete(
        `http://localhost:3001/user/${id}?userEmail=${this.state.email}`,
      );
      this.setState({
        images: imageData.data
      });
    } catch (err) {
      this.setState({
        errors: err.toString(),
      });
    }
  };

  componentDidMount = async () => {
    try {
      const imageData = await axios.get(
        `http://localhost:3001/user?userEmail=${this.state.email}`
      );
      console.log('getting image data', imageData.data);
      console.log('getting image data', imageData.data[0].favoriteImages);
      this.setState({
        images: imageData.data[0].favoriteImages,
      });
    } catch (err) {
      this.setState({
        errors: err.toString(),
      });
    }
  };


  render() {
    let allImages = this.state.images.map((image) => (
      <CardDeck>
        <Card  className="card">
        <Card.Body>
          <img className="fav-img" src={image.url} alt={image.title} />
          {/* <Card.Title>{image.title}</Card.Title> */}
          <h3>{image.title}</h3>
          <p>{image.date}</p>
          <Button onClick={() => this.handleDelete(image._id)}>Delete</Button>
        </Card.Body>
        </Card>
      </CardDeck>
    ));

    return (
      <>
        <Container className="card-container">
          <CardDeck className="card-deck">{allImages}</CardDeck>
        </Container>
      </>
    );
  }
}

export default withAuth0(FavImages);
