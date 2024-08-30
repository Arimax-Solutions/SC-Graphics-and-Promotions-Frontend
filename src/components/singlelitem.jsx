// src/pages/SingleItemPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/product';
import { FaPhoneAlt, FaBox } from 'react-icons/fa';

const SingleItemPage = () => {
  const { productId } = useParams();
  const product = products[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 font-sans">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center">
            <img
              src={product.img}
              alt={product.title}
              className="w-96 h-96 object-cover rounded-md mb-4"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-red-600">{product.price}</span>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <button className="flex items-center bg-blue-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition duration-300">
                <FaPhoneAlt className="mr-2" /> Contact Us
              </button>
              <button className="flex items-center bg-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300">
                <FaBox className="mr-2" /> Order Now
              </button>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Details</h2>
              <ul className="text-gray-700 space-y-3">
                {product.details.map((detail, index) => (
                  <li key={index}>
                    <strong>{detail.label}:</strong> {detail.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItemPage;
