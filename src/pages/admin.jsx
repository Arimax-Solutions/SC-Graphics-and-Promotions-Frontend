import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
  const [productList, setProductList] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/products');
        setProductList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsAddingNew(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/products/${id}`);
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
      if (productData.img && productData.img instanceof File) {
        const reader = new FileReader();
        reader.onloadend = async () => {
          productData.img = reader.result;
          await saveProduct(productData);
        };
        reader.readAsDataURL(productData.img);
      } else {
        await saveProduct(productData);
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const saveProduct = async (productData) => {
    let response;
    try {
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
    <div className="admin-page p-6 pt-24">
      <header className="admin-header flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <button
  onClick={handleAddNew}
  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
>
  Add New Product
</button>

      </header>

      <main>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left font-medium text-gray-600">Product Image</th>
                <th className="py-3 px-6 text-left font-medium text-gray-600">Product Name</th>
                <th className="py-3 px-6 text-left font-medium text-gray-600">Category</th>
                <th className="py-3 px-6 text-left font-medium text-gray-600">Price</th>
                <th className="py-3 px-6 text-left font-medium text-gray-600">Description</th>
                <th className="py-3 px-6 text-left font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {productList.map(product => (
                <tr key={product.id} className="hover:bg-gray-50 border-b border-gray-200">
                  <td className="py-4 px-6">
                    <img src={`data:image/jpeg;base64,${product.img}`} alt={product.title} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="py-4 px-6 font-medium">{product.title}</td>
                  <td className="py-4 px-6 font-medium">{product.category || 'N/A'}</td>
                  <td className="py-4 px-6 font-medium">LKR {product.price}</td>
                  <td className="py-4 px-6 font-medium">{product.description || 'No description'}</td>
                  <td className="py-4 px-6 flex space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-transparent p-1 hover:bg-gray-100 rounded"
                    >
                      <FontAwesomeIcon icon={faPen} className="text-blue-500" />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-transparent p-1 hover:bg-gray-100 rounded"
                    >
                      <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {(editingProduct || isAddingNew) && (
          <ProductForm
            product={editingProduct}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setEditingProduct(null);
              setIsAddingNew(false);
            }}
          />
        )}
      </main>
    </div>
  );
};

export default AdminPage;
