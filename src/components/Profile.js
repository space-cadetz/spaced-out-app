import React from 'react';
import FavImages from './FavImages';
// Component created by { auth0 } : https://auth0.com/docs/quickstart/spa/react
// https://auth0.com/docs/quickstart/spa/react#configure-the-auth0provider-component

import { useAuth0 } from '@auth0/auth0-react';

// B O O T S T R A P P I N '
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div className='profile-background'>
        <Container className='profile-container'>
          <div className="text-center">
            <Image className='profile-img' src={user.picture} alt={user.name} title="profile picture" roundedCircle id="profilePic" />
          </div>
          <h2 className="text-center">{user.name}</h2>
          <p className="text-center">{user.email}</p>
          <div className="text-center"></div>
          <div className="quote"><span role="img" aria-label="earth">🛸There are no passengers on spaceship earth...🌎</span></div><br />
        </Container>
        <div>
          <FavImages />
        </div>
      </div>
    )
  );
};
export default Profile;

