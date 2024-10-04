// components/AdminNavbar.js
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  useEffect(() => {
    if (!token) {
      // Redirect to login if no token
      Swal.fire('Error', 'Unauthorized! Please log in.', 'error').then(() => {
        navigate('/login'); // Redirect to login page
      });
    }
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between">
          <Link to="/admin" className="text-lg font-bold">Admin Dashboard</Link>
          <div className="flex">
            <Link to="/adminadd" className="mx-2">Users</Link>
            <Link to="/admin" className="mx-2">Products</Link>
            <Link onClick={handleLogout} to="/login" className="mx-2">Logout</Link>
          </div>
        </div>
      </nav>
  );
};

export default AdminNavbar;
