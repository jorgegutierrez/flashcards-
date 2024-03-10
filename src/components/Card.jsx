import React, { useState } from 'react';
import './index.css';

const Card = ({ frontText, backText, color }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip} style={{ backgroundColor: color }}>
      <div className='card-inner'>
        <div className="card-front">
          {frontText}
        </div>
        <div className="card-back">
          {backText}
        </div>
      </div>
      <button className="arrow-button"></button>
    </div>
  );
}

export default Card;
