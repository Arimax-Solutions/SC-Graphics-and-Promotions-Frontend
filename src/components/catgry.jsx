import React from 'react';

// Sample data for categories
const categories = [
  {
    name: 'Promotional Pens Printing',
  },
  {
    name: 'Event Promotions',

  },
  {
    name: 'Customized Wristbands',
  },
  {
    name: 'Notebook Diary Organizer Printing',
  },
  {
    name: 'Business Stationery',
  },
  {
    name: 'Customized Bags',

  },
  {
    name: 'Tags and Labels Printing',
  },
  {
    name: 'Promotional Cap and Visor',
  },
  {
    name: 'Sunshades Printing',
  },
  {
    name: 'Lapel Cufflink Name Badge Printing',
  },
  {
    name: 'Food Packing',
  },
  {
    name: 'Trophies Plaques Medals and Awards',
  },
];

const BrowseCategories = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-4">Browse Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="mb-2">
            <div className="flex justify-between items-center">
              <span>{category.name}</span>
              {category.subcategories && (
                <span className="text-gray-500 text-sm">▼</span>
              )}
            </div>
            {category.subcategories && (
              <ul className="pl-4 mt-2 text-sm text-gray-600">
                {category.subcategories.map((subcategory, subIndex) => (
                  <li key={subIndex} className="mb-1">
                    {subcategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseCategories;
