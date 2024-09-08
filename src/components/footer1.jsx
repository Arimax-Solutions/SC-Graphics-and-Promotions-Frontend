import React from "react";
import logo from '../assets/SCicon.png'

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
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="https://facebook.com" className="text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com" className="text-white"><i className="fab fa-instagram"></i></a>
              <a href="https://tiktok.com" className="text-white"><i className="fab fa-tiktok"></i></a>
              <a href="https://whatsapp.com" className="text-white"><i className="fab fa-whatsapp"></i></a>
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
              <li><a href="/services" className="hover:underline">Customer Service</a></li>
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
