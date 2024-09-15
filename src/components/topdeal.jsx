import React, { useEffect, useState } from 'react';
import prom1 from '../assets/prom1.jpeg';
import prom2 from '../assets/prom2.jpeg';
import prom3 from '../assets/prom3.jpeg';
import prom4 from '../assets/prom4.jpeg';
import prom5 from '../assets/trop.jpeg';
import prom6 from '../assets/prom6.jpeg';

const photos = [
  prom1,
  prom2,
  prom3,
  prom4,
  prom5,
  prom6
];

const PhotoList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Handle left arrow click
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  // Handle right arrow click
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="relative w-full">
      {/* Photo Slider */}
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 p-4 no-scrollbar">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index}`}
            className={`min-w-96 h-96 object-cover rounded-lg border border-gray-300 snap-center transition-transform duration-1000 ease-in-out ${
              index === activeIndex ? 'transform translate-x-0' : 'transform -translate-x-full'
            }`}
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full z-10 focus:outline-none"
      >
        &#10094; {/* Left Arrow Icon */}
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full z-10 focus:outline-none"
      >
        &#10095; {/* Right Arrow Icon */}
      </button>
    </div>
  );
};

export default PhotoList;
