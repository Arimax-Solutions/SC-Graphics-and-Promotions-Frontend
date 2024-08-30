
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productName } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Product: {productName}</h1>
      <p>Details and specifications about {productName}...</p>

    </div>
  );
};

export default ProductDetails;
