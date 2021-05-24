import React from 'react';
import Landing from './Landing';

import { withAuth0 } from '@auth0/auth0-react';

function Home() {
  return (
    <div className="home-container">
      <Landing />
    </div>
  );
}

export default withAuth0(Home);
