import React from 'react';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-500">{product.price}</p>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => onEdit(product)}
          className="text-blue-500 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
