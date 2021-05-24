import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
// import { Button } from 'react-bootstrap';
// import { Card, Image } from 'react-bootstrap';

import '../styles/NasaPhoto.css';

const apiKey = process.env.REACT_APP_NASA_KEY;


// woah a functional component? fun!
export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  const auth = useAuth0();

  console.log(auth);

  const handleClick = () => {
    console.log('email', auth.user.email);
    console.log('image title:', photoData.title);
    console.log('image date', photoData.date);
    console.log('image url', photoData.url);

    axios.post('http://localhost:3001/user', {
      email: auth.user.email,
      title: photoData.title,
      date: photoData.date,
      url: photoData.url,
    });
  };

  function randomDate() {
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    let date1 = new Date('2015-01-01').getTime()
    let date2 = new Date('2021-05-18').getTime()

    if (date1 > date2) {
      return new Date(randomValueBetween(date2, date1));
    } else {
      return new Date(randomValueBetween(date1, date2));
    }
  }

  function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1 + "";
    let day = date.getDate() + "";
    return year + "-" + month.padStart(2, "0") + "-" + day.padStart(2, "0");
  }

  // it would make more sense to move these 2 lines of code inside of the fetchRandom method
  let date = formatDate(randomDate('2015-01-01', '2020-05-18'));
  console.log(date)

  async function fetchRandom() {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
    );
    const data = await res.json();
    setPhotoData(data);
    console.log('random data', data);
  }



  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div className="nasa-container">
      <div className="nasa-header-container">
        <h1>Image of the Day</h1>
      </div>
      <div className="nasa-img-container">
        <img className="nasaImgOfTheDay" src={photoData.url} alt={photoData.title} />
        <div className="nasa-text-container">
          <h1 name="title" id="photo-title">{photoData.title}</h1>
          <div className="nasa-text-data">
            <p name="date" id="photo-date">{photoData.date}</p>
            <p name="explanation" id="photo-explanation">{photoData.explanation}</p>
          </div>

          <div className="btnBox">
            <button className="random-btn" variant="secondary" onClick={fetchRandom}>Warp Speed!</button>
            <button className="save-btn" onClick={handleClick}>Save to Favorites</button>
          </div>

        </div>
      </div>

    </div>
  );
}
// export default NasaPhoto;
