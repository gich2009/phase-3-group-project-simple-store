import React, { useState } from "react";
import "./style.css";
import logo from "./images/SAK1-CTW107.webp";

function ListItemSection({ sectionTitle }) {
  const [selectedItem, setSelectedItem] = useState(null);
  // const items = [
  //   { id: 1, name: "sakarias armchair", stock: 10, price: 999, image: "images/SAK1-CTW107.webp" },
  // ];

  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  // };

  // const handleSellClick = () => {
  //   if (selectedItem) {
  //     // Handle the sell button click logic here
  //     console.log("Sell button clicked for item:", selectedItem);
  //   }
  // };

  // const handleRestockClick = () => {
  //   if (selectedItem) {
  //     // Handle the restock button click logic here
  //     console.log("Restock button clicked for item:", selectedItem);
  //   }
  // };

  // const handleUpdateClick = () => {
  //   if (selectedItem) {
  //     // Handle the update button click logic here
  //     console.log("Update button clicked for item:", selectedItem);
  //   }
  // };

  return (
    <div className="main-card">
        <div className="header-section">
          <div className="left-section">
            <h2 className="heading">Simple Store</h2>
          </div>
          <div className="right-section">
            <nav className="navbar">
              <a href="#" className="nav-link">About</a>
              <a href="#" className="nav-link">Profile</a>
              <a href="#" className="nav-link">Logout</a>
            </nav>
          </div>
          <div className="user-section">
            <div className="logo"><img src="" /></div>
            <div className="username">John Doe</div>
            <div className="welcome-message">Welcome!</div>
          </div>
        </div>
        <div className="products-section">
          <h3 className="products-header">Products</h3>
          <div className="products-container">
            <div className="product-card">
              <img src={logo} alt="Product 1" />
              <h4>Womb Chair</h4>
              <p>Price: KES 1000</p>
            </div>
          </div>
        </div>
      </div>
    
 );
}

export default ListItemSection;