import React from 'react';
// import { Card, Button, Container } from 'react-bootstrap';
import BGPhoto from '../images/about-bg-image.jpg';
import Tony from '../images/tony.jpg';
import Aloysious from '../images/aloysious.png';
import Marie from '../images/marie.jpg';
import Matt from '../images/matt.jpg';
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
            <img src={Aloysious} alt="profile image" className="profile-img" />
            <h1>Aloysious X</h1>
            <p>&lt;they&gt;💻&lt;/them&gt;</p>
            <p className="job-title">Software Developer</p>
            <p className="about">I'm an Army Veteran, a stay-at-home parent, and a Cloud Native Web Developer pursuing Python certification @Codefellows. I currently live on Occupied Duwamish Land and throughout the pandemic have fallen in love with <a href="https://sourcecred.io/docs/"id="sourcecred" target="_blank">Source Cred</a>, an open source algorithm and my current passion project. I have a passion for Neurodiversity Advocacy and plan to leverage the skills I'm developing now to create a more inclusive future for all...both in and out of the tech industry. </p>
            {/* <a href="#" className="btn">Contact</a> */}
            <ul className="social-media">
              <li><a href="https://www.linkedin.com/in/a-todd-charliemike/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://github.com/AL0YSI0US" target="blank"><i className="fab fa-github-square"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
            </ul>
          </div>
          <div className="card">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Matt} alt="profile image" className="profile-img" />
            <h1>Matt Santorsola</h1>
            <p className="job-title">Software Developer</p>
            <p className="about">Bio Here: </p>
            {/* <a href="#" className="btn">Contact</a> */}
            <ul className="social-media">
              <li><a href="https://www.linkedin.com/in/matthew-santorsola/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-github-square"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
            </ul>
          </div>
          <div className="card">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Marie} alt="profile image" className="profile-img" />
            <h1>Marie Marcos</h1>
            <p className="job-title">Software Developer</p>
            <p className="about">Bio Here: </p>
            {/* <a href="#" className="btn">Contact</a> */}
            <ul className="social-media">
              <li><a href="https://www.linkedin.com/in/marie-marcos/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://github.com/Mmarcos01" target="blank"><i className="fab fa-github-square" target="blank"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-square" target="blank"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter-square" target="blank"></i></a></li>
            </ul>
          </div>
          <div className="card">
            <img src={BGPhoto} alt="card background" className="card-img" />
            <img src={Tony} alt="profile image" className="profile-img" />
            <h1>Tony Regalado</h1>
            <p className="job-title">Software Developer</p>
            <p className="about">I'm a US Coast Guard Veteran with a background in the Hospitality & Food Service Industry. Currently living
          in Seattle and attending Codefellows full-time. I'd say that I'm an open-minded, honest, dedicated and
          hardworking individual. I have a passion for tech, building race cars, gaming, learning and writing code.
          I'm excited use my problem solving and critical thinking skills to build apps that helps improves the lives of
          people around the world.</p>
            {/* <a href="#" className="btn">Contact</a> */}
            <ul className="social-media">
              <li><a href="https://www.linkedin.com/in/edward-regalado/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="https://github.com/Edward-Regalado" target="blank"><i className="fab fa-github-square"></i></a></li>
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
