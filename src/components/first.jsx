import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Header = ({ title, imageSrc, description }) => {
  return (
    <div className="px-4 py-8 md:px-12 md:py-16 bg-white">
      {/* Title */}
      <h1 className="text-xl md:text-3xl font-bold font-serif pb-4 text-center md:text-left">
        {title}
      </h1>

      {/* Flex container that adapts on mobile */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
        
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={imageSrc} alt="Graphic Design" className="w-full h-auto rounded-lg" />
        </div>

        {/* Description & Buttons Section */}
        <div className="md:w-1/2 md:pl-6">
          <p className="text-base md:text-lg text-gray-500 leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row mt-10 space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-blue-800 text-white px-6 py-2 rounded w-full md:w-auto">
              Contact Us
            </button>
            <button className="bg-orange-600 text-white px-6 py-2 rounded w-full md:w-auto">
              Buy Now
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start mt-10 space-x-6 text-2xl">
            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=100063858852964&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/sc_graphics_and_promotions?igsh=MXE5dnJzdTNoeGUxYQ==" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@scgraphicsandpromotions?_t=8pGceF53oKT&_r=1" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
              <FaTiktok />
            </a>
            {/* Twitter */}
            {/*<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
