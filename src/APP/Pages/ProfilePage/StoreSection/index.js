import React from "react";
import './style.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function StoreSection() {
  const [stores, setStores] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    fetch('http://localhost:9292/users/1/stores')
    .then((response) => response.json())
    .then((data) => setStores(data));
  }, []);


  function handleProducts(id){
    navigate(`stores/${id}/products`);
  }

  return (
    <>
      <div className="stores-main-card">
        <div className="stores-section">
          <h3 className="stores-header">Stores</h3>
          <div className="stores-container">
            {stores.map((store) => (
              <div className="stores-card" key={store.id}  onClick={() => handleProducts(store.id)}>
                <h4>{store.name}</h4>
                <p>Name:            {store.name}</p>
                <p>Branch:          {store.branch}</p>
                <p>Stock price: KES {store.stock_price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default StoreSection;