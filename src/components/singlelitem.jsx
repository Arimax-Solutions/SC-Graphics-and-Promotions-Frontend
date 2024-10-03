import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaPhoneAlt, FaBox, FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const SingleItemPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the product details based on productId
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/products/${productId}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="text-center text-2xl font-bold">Loading...</div>; // Loading indicator
  }

  if (!product) {
    return <div className="text-center text-2xl font-bold text-red-600 mt-10">Product not found</div>;
  }

  return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 font-sans py-10">
        {/* Product Card */}
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden lg:flex lg:space-x-6">

          {/* Product Image Section */}
          <div className="w-full lg:w-1/3 p-4 flex justify-center">
            <img
                src={product.img}
                alt={product.title}
                className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Product Info Section */}
          <div className="w-full lg:w-2/3 p-6 flex flex-col justify-between">
            {/* Title, Description & Price */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 text-center lg:text-left">
                {product.title}
              </h1>
              <p className="text-md lg:text-lg text-gray-600 mb-6 leading-relaxed text-center lg:text-left">
                {product.description}
              </p>

              <div className="text-center lg:text-left mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-red-500">{product.price}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row lg:space-x-4 items-center">
              <a href="tel:0715359284" className="mb-4 lg:mb-0 w-full lg:w-auto">
                <button className="flex items-center justify-center w-full lg:w-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-all shadow-lg">
                  <FaPhoneAlt className="mr-2" /> Contact Us
                </button>
              </a>
              <button
                onClick={() => window.open(product.darazLink, '_blank')}
                className="flex items-center justify-center w-full lg:w-auto bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition-all shadow-lg"
              >
                <FaBox className="mr-2" /> Order Now
              </button>

            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex justify-center space-x-4 lg:justify-start">
              <a href="https://www.facebook.com/profile.php?id=100063858852964&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/sc_graphics_and_promotions?igsh=MXE5dnJzdTNoeGUxYQ==" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@scgraphicsandpromotions?_t=8pGceF53oKT&_r=1" target="_blank" rel="noopener noreferrer" className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                <FaTiktok />
              </a>
              {/*<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                <FaTwitter />
              </a>*/}
            </div>
          </div>
        </div>

        {/* Product Details Card */}
        <div className="w-full max-w-4xl mx-auto mt-10 bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
            Product Details
          </h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {product.details.map((detail, index) => (
                <li key={index} className="text-md lg:text-lg">
                  <strong className="font-semibold text-gray-900">{detail.label}:</strong> {detail.value}
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default SingleItemPage;
