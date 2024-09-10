import React, { useState } from 'react';

// Mock data for categories and subcategories
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
      details: [],
      category: '',
      subcategory: '' // Ensure this is included
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
    });
  };

  const handleSubCategoryChange = (e) => {
  const selectedSubCategory = e.target.value;
  setFormData({
    ...formData,
    subcategory: selectedSubCategory
  });
};

  const handleSubcategoryChange = (e) => {
    setFormData({ ...formData, subcategory: e.target.value });
  };

  const handleDetailChange = (index, key, value) => {
    const newDetails = [...formData.details];
    newDetails[index][key] = value;
    setFormData({ ...formData, details: newDetails });
  };

  const handleAddDetail = () => {
    setFormData({
      ...formData,
      details: [...formData.details, { label: '', value: '' }],
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit(formData);
  };

  return (
    <div className="product-form mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{product ? 'Edit Product' : 'Add New Product'}</h2>
      <form onSubmit={handleFormSubmit}>
        <label className="block mb-2">
          Image:
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full p-2 border border-gray-300 rounded-lg"
            accept="image/*"
          />
          {formData.img && typeof formData.img === 'string' && (
          <div>
            <img
              src={`data:image/jpeg;base64,${formData.img}`}
              alt="Preview"
              className="w-32 h-32 object-cover mt-2"
            />
          </div>
        )}
        </label>
        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </label>
        <label className="block mb-2">
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </label>
        <label className="block mb-2">
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </label>

        {/* Category Selection */}
        <label className="block mb-2">
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        {/* Subcategory Selection */}
        {formData.category && (
          <label className="block mb-2">
            Subcategory:
            <select
              name="subcategory"
              value={formData.subcategory}
              onChange={handleSubCategoryChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Subcategory</option>
              {categories[formData.category].map((subcategory, index) => (
                <option key={index} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </label>
        )}

        {/* Details Section */}
        <div className="details-section mt-4">
          <h3 className="text-lg font-medium mb-2">Details</h3>
          {formData.details.map((detail, index) => (
            <div key={index} className="flex justify-between mb-2">
              <input
                type="text"
                value={detail.label}
                onChange={(e) => handleDetailChange(index, 'label', e.target.value)}
                placeholder="Label"
                className="w-1/2 p-2 border border-gray-300 rounded-lg mr-2"
              />
              <input
                type="text"
                value={detail.value}
                onChange={(e) => handleDetailChange(index, 'value', e.target.value)}
                placeholder="Value"
                className="w-1/2 p-2 border border-gray-300 rounded-lg"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddDetail}
            className="mt-2 text-blue-500 hover:underline"
          >
            Add Detail
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
