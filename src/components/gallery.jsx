import React from 'react';
import Gall1 from '../assets/gall1.png'
import Gall2 from '../assets/gall2.png'
import Gall3 from '../assets/gall3.png'

const images = [

  Gall1,
  Gall2,
  Gall3,
  Gall1,
  Gall2,
  Gall3,

];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-3">
          <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src={images[0]}
              alt="Gallery Image 1"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src={images[1]}
              alt="Gallery Image 2"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src={images[2]}
              alt="Gallery Image 3"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src={images[3]}
              alt="Gallery Image 4"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src={images[4]}
              alt="Gallery Image 5"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
