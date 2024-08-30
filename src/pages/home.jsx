// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { products } from '../data/popularitem';
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationEnded(true);
    }, 1000); // animation time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`relative flex flex-col lg:flex-row items-center bg-white pt-0 pb-0 lg:pb lg:p-24 ${animationEnded ? 'animate-blur-effect' : ''}`}>
        {/* Left Side */}
        <div className={`lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 relative z-10`}>
          <h1 className={`text-4xl lg:text-6xl font-bold text-blue-600 ${animationEnded ? 'animate-blur' : 'animate-fade-in'}`}>
            Crafting Unique Graphics,<br />
            Customizing Perfect Gifts
          </h1>
          <h2 className={`text-3xl lg:text-5xl font-bold text-blue-400 mt-4 ${animationEnded ? 'animate-blur' : 'animate-fade-in'}`}>
            Let’s Make Your Vision Alive!
          </h2>
          <p className={`text-gray-600 mt-4 ${animationEnded ? 'animate-blur' : 'animate-fade-in'}`}>
            "Explore a curated selection of creative graphics and personalized gifts, 
            crafted to make every occasion special. We bring your ideas to life with quality and care."
          </p>
          <div className={`mt-8 flex justify-center lg:justify-start ${animationEnded ? 'animate-blur' : 'animate-fade-in'}`}>
          <a href="tel:0112840017" className="bg-blue-900 text-white py-2 px-4 rounded-md mr-4 flex items-center hover:bg-blue-800 active:bg-blue-700 active:scale-95 transition-all duration-150"><i className="mr-2">📞</i> 
          <span>Contact Us</span>
          </a>
          
          <a href="https://www.daraz.lk/shop/sc-promotions" target="_blank" rel="noopener noreferrer">
  <button className="bg-orange-600 text-white py-2 px-4 rounded-md flex items-center hover:bg-orange-500 active:bg-orange-700 active:scale-95 transition-all duration-150">
    <img src={darz} alt="Darz Logo" className="mr-2 h-6 w-6" style={{ filter: 'brightness(0) invert(1)' }} /> 
    Buy Now
  </button>
</a>





          </div>
        </div>

        {/* Shading Effect */}
        <div className="lg:w-1/2 relative flex justify-end">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>

          <img
            src={wallp}
            alt="Crafting Unique Graphics"
            className={`w-full h-full object-cover rounded-lg shadow-lg ${!animationEnded ? 'animate-slide-right' : ''}`}
          />
        </div>
      </div>
      
      <div>
        <ThemeProvider />
      </div>
      
      <div className="flex flex-col lg:flex-row m-4 px-4 lg:px-0">
  <div className="lg:w-1/4 lg:mr-6 mb-6 lg:mb-0 flex justify-center lg:justify-start">
    <BrowseCategories />
  </div>

  <div className="lg:w-3/4 lg:pl-6 lg:pr-6">
    <h1 className="text-2xl font-bold mb-4">POPULAR PRODUCTS</h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {Object.values(products).map(product => (
        <Item
          key={product.id}
          img={product.img}
          price={product.price}
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
        <Button className="text-center" variant="contained" disableElevation>
          <LuPhoneCall className="mr-2" />
          Contact Us
        </Button>
      </div>
    </>
  );
};

export default Home;
