import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const admins = [
  { id: 1, name: 'Chanuka Weerakkody', username: 'chanuka', email: 'chanuka@gmail.com', contactNumber: '0769475434', password: '**********' },
  // Add other admin records similarly
];

function AdminTable() {
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    username: '',
    email: '',
    contactNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Admin:', newAdmin);
  };

  return (
    <div className="container mx-auto pt-24">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Management</h1>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mb-8">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">Name</th>
              <th scope="col" className="py-3 px-6">Username</th>
              <th scope="col" className="py-3 px-6">Email</th>
              <th scope="col" className="py-3 px-6">Contact Number</th>
              <th scope="col" className="py-3 px-6">Password</th>
              <th scope="col" className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id} className="bg-white border-b">
                <td className="py-4 px-6">{admin.name}</td>
                <td className="py-4 px-6">{admin.username}</td>
                <td className="py-4 px-6">{admin.email}</td>
                <td className="py-4 px-6">{admin.contactNumber}</td>
                <td className="py-4 px-6">{admin.password}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-4">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FontAwesomeIcon icon={faEye} className="w-5 h-5" />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <FontAwesomeIcon icon={faPen} className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
    </div>
  );
}

export default AdminTable;
