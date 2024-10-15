import React, { useState, useEffect, useMemo } from 'react';
import Item from '../components/item';
import CategoryMenu from '../components/catgry';
import { BsChevronDown } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest Arrivals"];
const itemsPerPage = 16;

const ShoppingPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSubcategory, setSelectedSubcategory] = useState(""); // New state for subcategory
  const [sortOption, setSortOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state

  const backendUrl = process.env.VITE_BACKEND_URL;

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`/api/v1/products`);
      //const response = await axios.get(`http://localhost:8080/api/v1/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategorySelect = (category, subcategory = "") => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setCurrentPage(1);
  };

  const handleSortOptionSelect = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
    setCurrentPage(1);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Filter products based on category and subcategory
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
      const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory;
      return matchesCategory && matchesSubcategory;
    });
  }, [products, selectedCategory, selectedSubcategory]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortOption === "Price: Low to High") return parseFloat(a.price) - parseFloat(b.price);
      if (sortOption === "Price: High to Low") return parseFloat(b.price) - parseFloat(a.price);
      return 0;
    });
  }, [filteredProducts, sortOption]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message
  }

  return (
      <div className="p-4 pt-24 bg-gray-100 min-h-screen lg:flex lg:space-x-6">
        {/* Category Menu */}
        <aside className={`category-menu ${isMobile ? 'w-full' : 'lg:w-1/5 md:w-1/4 mb-6 lg:mb-0'}`}>
          <CategoryMenu onCategorySelect={handleCategorySelect} />
        </aside>

        {/* Main Content */}
        <div className={`w-full ${!isMobile ? 'lg:w-4/5 lg:pl-6 pr-4' : 'mt-4'}`}>
          <div className="flex justify-between items-center mb-4">
            {/* Sort Options */}
            <div className="relative inline-block text-left ml-auto mr-4 lg:mr-8">
              <button
                  onClick={toggleDropdown}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sort By
                <BsChevronDown className="ml-2 -mr-1 h-5 w-5 text-gray-500" aria-hidden="true" />
              </button>

              {isDropdownOpen && (
                  <div
                      className="sort-dropdown origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                      role="menu"
                  >
                    <div className="py-1">
                      {sortOptions.map(option => (
                          <button
                              key={option}
                              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 w-full text-left"
                              onClick={() => handleSortOptionSelect(option)}
                          >
                            {option}
                          </button>
                      ))}
                    </div>
                  </div>
              )}
            </div>
          </div>

          {/* Product Grid */}
          {currentProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentProducts.map(product => (
                    <Item
                        key={product.id}
                        img={product.img}
                        price={product.price}
                        text={product.title}
                        productId={product.id}
                    />
                ))}
              </div>
          ) : (
              <div className="text-center text-gray-500">No products found.</div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-2 border rounded ${
                            index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                      {index + 1}
                    </button>
                ))}
              </div>
          )}
        </div>
      </div>
  );
};

export default ShoppingPage;
