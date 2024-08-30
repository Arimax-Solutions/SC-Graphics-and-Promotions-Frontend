import React from 'react';
import prom1 from '../assets/prom1.jpeg'
import prom2 from '../assets/prom2.jpeg'
import prom3 from '../assets/prom3.jpeg'
import prom4 from '../assets/prom4.jpeg'
import prom5 from '../assets/trop.jpeg'



const photos = [
  prom1,
  prom2,
  prom3,
  prom4,
  prom5,
];

const PhotoList = () => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index}`}
          className="min-w-96 h-96 object-cover rounded-lg border border-gray-300"
        />
      ))}
    </div>
  );
};

export default PhotoList;
