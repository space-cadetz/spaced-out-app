import React from 'react';
// import { Card, Button, Container } from 'react-bootstrap';
import BGPhoto from '../images/about-bg-image.jpg';
import Tony from '../images/tony.jpg';
import '../styles/About.css';

function AboutUs() {
  return (
    <section>
      <div className="about-container">
        <div className="header-container">

          <h1 className="heading">
            <i className="fas fa-rocket"></i>
              Meet The Team
            <i className="fas fa-user-astronaut"></i>
          </h1>

        </div>
        <div className="card-container">
          <div className="card">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Tony} alt="profile image" className="profile-img" />
            <h1>Tony Regalado</h1>
            <p className="job-title">Software Developer</p>
            <p className="about">Hello my name is Tony Reaglado.</p>
            <a href="#" className="btn">Contact</a>
            <ul className="social-media">
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-github-square"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
            </ul>
          </div>
          <div className="card">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Tony} alt="profile image" className="profile-img" />
            <h1>Tony Regalado</h1>
            <p className="job-title">Software Developer</p>
            <p className="about">Hello my name is Tony Reaglado.</p>
            <a href="#" className="btn">Contact</a>
            <ul className="social-media">
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-github-square"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
            </ul>
          </div>
          <div className="card">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Tony} alt="profile image" className="profile-img" />
            <h1>Tony Regalado</h1>
            <p className="job-title">Software Developer</p>
            <p className="about">Hello my name is Tony Reaglado.</p>
            <a href="#" className="btn">Contact</a>
            <ul className="social-media">
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-github-square"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
            </ul>
          </div>
          <div className="card">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Tony} alt="profile image" className="profile-img" />
            <h1>Tony Regalado</h1>
            <p className="job-title">Software Developer</p>
            <p className="about">Hello my name is Tony Reaglado.</p>
            <a href="#" className="btn">Contact</a>
            <ul className="social-media">
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-github-square"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section >
  );
}

export default AboutUs;
