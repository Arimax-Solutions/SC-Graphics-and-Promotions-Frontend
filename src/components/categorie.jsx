import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const categories = [
  { 
    name: 'Laser Works', 
    icon: '🔬',
    subcategories: ['Laser Cutting', 'Laser Engraving', 'Laser Marking'] 
  },
  { 
    name: 'Key Tags', 
    icon: '🔖', 
    subcategories: [
      { name: 'Wooden', options: ['Customized Key tags', 'Unique Key tags'] },
      { name: 'Acrylic', options: ['Customized Key tags', 'Unique Key tags'] }
    ]
  },
  { 
    name: 'Magnet Tags', 
    icon: '🧲', 
    subcategories: ['Customized Key tags', 'Unique Key tags'] 
  },
  { 
    name: 'Name Boards', 
    icon: '📛', 
    subcategories: [
      { name: 'Interior Name Boards', options: ['Treated Mahogany Wood', 'MDF Board', 'Eco Board'] },
      { name: 'Exterior Name Boards', options: ['Treated Mahogany Wood', 'Eco Board'] }
    ]
  },
  { 
    name: 'Gift Items', 
    icon: '🎁', 
    subcategories: ['Photo Frames', 'Mugs'] 
  },
  { 
    name: 'Customized Items', 
    icon: '✂️', 
    subcategories: ['Wedding Cards', 'Ornaments'] 
  },
  { 
    name: 'Trophy', 
    icon: '🏆', 
    subcategories: ['Wooden Trophy', 'Brass Trophy', 'Acrylic Trophy'] 
  }
];

const CategoryMenu = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category); // Toggle subcategories
  };

  return (
    <div className="relative p-4">
      {isMobile ? (
        <div className="bg-gray-100 w-full shadow-lg rounded-md overflow-x-scroll flex">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-black cursor-pointer hover:bg-gray-200 p-2 min-w-max"
              onClick={() => handleCategoryClick(category.name)}
            >
              <span className="mr-2">{category.icon}</span> 
              <span>{category.name}</span>
              {/* Display subcategories */}
              {activeCategory === category.name && category.subcategories && (
                <ul className="mt-2 p-2 w-full text-left">
                  {category.subcategories.map((subcat, subindex) => 
                    typeof subcat === 'string' ? (
                      <li key={subindex} className="text-sm hover:text-blue-500 p-2 rounded-md">
                        {subcat}
                      </li>
                    ) : (
                      <li key={subindex} className="text-sm mt-2">
                        <span className="font-semibold">{subcat.name}</span>
                        <ul className="ml-4 mt-2">
                          {subcat.options.map((option, optIndex) => (
                            <li key={optIndex} className="hover:text-blue-500 p-2 rounded-md">
                              {option}
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              )}
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
                className="flex flex-col text-black cursor-pointer hover:bg-gray-200 p-2 rounded-md"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center">
                    <span className="mr-2">{category.icon}</span> 
                    <span>{category.name}</span>
                  </span>
                  {category.subcategories && (
                    <span 
                      className={`ml-2 transform transition-transform duration-300 ${
                        activeCategory === category.name ? 'rotate-90' : ''
                      }`}
                    >
                      ▶
                    </span>
                  )}
                </div>
                {activeCategory === category.name && category.subcategories && (
                  <ul className="mt-2 p-2">
                    {category.subcategories.map((subcat, subindex) => 
                      typeof subcat === 'string' ? (
                        <li key={subindex} className="text-sm hover:text-blue-500 p-2 rounded-md">
                          {subcat}
                        </li>
                      ) : (
                        <li key={subindex} className="text-sm mt-2">
                          <span className="font-semibold">{subcat.name}</span>
                          <ul className="ml-4 mt-2">
                            {subcat.options.map((option, optIndex) => (
                              <li key={optIndex} className="hover:text-blue-500 p-2 rounded-md">
                                {option}
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
      )}
    </div>
  );
};

export default CategoryMenu;
