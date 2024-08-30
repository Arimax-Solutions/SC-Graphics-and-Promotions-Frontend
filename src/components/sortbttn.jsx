import React, { useState } from 'react';

const SortButton = ({ onSort, initialOrder = 'asc' }) => {
  const [sortOrder, setSortOrder] = useState(initialOrder);

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    onSort(newOrder);
  };

  return (
    <button
      onClick={handleSort}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      {sortOrder === 'asc' ? '🔼' : '🔽'} Sort
    </button>
  );
};

export default SortButton;
