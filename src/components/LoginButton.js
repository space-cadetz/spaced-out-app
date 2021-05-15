import React from 'react';

// Component created by { auth0 } : https://auth0.com/docs/quickstart/spa/react
import { useAuth0 } from '@auth0/auth0-react';

// C S S
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};
export default LoginButton;
