import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { products } from '../data/product';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = Object.values(products).filter((product) =>
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
      }
    }
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
              onClick={() => navigate(`/product/${product.id}`)}
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
