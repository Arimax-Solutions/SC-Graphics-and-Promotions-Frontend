import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const categories = [
  { name: 'All', icon: '🛒' },
  { name: 'Kitchen Organizers', icon: '🧑‍🍳' },
  { name: 'Unisex\'s Key Holders', icon: '🔑' },
  { name: 'Phone Docks & Stands', icon: '📱' },
  { name: 'Unisex Fashion Earrings', icon: '🧝‍♂️' },
  { name: 'Stators', icon: '' },
  { name: 'Home Improvement & Lighting', icon: '🔧' },
  { name: 'Home Appliances', icon: '🏠' },
  { name: 'Automotive & Motorcycle', icon: '🚗' },
  { name: 'Luggages & Bags', icon: '🧳' },
  { name: 'Shoes', icon: '👟' },
  { name: 'Special Occasion Costume', icon: '🎭' },
  { name: 'Women\'s Clothing', icon: '👗' }
];

const CategoryMenu = ({ onCategorySelect }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    onCategorySelect(categoryName);
  };

  return (
    <div className="relative p-4">
      {isMobile ? (
        // Mobile Layout
        <div className="bg-white shadow-lg rounded-lg flex overflow-x-scroll space-x-4 p-3">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-center text-gray-800 cursor-pointer transition duration-200 ease-in-out transform p-2 rounded-full whitespace-nowrap ${
                selectedCategory === category.name ? 'bg-blue-500 text-white' : 'hover:scale-105 hover:bg-gray-200'
              }`}
              onClick={() => handleCategorySelect(category.name)}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm font-medium ml-2">{category.name}</span>
            </div>
          ))}
        </div>
      ) : (
        // Desktop Layout
        <div className="bg-white shadow-lg rounded-lg p-3 w-64">
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li 
                key={index} 
                className={`flex items-center text-gray-800 cursor-pointer transition duration-200 ease-in-out transform p-2 rounded-md ${
                  selectedCategory === category.name ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleCategorySelect(category.name)}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="text-sm font-medium ml-3">{category.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
