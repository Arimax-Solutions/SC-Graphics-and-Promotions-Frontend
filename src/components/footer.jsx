import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../assets/SCicon.png';

const categories = [
  'Graphic Designing',
  'Laser Works',
  'Key Tags / Magnet Tags',
  'Customized Items',
  'Trophy'
];

const usefulLinks = [
  'Privacy Policy',
  'FAQ',
  'Terms and Conditions',
  'Customer Service',
  'Contact Us'
];

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Company Infor */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <Link to="/" className="mb-4">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            </Link>
            <h6 className="text-lg font-semibold">SC Graphics and Promotions</h6>
            <p className="mt-2 text-sm">
              178/A, Polwatta, Pannipitiya, Colombo, Sri Lanka 10330
            </p>
            <p className="text-sm">071 535 9284, 011 284 0017</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="flex-1 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {/* Categories */}
            <div className="flex flex-col">
              <h6 className="text-lg font-semibold text-center md:text-left">Categories</h6>
              <ul className="mt-2 space-y-2 text-sm text-center md:text-left">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-gray-400">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col">
              <h6 className="text-lg font-semibold text-center md:text-left">Useful Links</h6>
              <ul className="mt-2 space-y-2 text-sm text-center md:text-left">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-gray-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 text-gray-400 text-sm">
          Developed by Arlton Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
