// components/LocationScroller.js
import React, { useState } from 'react';
import silicon from '../assets/silicon.png'
import guna from '../assets/guna.png'

const locations = [
  { name: 'Silent Valley', image: silicon },
  { name: 'Guna Cave', image: guna },
  { name: 'Silent Valley', image: silicon },
  { name: 'Guna Cave', image: guna },
];

const LocationScroller = () => {
  const [bgImage, setBgImage] = useState(locations[0].image);

  return (
    <div
      className="scroller-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="scroll-text">
        {[...locations, ...locations].map((loc, i) => (
          <span
            key={i}
            onMouseEnter={() => setBgImage(loc.image)}
            className="scroll-item"
          >
            {loc.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LocationScroller;
