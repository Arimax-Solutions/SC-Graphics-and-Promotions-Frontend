import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const categories = [
  { name: 'Laser Works' },
  { name: 'Key Tags' },
  { name: 'Magnet Tags' },
  { name: 'Name Boards' },
  { name: 'Gift Items' },
  { name: 'Customized Items' },
  { name: 'Trophy' },
];

const subcategories = {
  'Laser Works': [],
  'Key Tags': [],
  'Magnet Tags': [],
  'Name Boards': [],
  'Gift Items': [],
  'Customized Items': [],
  Trophy: [],
};

const CategoryMenu = ({ onCategorySelect }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory(null); // Reset subcategory when selecting a new category
    onCategorySelect(categoryName); // Notify parent component (ShoppingPage)
  };

  const handleSubcategorySelect = (subcategoryName) => {
    setSelectedSubcategory(subcategoryName);
    onCategorySelect(subcategoryName); // Notify parent component (ShoppingPage) of subcategory
  };

  return (
      <div className="relative p-6">
        {isMobile ? (
            <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
              <div
                  className={`min-w-[120px] bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg p-4 text-white font-semibold text-sm cursor-pointer transition-all transform hover:scale-105 ${
                      selectedCategory === 'All Categories' ? 'ring-2 ring-blue-300' : ''
                  }`}
                  onClick={() => handleCategorySelect('All Categories')}
              >
                All Categories
              </div>
              {categories.map((category, index) => (
                  <div
                      key={index}
                      className={`min-w-[120px] bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 text-white font-semibold text-sm cursor-pointer transition-all transform hover:scale-105 ${
                          selectedCategory === category.name ? 'ring-2 ring-blue-300' : ''
                      }`}
                      onClick={() => handleCategorySelect(category.name)}
                  >
                    {category.name}
                  </div>
              ))}
            </div>
        ) : (
            <div className="flex">
              <div className="bg-white shadow-md rounded-lg p-6 w-64">
                <ul className="space-y-4">
                  <li>
                    <div
                        className={`text-gray-800 cursor-pointer transition-all duration-300 p-3 rounded-lg hover:bg-gradient-to-r from-gray-400 to-gray-600 hover:text-white ${
                            selectedCategory === 'All Categories' ? 'bg-gray-600 text-white' : ''
                        }`}
                        onClick={() => handleCategorySelect('All Categories')}
                    >
                      All Categories
                    </div>
                  </li>
                  {categories.map((category, index) => (
                      <li key={index}>
                        <div
                            className={`text-gray-800 cursor-pointer transition-all duration-300 p-3 rounded-lg hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white ${
                                selectedCategory === category.name ? 'bg-blue-500 text-white' : ''
                            }`}
                            onClick={() => handleCategorySelect(category.name)}
                        >
                          {category.name}
                        </div>
                        {selectedCategory === category.name && subcategories[category.name] && (
                            <ul className="ml-6 mt-3 space-y-2">
                              {subcategories[category.name].map((subcategory, subIndex) =>
                                  typeof subcategory === 'string' ? (
                                      <li
                                          key={subIndex}
                                          className={`text-gray-600 text-sm cursor-pointer transition duration-300 hover:text-blue-500 ${
                                              selectedSubcategory === subcategory ? 'text-blue-500 font-bold' : ''
                                          }`}
                                          onClick={() => handleSubcategorySelect(subcategory)}
                                      >
                                        {subcategory}
                                      </li>
                                  ) : (
                                      <li key={subIndex}>
                                        <div className="font-bold text-gray-800 text-sm">
                                          {subcategory.name}
                                        </div>
                                        <ul className="ml-4 space-y-1">
                                          {subcategory.subcategories.map((subsub, subsubIndex) => (
                                              <li
                                                  key={subsubIndex}
                                                  className={`text-gray-600 text-sm cursor-pointer transition duration-300 hover:text-blue-500 ${
                                                      selectedSubcategory === subsub ? 'text-blue-500 font-bold' : ''
                                                  }`}
                                                  onClick={() => handleSubcategorySelect(subsub)}
                                              >
                                                {subsub}
                                              </li>
                                          ))}
                                        </ul>
                                      </li>
                                  )
                              )}
                            </ul>
                        )}
                      </li>
                  ))}
                </ul>
              </div>
            </div>
        )}
      </div>
  );
};

export default CategoryMenu;
