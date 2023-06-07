import React from "react";
import "./style.css";
import logo from "./images/SAK1-CTW107.webp";

function ListItemSection({ sectionTitle }) {
  return (
    <>
      <h3 className="products-header">Listed item</h3>
      <div className="product-card">
        <img src={logo} alt="Product 1" />
        <h4>Womb Chair</h4>
        <p>Price: KES 1000</p>
        <p>Price: KES 1000</p>
        <p>Price: KES 1000</p>
        <p>Price: KES 1000</p>
      </div>
      <button>Sell</button>
    </>

  );
}

export default ListItemSection;