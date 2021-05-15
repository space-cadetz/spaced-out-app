import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import App from './App';

// Component created by { auth0 } : https://auth0.com/docs/quickstart/spa/react
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="aloysious.us.auth0.com"
    clientId="fBPJNSLDhFeU7MwRApLs1F64LKG2z3y3"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
