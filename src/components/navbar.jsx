// src/components/Navbar.js
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white-800 text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className={`lg:flex flex-grow ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700 rounded transition-all ">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-700 rounded transition-all">Shop</Link>
          <Link to="/services" className="block px-4 py-2 hover:bg-gray-700 rounded transition-all">Service</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700 rounded transition-all">Contact US</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700 rounded transition-all">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
