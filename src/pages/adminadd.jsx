import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

function AdminTable() {
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
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminToSave),
      });

      if (!response.ok) {
        throw new Error('Failed to register admin');
      }

      const result = await response.json();
      console.log('Admin registered successfully:', result);
      alert('Admin registered successfully');
    } catch (error) {
      console.error('Error registering admin:', error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/auth');
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

    fetchUsers();
  }, []);

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
        const response = await fetch(`http://localhost:8080/auth/${selectedAdmin.user_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(adminToUpdate),
        });

        if (!response.ok) {
          throw new Error('Failed to update admin');
        }

        const result = await response.json();
        console.log('Admin updated successfully:', result);
        alert('Admin updated successfully');
        setIsModalOpen(false);
        // Optionally, refresh the admin list or update state
      } catch (error) {
        console.error('Error updating admin:', error);
      }
    };

    const handleDelete = async () => {
      if (!window.confirm('Are you sure you want to delete this admin?')) return;

      try {
        const response = await fetch(`http://localhost:8080/auth/${selectedAdmin.user_id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete admin');
        }

        const result = await response.json();
        console.log('Admin deleted successfully:', result);
        alert('Admin deleted successfully');
        setIsModalOpen(false);
        // Optionally, refresh the admin list or update state
      } catch (error) {
        console.error('Error deleting admin:', error);
      }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Admin Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    value={selectedAdmin.name}
                    onChange={(e) => setSelectedAdmin({ ...selectedAdmin, name: e.target.value })}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                    placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                    type="text"
                    value={selectedAdmin.username}
                    onChange={(e) => setSelectedAdmin({ ...selectedAdmin, username: e.target.value })}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                    placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={selectedAdmin.email}
                    onChange={(e) => setSelectedAdmin({ ...selectedAdmin, email: e.target.value })}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                    placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                    type="text"
                    value={selectedAdmin.contact_number}
                    onChange={(e) => setSelectedAdmin({ ...selectedAdmin, contact_number: e.target.value })}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                    placeholder="Enter contact number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                    type="password"
                    value={selectedAdmin.password}
                    onChange={(e) => setSelectedAdmin({ ...selectedAdmin, password: e.target.value })}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                    placeholder="Enter password"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={handleUpdate} className="py-2 px-4 bg-green-600 text-white rounded-md">
                Update
              </button>
              <button onClick={handleDelete} className="py-2 px-4 bg-red-600 text-white rounded-md">
                Delete
              </button>
              <button onClick={() => setIsModalOpen(false)} className="py-2 px-4 bg-indigo-600 text-white rounded-md">
                Close
              </button>
            </div>
          </div>
        </div>
    );
  };

  return (
      <div className="container mx-auto pt-24">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Management</h1>

        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl mx-auto">
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
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter username"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={newAdmin.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter email"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700" htmlFor="contactNumber">Contact Number</label>
                <input
                    id="contactNumber"
                    name="contactNumber"
                    type="text"
                    value={newAdmin.contactNumber}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter contact number"
                />
              </div>
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
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter password"
              />
            </div>

            <div className="mt-6">
              <button
                  type="submit"
                  className="w-full py-3 px-4 bg-indigo-600 text-white font-medium text-lg rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Admin
              </button>
            </div>
          </form>
        </div>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mb-8">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">Name</th>
              <th scope="col" className="py-3 px-6">Username</th>
              <th scope="col" className="py-3 px-6">Email</th>
              <th scope="col" className="py-3 px-6">Contact Number</th>
              <th scope="col" className="py-3 px-6">Role</th>
              <th scope="col" className="py-3 px-6">Action</th>
            </tr>
            </thead>
            <tbody>
            {admins.length > 0 ? (
                admins.map((admin) => (
                    <tr key={admin.user_id} className="bg-white border-b cursor-pointer">
                      <td className="py-4 px-6">{admin.name}</td>
                      <td className="py-4 px-6">{admin.username}</td>
                      <td className="py-4 px-6">{admin.email}</td>
                      <td className="py-4 px-6">{admin.contact_number}</td>
                      <td className="py-4 px-6">{admin.role}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-4">
                          <button onClick={() => handleViewClick(admin)} className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faEye} className="w-5 h-5" />
                          </button>
                          {/*<button className="text-green-500 hover:text-green-700">
                            <FontAwesomeIcon icon={faPen} className="w-5 h-5" />
                          </button>
                          <button className="text-red-500 hover:text-red-700">
                            <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                          </button>*/}
                        </div>
                      </td>
                    </tr>
                ))
            ) : (
                <tr>
                  <td colSpan="6" className="py-4 px-6 text-center">No users found</td>
                </tr>
            )}
            </tbody>
          </table>
        </div>

        {/* Modal to show admin details */}
        <Modal />

      </div>
  );
}

export default AdminTable;
