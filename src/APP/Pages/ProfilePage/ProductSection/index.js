import React from "react";
import HeaderSection from "../HeaderSection";
import './style.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import logo from './images/logo.png';
import chair1 from './images/chair1.jpeg';
import chair2 from './images/chair2.jpeg';
import chair3 from './images/chair3.jpeg';
import chair4 from './images/chair4.jpeg';
function ProductSection() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    fetch('http://localhost:9292/stores/1/products')
    .then((response) => response.json())
    .then((data) => setProducts(data));
  }, []);


  function handleListedItem(id){
    navigate(`products/item/${id}`);
  }

  return (
    <>
      <div className="main-card">
        <div className="products-section">
          <h3 className="products-header">Products</h3>
          <div className="products-container">
            {products.map((product) => (
              <div className="product-card" key={product.id}  onClick={() => handleListedItem(product.id)}>
                <h4>{product.name}</h4>
                <p>Buying Price: KES {product.buying_price}</p>
                <p>Selling Price: KES {product.selling_price}</p>
                <p>Stock: {product.stock}</p>
                <p>Sales: {product.sales}</p>
                <p>Store ID: {product.store_id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default ProductSection;