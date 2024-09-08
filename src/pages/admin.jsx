import React, { useState } from 'react';
import axios from 'axios'; 
import { products } from '../data/product';
import ProductForm from '../components/ProductForm'; 

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
      <div className="admin-page p-6 pt-24">
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

export default AdminPage;
