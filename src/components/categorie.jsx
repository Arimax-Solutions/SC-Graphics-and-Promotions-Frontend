import React from 'react';
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

  return (
    <div className="relative p-4">
      {isMobile ? (
        <div className="bg-gray-100 w-full shadow-lg rounded-md overflow-x-scroll flex">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-black cursor-pointer hover:bg-gray-200 p-2 min-w-max"
              onClick={() => onCategorySelect(category.name)}
            >
              <span className="mr-2">{category.icon}</span> 
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-100 w-64 shadow-lg rounded-md">
          <div className="bg-blue-600 text-white text-center py-2 rounded-t-md">
            Browse Categories
          </div>
          <ul className="space-y-2 p-4">
            {categories.map((category, index) => (
              <li 
                key={index} 
                className="flex items-center text-black cursor-pointer hover:bg-gray-200 p-2 rounded-md"
                onClick={() => onCategorySelect(category.name)}
              >
                <span className="mr-2">{category.icon}</span> {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
