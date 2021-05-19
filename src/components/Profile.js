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
      <div class='profile-background'>
        <Container className='profile-container'>
          <div class="text-center">
            <Image className='profile-img' src={user.picture} alt={user.name} title="profile picture" roundedCircle id="profilePic" />
          </div>
          <h2 class="text-center">{user.name}</h2>
          <p class="text-center">{user.email}</p>
          <div class="text-center"></div>
          <div class="quote">🛸There are no passengers on spaceship earth...🌎 </div><br />
        </Container>
        <div>
          <FavImages />
        </div>
      </div>
    )
  );
};
export default Profile;

