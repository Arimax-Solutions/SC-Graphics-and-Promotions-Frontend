import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making API calls

const Item = ({ img, price, text, productId }) => {

  const backendUrl = process.env.VITE_BACKEND_URL;

  if (!productId) {
    console.error("Product ID is missing for the Item component.");
    return <div className="text-red-500">Product not available</div>; // Fallback UI
  }

  const handleClick = async () => {
    try {
      // Call the API to increment the click count
      await axios.post(`/api/v1/products/click/count/${productId}`);
    } catch (error) {
      console.error("Error incrementing click count:", error);
    }
  };

  return (
      <Link
          to={`/product/${productId}`}
          className="block transform transition-transform duration-300 hover:scale-105"
          aria-label={`View details for ${text}`}
          onClick={handleClick} // Call handleClick on click
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
                src={img}
                alt={text}
                className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold text-center px-2">{text}</span>
            </div>
          </div>
          <div className="p-4">
            {/*<h3 className="text-pink-600 text-xl font-bold text-center">LKR. {price}</h3>*/}
            <h3 className="text-pink-600 text-xl font-bold text-center">LKR. {(price || 0).toFixed(2)}</h3>

            <p className="text-gray-700 text-center mt-2 h-12 overflow-hidden text-ellipsis">
              {text}
            </p>
          </div>
        </div>
      </Link>
  );
};

export default Item;
