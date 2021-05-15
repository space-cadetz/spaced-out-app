import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/NasaPhoto.css';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

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
      <h1 id="photo-title">{photoData.title}</h1>
      <p id="photo-date">{photoData.date}</p>
      <p id="photo-explaination">{photoData.explanation}</p>
    </div>
  );
}
// export default NasaPhoto;
