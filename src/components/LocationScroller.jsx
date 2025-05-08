// components/LocationScroller.js
import React, { useState } from 'react';
import './LocationScroller.css';

const locations = [
  { name: 'Dolphin Nose', image: '/images/bg1.jpg' },
  { name: 'Silent Valley', image: '/images/bg2.jpg' },
  { name: 'Guna Cave', image: '/images/bg3.jpg' },
  { name: 'Pillar Rocks', image: '/images/bg4.jpg' },
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
