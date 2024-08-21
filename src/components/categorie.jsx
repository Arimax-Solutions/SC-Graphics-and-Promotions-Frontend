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
  return (
    <div className="relative p-4">
      <div className="bg-gray-100 w-64 shadow-lg rounded-md">
        <div className="bg-blue-600 text-white text-center py-2 rounded-t-md">
          Browse Categories
        </div>
        <ul className="space-y-2 p-4">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center text-black cursor-pointer hover:bg-gray-200 p-2 rounded-md">
              <span className="mr-2">{category.icon}</span> {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
