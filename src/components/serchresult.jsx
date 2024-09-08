import React from "react";
import { useLocation } from "react-router-dom";
import { products } from '../data/product';
import Item from './Item'; // Import the Item component

const SearchResults = () => {
  const location = useLocation();
  const query = decodeURIComponent(new URLSearchParams(location.search).get('query')).trim().toLowerCase();

  const filteredProducts = Object.values(products).filter((product) =>
    product.title.toLowerCase().includes(query)
  );

  return (
    <div className="pt-24">
      <h2 className="text-2xl mb-4">Search Results for "{query}"</h2>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Item
              key={product.id}
              img={product.img}
              price={product.price}
              text={product.title}
              productId={product.id} // Ensure you pass the productId
            />
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default SearchResults;
