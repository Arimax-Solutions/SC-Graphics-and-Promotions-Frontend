import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/SCicon.png'; 
import SearchBar from './searchBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServiceMenu = () => setIsServiceOpen(!isServiceOpen);

  return (
    <nav className="fixed w-full z-50 bg-gray-700 bg-opacity-50 text-white text-base sm:text-lg lg:text-xl font-mono p-1 shadow-md transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Menu Button with Search Bar */}
        <div className="flex items-center w-full lg:w-auto justify-between lg:justify-start">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            </Link>
            <button 
              onClick={toggleMenu} 
              className="lg:hidden focus:outline-none mr-4"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16M4 10h16M4 16h16"></path>
              </svg>
            </button>
          </div>

          {/* Search Bar for Mobile */}
          <div className="w-full lg:hidden">
            <SearchBar className="w-full" />
          </div>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex lg:flex-grow lg:items-center lg:justify-between w-full lg:w-auto mt-4 lg:mt-0">
          <div className="flex">
            <Link to="/" className="block px-4 py-2 rounded-full transition-all no-underline hover:underline">Home</Link>
            <Link to="/aboutus" className="block px-4 py-2 rounded-full transition-all no-underline hover:underline">About Us</Link>
            <Link to="/shop" className="block px-4 py-2 rounded-full transition-all no-underline hover:underline">Shop</Link>
            
            <div className="relative">
              <button 
                onClick={toggleServiceMenu} 
                onMouseEnter={() => setIsServiceOpen(true)} 
                onMouseLeave={() => setIsServiceOpen(false)}
                className="block px-4 py-2 rounded-full transition-all no-underline hover:underline flex items-center"
              >
                Service
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isServiceOpen && (
                <div 
                  className="absolute left-0 mt-2 w-56 bg-gray-800 text-white rounded-lg shadow-lg border border-gray-600"
                  onMouseEnter={() => setIsServiceOpen(true)} 
                  onMouseLeave={() => setIsServiceOpen(false)}
                >
                  <Link to="/grapic" className="block px-4 py-2 text-white no-underline hover:bg-gray-600 flex items-center rounded-t-lg">
                    Graphic Designing
                  </Link>
                  <Link to="/lacer" className="block px-4 py-2 text-white no-underline hover:bg-gray-600 flex items-center">
                    Laser Works
                  </Link>
                  <Link to="/keytags" className="block px-4 py-2 text-white no-underline hover:bg-gray-600 flex items-center">
                    Key Tags / Magnet Tags
                  </Link>
                  <Link to="/custmise" className="block px-4 py-2 text-white no-underline hover:bg-gray-600 flex items-center">
                    Customized Items
                  </Link>
                  <Link to="/tropy" className="block px-4 py-2 text-white no-underline hover:bg-gray-600 flex items-center rounded-b-lg">
                    Trophy
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="block px-4 py-2 rounded-full transition-all no-underline hover:underline">Contact Us</Link>
          </div>
          <div className="flex justify-end">
            <SearchBar />
          </div>
        </div>
        
        {/* Mobile Sidebar */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}></div>
        <div className={`fixed top-0 left-0 w-64 h-full bg-gray-700 bg-opacity-50 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="p-4">
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none mb-4"
              aria-label="Close menu"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <Link to="/" className="block px-4 py-2 rounded-full transition-all text-white no-underline hover:underline" onClick={toggleMenu}>Home</Link>
            <Link to="/shop" className="block px-4 py-2 rounded-full transition-all text-white no-underline hover:underline" onClick={toggleMenu}>Shop</Link>
            
            <div>
              <button 
                onClick={toggleServiceMenu} 
                className="block px-4 py-2 rounded-full transition-all text-white no-underline hover:underline flex items-center"
              >
                Service
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isServiceOpen && (
                <div className="mt-2">
                  <Link to="/grapic" className="block px-4 py-2 text-white no-underline hover:bg-gray-600 rounded-t-lg" onClick={toggleMenu}>Graphic Designing</Link>
                  <Link to="/lacer" className="block px-4 py-2 text-white no-underline hover:bg-gray-600" onClick={toggleMenu}>Laser Works</Link>
                  <Link to="/keytags" className="block px-4 py-2 text-white no-underline hover:bg-gray-600" onClick={toggleMenu}>Key Tags / Magnet Tags</Link>
                  <Link to="/custmise" className="block px-4 py-2 text-white no-underline hover:bg-gray-600" onClick={toggleMenu}>Customized Items</Link>
                  <Link to="/tropy" className="block px-4 py-2 text-white no-underline hover:bg-gray-600 rounded-b-lg" onClick={toggleMenu}>Trophy</Link>
                </div>
              )}
            </div>
            
            <Link to="/contact" className="block px-4 py-2 rounded-full transition-all text-white no-underline hover:underline" onClick={toggleMenu}>Contact Us</Link>
            <Link to="/aboutus" className="block px-4 py-2 rounded-full transition-all text-white no-underline hover:underline" onClick={toggleMenu}>Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
