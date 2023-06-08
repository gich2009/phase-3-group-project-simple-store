import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import './style.css';

// Store component
const Store = () => {
  const navigate = useNavigate();
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Fartun Chemist',
      price: 0.99,
      description: 'Eldoret Branch',
    },
    {
      id: 2,
      name: 'Fartun Chemist',
      price: 0.99,
      description: 'Nakuru Branch',
    },
    // Add more products as needed
  ];

  function handleProducts(){
    navigate("products"); 
  }
  
  return (
    <div className="store">
      <h1>Welcome to the Supermarket!</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <button className="buy-button" onClick={handleProducts}>Visit Store</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
