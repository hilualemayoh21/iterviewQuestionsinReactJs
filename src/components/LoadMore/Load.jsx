import React, { useState, useEffect } from "react";

function Load() {
  const [products, setProducts] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 194) {
      setDisabled(true);
    }
  }, [products]);

  console.log(products);

  return (
    <div className="container mx-auto">
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm flex flex-col p-3 bg-white shadow-lg rounded-lg"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <div className="flex gap-1 text-gray-600 m-2">
              <p className="text-sm">{product.brand}</p>
              <p className="text-sm">{product.category}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setCount(count + 1)}
        disabled={loading || disabled}
        className={`mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
          (loading || disabled) && "opacity-50 cursor-not-allowed"
        }`}
      >
        {loading ? "Loading..." : disabled ? "No More Products" : "Load More"}
      </button>
    </div>
  );
}

export default Load;
