import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { products } from '../data/product';

const AdminPage = () => {
  const [productList, setProductList] = useState(Object.values(products));
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsAddingNew(false);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/products/${id}`);
      console.log(response)
      const updatedList = productList.filter(product => product.id !== id);
      setProductList(updatedList);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setIsAddingNew(true);
  };

  const handleFormSubmit = async (productData) => {
    try {
      let response;
      if (isAddingNew) {
        response = await axios.post('http://localhost:8080/api/v1/products', productData);
        setProductList([...productList, response.data]);
      } else {
        response = await axios.put(`http://localhost:8080/api/v1/products/${productData.id}`, productData);
        const updatedList = productList.map(product =>
            product.id === productData.id ? response.data : product
        );
        setProductList(updatedList);
      }
      setEditingProduct(null);
      setIsAddingNew(false);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
      <div className="admin-page p-6">
        <header className="admin-header flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Product Management</h1>
          <button
              onClick={handleAddNew}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add New Product
          </button>
        </header>

        <main>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
            <tr>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
            </thead>
            <tbody>
            {productList.map(product => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">
                    <img src={product.img} alt={product.title} className="w-16 h-16 object-cover" />
                  </td>
                  <td className="py-2 px-4 border-b">{product.title}</td>
                  <td className="py-2 px-4 border-b">{product.price}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                        onClick={() => handleEdit(product)}
                        className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-500 hover:underline ml-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>

          {(editingProduct || isAddingNew) && (
              <ProductForm
                  product={editingProduct}
                  onSubmit={handleFormSubmit}
                  onCancel={() => setEditingProduct(null)}
              />
          )}
        </main>
      </div>
  );
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
      }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  return (
      <div className="product-form mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{product ? 'Edit Product' : 'Add New Product'}</h2>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
          <label className="block mb-2">
            Image URL:
            <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
            />
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

export default AdminPage;
