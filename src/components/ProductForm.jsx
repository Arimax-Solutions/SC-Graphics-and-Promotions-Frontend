import React, { useState } from 'react';

// Categories and subcategories
const categories = {
  "Laser Works": ["Laser Cutting", "Laser Engraving", "Laser Marking"],
  "Key Tags": ["Wooden", "Acrylic"],
  "Magnet Tags": ["Customized Key tags", "Unique Key tags"],
  "Name Boards": ["Interior Name Boards", "Exterior Name Boards"],
  "Gift Items": ["Photo Frames", "Mugs"],
  "Customized Items": ["Wedding Cards", "Ornaments"],
  "Trophy": ["Wooden Trophy", "Brass Trophy", "Acrylic Trophy"]
};

const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(
      product || {
        id: '',
        img: '',
        title: '',
        price: '',
        description: '',
        category: '',
        subcategory: '',
        darazLink: ''
      }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({
      ...formData,
      category: selectedCategory,
      subcategory: '', // Reset subcategory when category changes
    });
  };

  const handleSubCategoryChange = (e) => {
    const selectedSubCategory = e.target.value;
    setFormData({
      ...formData,
      subcategory: selectedSubCategory
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, img: file }); // Store the file directly
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
      <div className="product-form mt-8 p-6 bg-white rounded-lg shadow-xl flex">
        <div className="w-1/2 p-4 border-r">
          <h3 className="text-lg font-semibold mb-4">Upload Image</h3>
          <input
              type="file"
              onChange={handleImageUpload}
              className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg p-2"
              accept="image/*"
          />
          {formData.img && (
              <div className="mt-4">
                <img
                    src={URL.createObjectURL(formData.img)} // Create an object URL for preview
                    alt="Preview"
                    className="w-full h-auto rounded-lg"
                />
              </div>
          )}
        </div>
        <div className="w-1/2 p-4">
          <h3 className="text-lg font-semibold mb-4">{product ? 'Edit Product' : 'Add New Product'}</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
            <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Daraz Selling Link:</label>
            <input
                type="text"
                name="darazLink"
                value={formData.darazLink}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-200 rounded-lg"
                rows="4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
            <select
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
                className="w-full p-2 border border-gray-200 rounded-lg"
            >
              <option value="">Select Category</option>
              {Object.keys(categories).map((category, index) => (
                  <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          {formData.category && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Subcategory:</label>
                <select
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleSubCategoryChange}
                    className="w-full p-2 border border-gray-200 rounded-lg"
                >
                  <option value="">Select Subcategory</option>
                  {categories[formData.category].map((subcategory, index) => (
                      <option key={index} value={subcategory}>{subcategory}</option>
                  ))}
                </select>
              </div>
          )}
          <div className="flex justify-end mt-6">
            <button
                type="button"
                onClick={onCancel}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-700 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
            <button
                type="submit"
                onClick={handleFormSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              Save
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProductForm;
