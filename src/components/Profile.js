import React from 'react';
import FavImages from './FavImages';
// import bgImg from '../images/about-bg-image.jpg';
// Component created by { auth0 } : https://auth0.com/docs/quickstart/spa/react
// https://auth0.com/docs/quickstart/spa/react#configure-the-auth0provider-component

import { useAuth0 } from '@auth0/auth0-react';

// B O O T S T R A P P I N '
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div className='profile-main-container'>
        <div className='profileBox'>
          {/* <div className="text-center"> */}
          <div className="userInfoBox">
            {/* <img className="bgImg" src={bgImg} alt="bg image" /> */}
            <img className='profileImg' src={user.picture} alt={user.name} title="profile picture" roundedCircle id="profilePic" />
            {/* </div> */}
            <div className="userInfo">
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          </div>
          {/* <div className="text-center"></div> */}
        </div>
        <FavImages />
        <div className="quote">
          <span role="img" aria-label="earth">🛸There are no passengers on spaceship earth...🌎</span>
          </div>
        <div>

        </div>
      </div>
    )
  );
};
export default Profile;

