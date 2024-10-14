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
    darazLink: '', // Add darazLink here
    clickCount: '',
    details: []
  });

  const [detail, setDetail] = useState({ label: '', value: '' });

  useEffect(() => {
    if (product) {
      setFormData({
        ...product,
        img: product.img || '',
        details: product.details || [],
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

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const addDetail = () => {
    if (detail.label && detail.value) {
      setFormData({
        ...formData,
        details: [...formData.details, detail]
      });
      setDetail({ label: '', value: '' }); // Reset detail input fields
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleDetailEdit = (e, index, field) => {
    const updatedDetails = [...formData.details];
    updatedDetails[index][field] = e.target.value;
    setFormData({ ...formData, details: updatedDetails });
  };

  const deleteDetail = (index) => {
    const updatedDetails = formData.details.filter((_, i) => i !== index);
    setFormData({ ...formData, details: updatedDetails });
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

          {/* Add Daraz Link Section */}
          <label className="block mb-2">Daraz Link</label>
          <input
            type="text"
            name="darazLink"
            value={formData.darazLink}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />

          {/* Product Details Section */}
          {/*<div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Add Product Details</h3>
            <div className="flex gap-4 mb-2">
              <input
                type="text"
                name="label"
                value={detail.label}
                onChange={handleDetailChange}
                placeholder="Detail Label"
                className="w-1/2 h-12 p-2 border rounded"
              />
              <input
                type="text"
                name="value"
                value={detail.value}
                onChange={handleDetailChange}
                placeholder="Detail Value"
                className="w-1/2 h-12 p-2 border rounded"
              />
              <button
                type="button"
                onClick={addDetail}
                className="bg-green-500 text-white p-2 rounded"
              >
                Add Detail
              </button>
            </div>
             Display added details
            <ul className="list-disc ml-4">
              {formData.details.map((d, index) => (
                <li key={index}>
                  <strong>{d.label}:</strong> {d.value}
                </li>
              ))}
            </ul>
          </div>*/}
          {/* Product Details Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Add Product Details</h3>
            <div className="flex gap-4 mb-2">
              <input
                  type="text"
                  name="label"
                  value={detail.label}
                  onChange={handleDetailChange}
                  placeholder="Detail Label"
                  className="w-1/2 h-12 p-2 border rounded"
              />
              <input
                  type="text"
                  name="value"
                  value={detail.value}
                  onChange={handleDetailChange}
                  placeholder="Detail Value"
                  className="w-1/2 h-12 p-2 border rounded"
              />
              <button
                  type="button"
                  onClick={addDetail}
                  className="bg-green-500 text-white p-2 rounded"
              >
                Add Detail
              </button>
            </div>
            {/* Display added details as editable fields with delete option */}
            {formData.details.map((d, index) => (
                <div key={index} className="flex gap-4 mb-2 items-center">
                  <input
                      type="text"
                      name={`label-${index}`}
                      value={d.label}
                      onChange={(e) => handleDetailEdit(e, index, 'label')}
                      className="w-1/2 h-12 p-2 border rounded"
                  />
                  <input
                      type="text"
                      name={`value-${index}`}
                      value={d.value}
                      onChange={(e) => handleDetailEdit(e, index, 'value')}
                      className="w-1/2 h-12 p-2 border rounded"
                  />
                  <button
                      type="button"
                      onClick={() => deleteDetail(index)}
                      className="bg-red-500 text-white p-2 rounded"
                  >
                    Delete
                  </button>
                </div>
            ))}
          </div>



          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="ml-4 bg-red-500 text-white p-2 rounded mt-4"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
