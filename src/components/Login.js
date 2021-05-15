import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
// C S S
// import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Welcome</Card.Title>
            <Card.Text>
              Click Below to Log In
            </Card.Text>
            <LoginButton />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Login;
