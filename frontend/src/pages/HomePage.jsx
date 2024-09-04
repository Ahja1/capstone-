import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Current Products</h1>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product._id}>
              <img src={product.image} alt={product.name} style={{ width: '100px' }} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
