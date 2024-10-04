import React, { useEffect, useState } from "react";
import prom1 from '../assets/prom1.jpeg';
import prom2 from '../assets/prom2.jpeg';
import prom3 from '../assets/prom3.jpeg';
import prom4 from '../assets/prom4.jpeg';
import prom5 from '../assets/trop.jpeg';
import prom6 from '../assets/prom6.jpeg';

const ImageSlideshow = () => {
  const images = [
    prom1,
  prom2,
  prom3,
  prom4,
  prom5,
  prom6
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Calculate indices of the 4 images that should be shown
  const displayedImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 3) % images.length],
  ];

  return (
    <div className="flex overflow-hidden w-full h-full">
      <div className="flex transition-transform duration-500 ease-in-out">
        {displayedImages.map((image, index) => (
          <div key={index} className="flex-none w-1/4 h-full p-2">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
