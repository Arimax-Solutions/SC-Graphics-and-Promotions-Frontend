import { Link } from 'react-router-dom';
import { useState } from 'react';
import CategoryMenu from './categorie';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#29426E] text-white text-base sm:text-lg lg:text-xl font-mono  p-1 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        <div className={`lg:flex flex-grow hidden lg:block`}>
          <Link to="/" className="block px-4 py-2 hover:bg-[#6698FF] rounded-full transition-all ">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-[#6698FF] rounded-full transition-all ">Shop</Link>
          <Link to="/services" className="block px-4 py-2 hover:bg-[#6698FF] rounded-full transition-all ">Service</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-[#6698FF] rounded-full transition-all ">Contact Us</Link>
          <Link to="/blog" className="block px-4 py-2 hover:bg-[#6698FF] rounded-full transition-all ">Blog</Link>
        </div>
        <div className="hidden lg:block">
          <CategoryMenu />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}></div>
      <div className={`fixed top-0 left-0 w-64 h-full bg-[#29426E] z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none mb-4"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <Link to="/" className="block px-4 py-2 hover:bg-[#6698FF] rounded-full transition-all " onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-[#6698FF] rounded-full transition-all " onClick={toggleMenu}>Shop</Link>
          <Link to="/services" className="block px-4 py-2 hover:bg-[#6698FF] rounded-full transition-all " onClick={toggleMenu}>Service</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-[#6698FF] rounded-full transition-all " onClick={toggleMenu}>Contact Us</Link>
          <Link to="/blog" className="block px-4 py-2 hover:bg-[#6698FF] rounded-full transition-all " onClick={toggleMenu}>Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
