import React from "react";
import { useLocation } from "react-router-dom";
import { products } from '../data/product';

const SearchResults = () => {
  const location = useLocation();
  const query = decodeURIComponent(new URLSearchParams(location.search).get('query')).trim().toLowerCase();

  // Debugging: Ensure the products are loaded
  console.log("Products data:", products);

  const filteredProducts = Object.values(products).filter((product) =>
    product.title.toLowerCase().includes(query)
  );

  // Debugging: Check if the query and filtered products are correct
  console.log("Search Query:", query);
  console.log("Filtered Products:", filteredProducts);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Search Results for "{query}"</h2>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <img src={product.img} alt={product.title} width="100" />
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default SearchResults;
