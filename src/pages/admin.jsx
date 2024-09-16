import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ProductForm from '../components/ProductForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
  const [productList, setProductList] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Fetch product list on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/products');
        setProductList(response.data);
      } catch (error) {
        Swal.fire('Error', 'Error fetching products!', 'error');
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Edit product handler
  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsAddingNew(false);
  };

  // Delete product handler
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this product!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://localhost:8080/api/v1/products/${id}`);
          if (response.status === 204) {
            setProductList(productList.filter((product) => product.id !== id));
            Swal.fire('Deleted!', 'Product has been deleted.', 'success');
          } else {
            Swal.fire('Error', 'Failed to delete product!', 'error');
          }
        } catch (error) {
          Swal.fire('Error', 'An error occurred while deleting the product!', 'error');
        }
      }
    });
  };

  // Add new product handler
  const handleAddNew = () => {
    setEditingProduct(null);
    setIsAddingNew(true);
  };

  // Handle form submission (create or update product)
  const handleFormSubmit = async (productData) => {
    try {
      // If there's an image file, convert it to base64
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
      Swal.fire('Error', 'An error occurred while saving the product!', 'error');
    }
  };

  // Save product (create or update)
  const saveProduct = async (productData) => {
    try {
      let response;

      if (isAddingNew) {
        response = await axios.post('http://localhost:8080/api/v1/products', productData);
        if (response.status === 200) {
          setProductList([...productList, response.data.data]);
          Swal.fire('Success', 'Product added successfully!', 'success');
        }
      } else {
        response = await axios.put(`http://localhost:8080/api/v1/products/${productData.id}`, productData);
        if (response.status === 200) {
          const updatedList = productList.map((product) =>
            product.id === productData.id ? response.data.data : product
          );
          setProductList(updatedList);
          Swal.fire('Success', 'Product updated successfully!', 'success');
        }
      }

      // Reset state after successful operation
      setEditingProduct(null);
      setIsAddingNew(false);
    } catch (error) {
      Swal.fire('Error', 'An error occurred while saving the product!', 'error');
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
                <th className="py-3 px-6">Product Image</th>
                <th className="py-3 px-6">Product Name</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Description</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              {productList.length > 0 ? (
                productList.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="py-4 px-6">
                      {product.img ? (
                        <img
                          src={`data:image/jpeg;base64,${product.img}`}
                          alt={product.title || 'Product Image'}
                          className="w-16 h-16 object-cover rounded"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded">
                          No Image
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">{product.title || 'Untitled'}</td>
                    <td className="py-4 px-6">{product.category || 'N/A'}</td>
                    <td className="py-4 px-6">LKR {product.price || '0.00'}</td>
                    <td className="py-4 px-6">{product.description || 'No description'}</td>
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
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 px-6 text-center">
                    No products found
                  </td>
                </tr>
              )}
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
