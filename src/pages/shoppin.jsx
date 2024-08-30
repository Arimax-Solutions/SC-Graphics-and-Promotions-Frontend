import React, { useState } from 'react';
import { products } from '../data/product';
import Item from '../components/item';
import CategoryMenu from '../components/categorie';
import { BsChevronDown } from 'react-icons/bs';

const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest Arrivals"];
const itemsPerPage = 16; // items per page

const ShoppingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); //  pagination

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleSortOptionSelect = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
    setCurrentPage(1); // Reset to first page when sort option changes
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredProducts = Object.values(products).filter(product => 
    selectedCategory === "All" || product.title.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Price: Low to High") return parseFloat(a.price.replace('Rs. ', '')) - parseFloat(b.price.replace('Rs. ', ''));
    if (sortOption === "Price: High to Low") return parseFloat(b.price.replace('Rs. ', '')) - parseFloat(a.price.replace('Rs. ', ''));
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 pt-24 bg-gray-100 min-h-screen flex">
      {/* Category Menu */}
      <div className="w-1/4">
        <CategoryMenu onCategorySelect={handleCategorySelect} />
      </div>

      {/* Main Content */}
      <div className="w-3/4 pl-6">
        <div className="flex justify-between items-center mb-8">
          {/* Sort Options */}
          <div className="relative inline-block text-left ml-auto">
            <div>
              <button
                onClick={toggleDropdown}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Sort By
                <BsChevronDown className="ml-2 -mr-1 h-5 w-5 text-gray-500" aria-hidden="true" />
              </button>
            </div>

            {isDropdownOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  {sortOptions.map(option => (
                    <a
                      key={option}
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600"
                      role="menuitem"
                      onClick={() => handleSortOptionSelect(option)}
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 border rounded ${
                index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
