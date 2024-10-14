import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ProductForm from '../components/ProductForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Retrieve the token from local storage
  const [productList, setProductList] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const backendUrl = process.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (!token) {
      Swal.fire('Error', 'Unauthorized! Please log in.', 'error').then(() => {
        navigate('/login'); // Redirect to login if no token
      });
    }
  }, [token, navigate]);

  // Return early if there's no token to prevent rendering
  if (!token) return null;


  // Fetch product list on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //const response = await axios.get('http://localhost:8080/api/v1/products');
        const response = await axios.get(`/api/v1/products`);
        console.log('Fetched products:', response.data); // Log the fetched data
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
          const response = await axios.delete(`/api/v1/products/${id}`);
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
    const imageFile = productData.img;
    try {
      await saveProduct(productData, imageFile);
    } catch (error) {
      Swal.fire('Error', 'An error occurred while saving the product!', 'error');
    }
  };

  const saveProduct = async (productData, imageFile) => {
    try {
      let formData = new FormData();
      const { img, ...productWithoutImage } = productData;
      formData.append('product', JSON.stringify(productWithoutImage));
      if (imageFile) {
        formData.append('img', imageFile);
      } else {
        console.error('Image file is required');
        throw new Error('Image file is required');
      }

      let response;

      if (isAddingNew) {
        response = await axios.post(`/api/v1/products`, formData);

        if (response.status === 200) {
          setProductList([...productList, response.data]); // Update the product list
          Swal.fire('Success', 'Product added successfully!', 'success');
        }
      } else {
        console.log(formData);
        
        response = await axios.put(`/api/v1/products/${productData.id}`, formData);
        //response = await axios.put(`http://localhost:8080/api/v1/products/${productData.id}`, formData);

        if (response.status === 200) {
          const updatedList = productList.map((product) =>
            product.id === productData.id ? response.data : product
          );
          setProductList(updatedList);
          Swal.fire('Success', 'Product updated successfully!', 'success');
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      }
      setEditingProduct(null);
      setIsAddingNew(false);
    } catch (error) {
      console.error('Error during save operation:', error);
      Swal.fire('Error', error.message || 'An error occurred while saving the product!', 'error');
    }
  };

  return (
    <div className="admin-page p-6 pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Management</h1>
      <header className="admin-header flex justify-between items-center mb-6">
        <br/>
        <br/>
        <button
            onClick={handleAddNew}
            className="ml-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Add New Product
        </button>
      </header>


      <main>
        {/* Display the product form at the top if editing or adding a new product */}
        {editingProduct || isAddingNew ? (
          <ProductForm
            product={editingProduct}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setEditingProduct(null);
              setIsAddingNew(false);
            }}
          />
        ) : null}

        {/* Product list */}
        <div className="overflow-x-auto mt-6">
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
                productList.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="py-4 px-6">
                      {product.img ? (
                        <img
                          src={product.img}
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
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
};

export default AdminPage;
