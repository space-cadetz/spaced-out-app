import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import '../styles/NasaPhoto.css';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  const auth = useAuth0();

  console.log(auth);

  const handleClick = () => {
    console.log('image title:', photoData.title);
    console.log('image date', photoData.date);
    console.log('image url', photoData.url);

    axios.post('http://localhost:3001/insert', {
      email: auth.user.email,
      title: photoData.title,
      date: photoData.date,
      url: photoData.url,
    });
  };


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
      <img src={photoData.url} alt={photoData.title} />
      <h1 name="title" id="photo-title">{photoData.title}</h1>
      <p name="date" id="photo-date">{photoData.date}</p>
      <p name="explaination" id="photo-explaination">{photoData.explanation}</p>
      <p name="url" id="photo-url">{photoData.url}</p>
      <button onClick={handleClick}></button>

    </div>
  );
}
// export default NasaPhoto;
