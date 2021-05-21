import React from 'react';
// import '../App.css';
// import { Button } from './Button';
import { Image } from 'react-bootstrap';
import Photo from '../images/planet.jpg';
import '../styles/Landing.css';

function Landing() {
  return (
    <div className='landing-container'>
      {/* <img className="landing-img" src={Photo} alt='planet' /> */}
      <div className="landing-container-text">
        <h1>SpaceOut and Explore the Galaxy</h1>
        <p>We got all your space in one place</p>
      </div>
    </div>
  );
}

export default Landing;
