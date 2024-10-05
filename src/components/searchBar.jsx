import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // To store all products fetched from API
  const navigate = useNavigate();

  const backendUrl = process.env.VITE_BACKEND_URL;

  // Fetch all products from the API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/v1/products`);
        const data = await response.json();
        setAllProducts(data); // Store all products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter products based on the search term
    const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredProducts.length > 0) {
        // Load all filtered products on a search results page
        navigate(`/search?query=${searchTerm}`);
        setSearchTerm(""); // Clear the search term after navigating
      }
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchTerm(""); // Clear the search term when a product is clicked
  };

  return (
      <div className="relative w-full max-w-md mx-auto">
        <form className="relative">
          <input
              type="search"
              placeholder="Search products..."
              className="w-full py-4 pl-10 pr-4 rounded-full bg-gray-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              value={searchTerm}
              onChange={handleSearch}
              onKeyPress={handleKeyPress}
              style={{ height: '40px' }}
          />
          <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={(e) => e.preventDefault()}
          >
            <AiOutlineSearch size={20} />
          </button>
        </form>

        {searchTerm && filteredProducts.length > 0 && (
            <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto">
              {filteredProducts.map((product) => (
                  <div
                      key={product.id}
                      className="p-3 border-b border-gray-200 hover:bg-gray-100 cursor-pointer text-zinc-900 text-sm"
                      onClick={() => handleProductClick(product.id)} // Use the new click handler
                  >
                    {product.title}
                  </div>
              ))}
            </div>
        )}
      </div>
  );
};

export default SearchBar;
