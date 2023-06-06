import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// Store component
const Store = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Apples',
      price: 0.99,
      description: 'Fresh apples from local farms.',
    },
    {
      id: 2,
      name: 'Bananas',
      price: 0.49,
      description: 'Ripe bananas, perfect for a healthy snack.',
    },
    // Add more products as needed
  ];

  return (
    <div className="store">
      <h1>Welcome to the Supermarket!</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
