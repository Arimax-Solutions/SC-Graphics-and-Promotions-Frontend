import React, { useState } from 'react';

const categories = [
  { name: 'Home & Garden', icon: '🏡' },
  { name: 'Hair Extensions & Wigs', icon: '💇‍♀️' },
  { name: 'Men\'s Clothing', icon: '👕' },
  { name: 'Accessories', icon: '👜' },
  { name: 'Consumer Electronics', icon: '📱' },
  { name: 'Home Improvement & Lighting', icon: '🔧' },
  { name: 'Home Appliances', icon: '🏠' },
  { name: 'Automotive & Motorcycle', icon: '🚗' },
  { name: 'Luggages & Bags', icon: '🧳' },
  { name: 'Shoes', icon: '👟' },
  { name: 'Special Occasion Costume', icon: '🎭' },
  { name: 'Women\'s Clothing', icon: '👗' }
  // Add more categories as needed
];

const CategoryMenu = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative p-4">
      <button
        onClick={toggleVisibility}
        className="bg-gray-700 text-white px-4 py-2 rounded-full cursor-pointer"
      >
        {isVisible ? 'ALL Categories' : 'ALL Categories'}
      </button>

      <div
        className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md transition-all duration-300 ${
          isVisible ? 'block' : 'hidden'
        }`}
      >
        <ul className="space-y-2 p-4">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center cursor-pointer hover:bg-gray-200 p-2 rounded-md">
              <span className="mr-2">{category.icon}</span> {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
