import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function AdminTable() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Retrieve the token from local storage
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    username: '',
    email: '',
    contactNumber: '',
    password: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

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
  const fetchUsers = async () => {
    try {
      //const response = await fetch('http://localhost:8080/auth');
      const response = await fetch(`${backendUrl}/auth`);
      const result = await response.json();
      if (result.status === 200) {
        setAdmins(result.data);
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRowClick = (admin) => {
    setNewAdmin({
      name: admin.name,
      username: admin.username,
      email: admin.email,
      contactNumber: admin.contact_number,
      password: admin.password,
    });
  };

  const handleViewClick = (admin) => {
    setSelectedAdmin(admin);
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adminToSave = {
      name: newAdmin.name,
      username: newAdmin.username,
      email: newAdmin.email,
      contact_number: newAdmin.contactNumber,
      password: newAdmin.password,
      role: 'ADMIN',
      is_deleted: 'false',
    };

    try {
      const response = await fetch(`${backendUrl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminToSave),
      });

      if (!response.ok) {
        await Swal.fire('Failure', 'Failed to register admin!', 'error');
      }

      const result = await response.json();
      console.log('Admin registered successfully:', result);
      await Swal.fire('Success', 'Admin registered successfully!', 'success');
      fetchUsers();
    } catch (error) {
      console.error('Error registering admin:', error);
    }
  };



  // Modal Component
  const Modal = () => {
    if (!isModalOpen) return null;

    const handleUpdate = async () => {
      const adminToUpdate = {
        name: selectedAdmin.name,
        username: selectedAdmin.username,
        email: selectedAdmin.email,
        contact_number: selectedAdmin.contact_number,
        password: selectedAdmin.password,
        role: 'ADMIN',
        is_deleted: 'false',
      };

      try {
        const response = await fetch(`${backendUrl}/auth/${selectedAdmin.user_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adminToUpdate),
        });

        if (!response.ok) {
          await Swal.fire('Failure', 'Failed to update admin!', 'error');
        }

        const result = await response.json();
        await Swal.fire('Success', 'Admin updated successfully!', 'success');
        fetchUsers();
        setIsModalOpen(false);
        // Optionally, refresh the admin list or update state
      } catch (error) {
        console.error('Error updating admin:', error);
      }
    };

    const handleDelete = async () => {
      const { isConfirmed } = await Swal.fire({
        title: 'Are you sure?',
        text: 'Do you really want to delete this admin?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
      });

      if (!isConfirmed) return;
      fetchUsers();

      try {
        const response = await fetch(`${backendUrl}/auth/${selectedAdmin.user_id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete admin');
        }

        const result = await response.json();
        await Swal.fire('Success', 'Admin deleted successfully', 'success');
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error deleting admin:', error);
        await Swal.fire('Error', 'There was an error deleting the admin', 'error');
      }
    };


    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300 ease-out">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto p-6 relative animate-fadeInUp">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Admin Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                value={selectedAdmin.name}
                onChange={(e) => setSelectedAdmin({ ...selectedAdmin, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Username</label>
              <input
                type="text"
                value={selectedAdmin.username}
                onChange={(e) => setSelectedAdmin({ ...selectedAdmin, username: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                value={selectedAdmin.email}
                onChange={(e) => setSelectedAdmin({ ...selectedAdmin, email: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Contact Number</label>
              <input
                type="text"
                value={selectedAdmin.contact_number}
                onChange={(e) => setSelectedAdmin({ ...selectedAdmin, contact_number: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                placeholder="Enter contact number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                value={selectedAdmin.password}
                onChange={(e) => setSelectedAdmin({ ...selectedAdmin, password: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={handleUpdate}
              className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
            >
              Delete
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors duration-200"
            >
              Close
            </button>
          </div>
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Management</h1>
      <header className="admin-header flex justify-between items-center mb-6">
        <br/>
        <button
            onClick={() => setIsFormVisible(!isFormVisible)} // Toggle form visibility
            className="ml-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Add New User
        </button>
      </header>

      {isFormVisible && (
          <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl mx-auto mt-4">
            <h2 className="text-xl font-bold mb-6 text-center">Add New Admin</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
                  <input
                      id="name"
                      name="name"
                      type="text"
                      value={newAdmin.name}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter full name"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
                  <input
                      id="username"
                      name="username"
                      type="text"
                      value={newAdmin.username}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter username"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={newAdmin.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="contactNumber">Contact Number</label>
                <input
                    id="contactNumber"
                    name="contactNumber"
                    type="text"
                    value={newAdmin.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter contact number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={newAdmin.password}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter password"
                />
              </div>
              <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Add Admin
              </button>
            </form>
          </div>
      )}
      <br/>
      <br/>

      {/* User list */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {admins.length > 0 ? (
              admins.map((admin) => (
                  <tr key={admin.user_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{admin.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{admin.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{admin.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{admin.contact_number}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button onClick={() => handleViewClick(admin)} className="text-blue-600 hover:text-blue-900">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </td>
                  </tr>
              ))
          ) : (
              <tr>
                <td colSpan="4" className="py-4 px-6 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
          )}
          </tbody>
        </table>
      </div>


      {/*{isFormVisible && (
          <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl mx-auto mt-4">
            <h2 className="text-xl font-bold mb-6 text-center">Add New Admin</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
                  <input
                      id="name"
                      name="name"
                      type="text"
                      value={newAdmin.name}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter full name"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
                  <input
                      id="username"
                      name="username"
                      type="text"
                      value={newAdmin.username}
                      onChange={handleChange}
                      required
                      className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter username"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={newAdmin.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="contactNumber">Contact Number</label>
                <input
                    id="contactNumber"
                    name="contactNumber"
                    type="text"
                    value={newAdmin.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter contact number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={newAdmin.password}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter password"
                />
              </div>
              <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Add Admin
              </button>
            </form>
          </div>
      )}*/}
      <br/>
      <br/>
      <Modal />
    </div>
  );
}

export default AdminTable;
