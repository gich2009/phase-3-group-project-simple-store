import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./style.css";

function ListItemSection() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const Location = useLocation();
  const store_id = Location.state?.storeId
  const productId = params.id;
  console.log(store_id);

  useEffect(() => {
    fetch(`http://localhost:9292/stores/${store_id}/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  return (
    <div className="items-main-card">
      <div className="items-section">
        <h3 className="items-header">Item</h3>
        <div className="items-container">
          <div className="items-card">
            <h4>{product.name}</h4>
            <p>Buying Price: KES {product.buying_price}</p>
            <p>Selling Price: KES {product.selling_price}</p>
            <p>Stock:    {product.stock}</p>
            <p>Sales:    {product.sales}</p>
            <p>Store ID: {product.store_id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItemSection;

