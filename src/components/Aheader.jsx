import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="text-lg font-bold">Admin Dashboard</div>
      <nav className="space-x-4">
        <a href="#" className="hover:text-gray-400">Dashboard</a>
        <a href="#" className="hover:text-gray-400">Manage Products</a>
        <a href="#" className="hover:text-gray-400">Logout</a>
      </nav>
    </header>
  );
};

export default Header;
