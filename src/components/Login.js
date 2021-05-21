import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';
// C S S
import '../styles/Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="loginContainer">
        <div>
          <div className="cardBody">
            <div className="cardTitle">Welcome</div>
            <div className="cardLoginText">
              <p>Click Below to Log In</p>
            </div>
            <div className="loginButton">
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
