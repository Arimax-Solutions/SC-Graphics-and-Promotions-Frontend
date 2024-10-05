import React, { useEffect, useState } from 'react';
import wallp from '../assets/wall1.jpeg';
import ThemeProvider from '../components/box';
import Topdeal from '../components/topdeal';
import Button from '@mui/material/Button';
import { LuPhoneCall } from "react-icons/lu";
import darz from '../assets/darzlogo.png';

const categories = [
  { name: 'Laser Works' },
  { name: 'Key Tags' },
  { name: 'Magnet Tags' },
  { name: 'Name Boards' },
  { name: 'Gift Items' },
  { name: 'Customized Items' },
  { name: 'Trophy' },
];

const Home = () => {
  const [animationEnded, setAnimationEnded] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const backendUrl = process.env.VITE_BACKEND_URL;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationEnded(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  // Fetch popular products from the API
  const fetchPopularProducts = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/v1/products/popular`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching popular products:", error);
    }
  };

  useEffect(() => {
    fetchPopularProducts();
  }, []);

  // Function to filter products by category
  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  // Filtered products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <div className={`relative flex flex-col-reverse lg:flex-row items-center bg-white pt-0 pb-0 lg:p-24 ${animationEnded ? 'animate-blur-effect' : ''}`}>
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 relative z-10 p-4">
          <h1 className={`text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-600 ${animationEnded ? 'animate-blur' : 'animate-fade-in'}`}>
            Crafting Unique Graphics,<br />
            Customizing Perfect Gifts
          </h1>
          <h2 className={`text-2xl sm:text-3xl lg:text-5xl font-bold text-blue-400 mt-4 ${animationEnded ? 'animate-blur' : 'animate-fade-in'}`}>
            Let’s Make Your Vision Alive!
          </h2>
          <p className={`text-gray-600 mt-4 ${animationEnded ? 'animate-blur' : 'animate-fade-in'}`}>
            "Explore a curated selection of creative graphics and personalized gifts,
            crafted to make every occasion special. We bring your ideas to life with quality and care."
          </p>
          <div className={`mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 ${animationEnded ? 'animate-blur' : 'animate-fade-in'}`}>
      <a
        href="tel:0112840017"
        className="w-full sm:w-auto bg-blue-900 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-blue-800 active:bg-blue-700 active:scale-95 transition-all duration-150"
      >
        📞 <span className="ml-2">Contact Us</span>
      </a>
      <a
        href="https://www.daraz.lk/shop/sc-promotions"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto flex items-center justify-center"
      >
        <button
          className="w-full sm:w-auto bg-orange-600 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-orange-500 active:bg-orange-700 active:scale-95 transition-all duration-150"
        >
          <img src={darz} alt="Darz Logo" className="mr-2 h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} />
          Buy Now
        </button>
      </a>
    </div>

        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mb-8 lg:mb-0">
          <img
            src={wallp}
            alt="Crafting Unique Graphics"
            className={`w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg ${!animationEnded ? 'animate-slide-right' : ''}`}
          />
        </div>
      </div>

      {/* Theme Provider Section */}
      <div>
        <ThemeProvider />
      </div>

      {/* Category Buttons - Responsive for Mobile */}
      <div className="flex flex-wrap justify-center gap-2 mt-4 px-4 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => filterByCategory('All')}
          className={`py-2 px-4 mb-2 rounded-md text-white ${selectedCategory === 'All' ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category.name}
            onClick={() => filterByCategory(category.name)}
            className={`py-2 px-4 mb-2 rounded-md text-white ${selectedCategory === category.name ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Popular Products Section */}
      <div className="flex flex-col lg:flex-row m-4 px-0 lg:px-0">
        <div className="lg:w-5/6 mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-orange-600 font-poppins">POPULAR PRODUCTS</h1>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {filteredProducts.slice(0, 16).map((product) => (
              <a
                key={product.id}
                href={`/product/${product.id}`}
                className="w-full max-w-xs"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{product.title || 'Untitled'}</h3>
                    <p className="text-blue-600 text-lg font-bold mt-2">{`Rs. ${product.price.toFixed(2)}`}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Top Deals Section */}
      <div className="mt-8 px-4 lg:px-24">
        <h1 className="text-3xl font-bold mb-4">Top Deals</h1>
        <Topdeal />
      </div>

      {/* Contact Section */}
      <h1 className="text-center text-3xl mt-10">Your Vision, Our Expertise — Let's Connect Today!</h1>
      <div className="flex items-center justify-center h-20 mt-4">
        <a href="tel:0715359284" className="no-underline">
          <Button className="text-center" variant="contained" disableElevation>
            <LuPhoneCall className="mr-2" />
            Contact Us
          </Button>
        </a>
      </div>
    </>
  );
};

export default Home;
