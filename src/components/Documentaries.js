import React from 'react';
import '../styles/Documentary.css';

function Documentaries() {
  return (
    <div className="main-container">
      <div className="docTitle">
        <h1>Space Documentaries</h1>
      </div>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLuy-AptWSOGXs7S9xfbfxqkKtfDm3_q60"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
}

export default Documentaries;
