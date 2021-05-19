import React from 'react';
import { Spinner, Button } from 'react-bootstrap';
import '../styles/Loading.css';

// Component created by { auth0 } : https://auth0.com/docs/quickstart/spa/react
import { withAuth0 } from '@auth0/auth0-react';

class IsLoadingAndError extends React.Component {
  render() {
    return (
      this.props.auth0.isLoading ?
        <>
          <Button className="loading-btn" variant="danger" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
        Loading...
      </Button>
        </>
        :
        this.props.auth0.error ?
          <div>Oops... {this.props.auth0.error.message}</div>
          :
          this.props.children
    );
  }
}

export default withAuth0(IsLoadingAndError);
