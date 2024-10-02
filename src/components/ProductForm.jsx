import React, { useState, useEffect } from 'react';

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
  const [formData, setFormData] = useState({
    id: '',
    img: '',
    title: '',
    price: '',
    description: '',
    category: '',
    subcategory: '',
    darazLink: '',
    clickCount: ''
  });

  useEffect(() => {
    if (product) {
      setFormData({
        ...product,
        img: product.img || '', // Ensure img is set correctly if present
      });
    }
  }, [product]);

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
        {/* Show either the uploaded image preview or the existing product image */}
        {formData.img && (
          <div className="mt-4">
            {formData.img instanceof File ? (
              <img
                src={URL.createObjectURL(formData.img)} 
                alt="Preview"
                className="w-full h-auto"
              />
            ) : (
              <img
                src={formData.img} // Assuming img is a URL if not a File
                alt="Preview"
                className="w-full h-auto"
              />
            )}
          </div>
        )}
      </div>
      <div className="w-1/2 p-4">
        <form onSubmit={handleFormSubmit}>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          
          <label className="block mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          
          <label className="block mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleCategoryChange}
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          
          {formData.category && categories[formData.category] && (
            <>
              <label className="block mb-2">Subcategory</label>
              <select
                name="subcategory"
                value={formData.subcategory}
                onChange={handleSubCategoryChange}
                className="w-full mb-4 p-2 border rounded"
              >
                <option value="">Select Subcategory</option>
                {categories[formData.category].map((subcategory, index) => (
                  <option key={index} value={subcategory}>{subcategory}</option>
                ))}
              </select>
            </>
          )}

          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="ml-4 bg-red-500 text-white p-2 rounded"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
