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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


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
  const [products, setProducts] = useState([]); // State to store fetched products
  const [selectedCategory, setSelectedCategory] = useState('All'); // State to track selected category

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
  <a href="tel:0112840017" className="bg-blue-900 text-white py-2 px-4 rounded-md mb-4 sm:mb-0 sm:mr-4 flex items-center justify-center hover:bg-blue-800 active:bg-blue-700 active:scale-95 transition-all duration-150 w-full sm:w-36">
    <FontAwesomeIcon icon={faPhone} className="text-white" />
    <span className="ml-2">Contact Us</span>
  </a>
  <a href="https://www.daraz.lk/shop/sc-promotions" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full sm:w-auto">
    <button className="bg-orange-600 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-orange-500 active:bg-orange-700 active:scale-95 transition-all duration-150 w-full sm:w-36">
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



        <div className="flex flex-col lg:flex-row m-4 px-0 lg:px-0 py-10">
          {/*<div className="hidden lg:block lg:w-1/4 lg:mr-6 mb-6 lg:mb-0 flex justify-center lg:justify-start">
            <BrowseCategories />
          </div>*/}

<div className="sm:bg-gray-100 rounded-3xl lg:w-5/6 mx-auto pb-2">
  <h1 className="text-2xl font-bold mt-5 ml-5 mb-8 text-left text-gray-800">More to Love</h1>
   {/* Category Buttons - Responsive for Mobile */}
   <div className={`flex flex-wrap justify-center gap-2 mt-4 px-4 overflow-x-auto scrollbar-hide ${animationEnded ? 'animate-blur' : ''}`}>
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
  <div className="p-1  sm:p-5 grid grid-cols-2 rounded-3xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-4 justify-items-center sm:bg-gray-100">
    
    {filteredProducts.slice(0, 16).map((product) => (
      <a
        key={product.id}
        href={`/product/${product.id}`} // Link to product details page
        className="w-full max-w-xs py-2 sm:py-0"
      >
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
        >
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
<div className="mx-5 bg-gray-100 p-5 rounded-3xl shadow-md">
<h1 className="text-3xl font-bold italic mb-4">
            Super
            <span className="text-red-500 font-bold italic">Deals</span>
          </h1>
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