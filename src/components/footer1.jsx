import React from "react";
import logo from '../assets/SCicon.png'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-[#1e294e] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">

              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />

            <h2 className="text-lg font-bold mb-2">SC Graphics and Promotions</h2>
            <p>178/A, Palanwatta, Pannipitiya, Colombo, Sri Lanka 10230</p>
            <p>071 535 9284 , 011 284 0017</p>
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

          {/* Middle Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-bold mb-2">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/grapic" className="hover:underline">Graphic Designing</a></li>
              <li><a href="/lacer" className="hover:underline">Laser Works</a></li>
              <li><a href="/keytags" className="hover:underline">Key Tags / Magnet Tags</a></li>
              <li><a href="/shop" className="hover:underline">Name Boards</a></li>
              <li><a href="shop" className="hover:underline">Gift Items</a></li>
              <li><a href="/custmise" className="hover:underline">Customized Items</a></li>
              <li><a href="/tropy" className="hover:underline">Trophy</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold mb-2">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="/shop" className="hover:underline">Store</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white mt-6"></div>
        <div className="text-center mt-6">
          <p className="text-xs">Developed by Arimax Solutions</p>
          <p className="text-gray-500 mt-2">&copy; {new Date().getFullYear()} SC Graphics and Promotions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
