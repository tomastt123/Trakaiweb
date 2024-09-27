// File: src/components/CastleExpos.js
import React, { useState } from 'react';
import '../styles/CastleExpos.css';

const CastleExpos = ({ expos }) => {
  const [currentExpo, setCurrentExpo] = useState(0);

  const handleNextExpo = () => {
    setCurrentExpo((prevExpo) => (prevExpo + 1) % expos.length);
  };

  const handlePrevExpo = () => {
    setCurrentExpo((prevExpo) => (prevExpo - 1 + expos.length) % expos.length);
  };

  const expo = expos[currentExpo];

  return (
    <div className="fifthcontainer">
      <div className="castle-grid">
        {/* Left side with the image grid */}
        <div className="castle-photos">
          {expo.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Exposition ${index + 1}`} />
          ))}
        </div>
        {/* Right side with the text block */}
        <div className="castle-text">
          <h2>{expo.title}</h2>
          <p>{expo.description}</p>
          <a href={expo.link}>Plačiau →</a>
        </div>
      </div>
      {/* Navigation buttons */}
      <div className="expo-navigation">
        <button className="prev-expo" onClick={handlePrevExpo}>‹</button>
        <button className="next-expo" onClick={handleNextExpo}>›</button>
      </div>
    </div>
  );
};

export default CastleExpos;
