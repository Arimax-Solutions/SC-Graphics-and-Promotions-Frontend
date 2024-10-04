import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Item from "./item";
import Loader from "./Loader"; // Optional loader component

const SearchResults = () => {
  const location = useLocation();
  const query = decodeURIComponent(new URLSearchParams(location.search).get("query")).trim().toLowerCase();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from the API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/v1/products");
        const data = await response.json();
        setProducts(data); // Store all products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the query
  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  }, [products, query]);

  return (
      <div className="pt-24 px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Search Results for "<span className="text-indigo-600">{query}</span>"
        </h2>

        {loading ? (
            <Loader /> // Replace with your loading spinner or skeleton component
        ) : (
            <>
              {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fadeIn">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="transform hover:scale-105 transition-transform duration-300">
                          <Item
                              img={product.img}
                              price={product.price}
                              text={product.title}
                              productId={product.id}
                              className="rounded-lg shadow-lg p-4 bg-white"
                          />
                        </div>
                    ))}
                  </div>
              ) : (
                  <div className="text-center mt-10">
                    <img src="/assets/no-results.svg" alt="No results found" className="mx-auto w-64" />
                    <p className="text-2xl text-gray-700 mt-6">
                      No products found for "<span className="text-red-500 font-bold">{query}</span>"
                    </p>
                    <p className="mt-4 text-gray-500">
                      Try different keywords or explore our <a href="/" className="text-blue-600 underline">latest products</a>.
                    </p>
                  </div>
              )}
            </>
        )}
      </div>
  );
};

export default SearchResults;
