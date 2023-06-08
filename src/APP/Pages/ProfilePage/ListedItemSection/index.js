import React, { useState, useEffect } from 'react';
import "./style.css";
import logo from "./images/SAK1-CTW107.webp";

function ListItemSection({ sectionTitle }) {

  const [data, setData] = useState([]);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch('path/to/your/file.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h3 className="products-header">Listed item</h3>
      <div className="product-card">
        <img src={logo} alt="Product 1" />
        <h4>Womb Chair</h4>
        <p>Price: KES 1000</p>
        <p>Stock: 50</p>
        <p>Sales: 30</p>
        <p>Profit: KES 20000</p>
      </div>
      <button>Sell</button>
    </>

  );
}

export default ListItemSection;