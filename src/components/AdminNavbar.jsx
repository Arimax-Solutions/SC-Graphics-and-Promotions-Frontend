// components/AdminNavbar.js
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/admin" className="text-lg font-bold">Admin Dashboard</Link>
        <div className="flex">
          <Link to="/adminadd" className="mx-2">Users</Link>
          <Link to="/admin" className="mx-2">Products</Link>
          <Link to="/login" className="mx-2">Logout</Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
