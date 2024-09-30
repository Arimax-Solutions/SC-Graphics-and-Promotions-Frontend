import React, { useEffect, useState } from 'react';
import { products as mockProducts } from '../data/popularitem'; // Existing mock data
import wallp from '../assets/wall1.jpeg';
import ThemeProvider from '../components/box';
import Item from '../components/item';
import BrowseCategories from '../components/categorie';
import Topdeal from '../components/topdeal';
import Button from '@mui/material/Button';
import { LuPhoneCall } from "react-icons/lu";
import darz from '../assets/darzlogo.png';

const Home = () => {
  const [animationEnded, setAnimationEnded] = useState(false);
  const [products, setProducts] = useState([]); // State to store fetched products

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationEnded(true);
    }, 1000); // Animation time
    return () => clearTimeout(timer);
  }, []);


  // Fetch popular products from the API
  const fetchPopularProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/products/popular");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data); // Store fetched products in state
    } catch (error) {
      console.error("Error fetching popular products:", error);
    }
  };

  useEffect(() => {
    fetchPopularProducts(); // Call fetch function on component mount
  }, []);

  return (
      <>
        <div className={`relative flex flex-col-reverse lg:flex-row items-center bg-white pt-0 pb-0 lg:pb lg:p-24 ${animationEnded ? 'animate-blur-effect' : ''}`}>
          {/* Left Side - Text (Mobile: Below Image) */}
          <div className={`w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 relative z-10 p-4`}>
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
            <div className={`mt-8 flex flex-col sm:flex-row justify-center lg:justify-start ${animationEnded ? 'animate-blur' : 'animate-fade-in'}`}>
              <a href="tel:0112840017" className="bg-blue-900 text-white py-2 px-4 rounded-md mb-4 sm:mb-0 sm:mr-4 flex items-center justify-center hover:bg-blue-800 active:bg-blue-700 active:scale-95 transition-all duration-150">
                📞 <span className="ml-2">Contact Us</span>
              </a>
              <a href="https://www.daraz.lk/shop/sc-promotions" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <button className="bg-orange-600 text-white py-2 px-4 rounded-md flex items-center hover:bg-orange-500 active:bg-orange-700 active:scale-95 transition-all duration-150">
                  <img src={darz} alt="Darz Logo" className="mr-2 h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} />
                  Buy Now
                </button>
              </a>
            </div>
          </div>

          {/* Right Side - Image (Mobile: Above Text) */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            {/* Shading Effect for Laptop only */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block"></div>

            <img
                src={wallp}
                alt="Crafting Unique Graphics"
                className={`w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg ${!animationEnded ? 'animate-slide-right' : ''}`}
            />
          </div>
        </div>

        <div>
          <ThemeProvider />
        </div>

        <div className="flex flex-col lg:flex-row m-4 px-0 lg:px-0">
          <div className="hidden lg:block lg:w-1/4 lg:mr-6 mb-6 lg:mb-0 flex justify-center lg:justify-start">
            <BrowseCategories />
          </div>

          <div className="lg:w-3/4 ">
            <h1 className="text-2xl font-bold mb-4">POPULAR PRODUCTS</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {products.map(product => ( // Use fetched products
                  <Item
                      key={product.id}
                      img={product.img}
                      price={`Rs.${product.price.toFixed(2)}`} // Format price
                      text={product.title}
                      productId={product.id}
                  />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4 pt-10 pl-5">Top Deals</h1>
          <Topdeal />
        </div>

        <h1 className="text-center text-3xl">Your Vision, Our Expertise  —  Let's Connect Today!</h1>
        <div className="flex items-center justify-center h-20">
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
