
import React, { useState, useEffect } from 'react';

import HeaderSection from "../HeaderSection";
import './style.css';
import logo from './images/logo.png';
import chair1 from './images/chair1.jpeg';
import chair2 from './images/chair2.jpeg';
import chair3 from './images/chair3.jpeg';
import chair4 from './images/chair4.jpeg';
function ProductSection() {

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
      <div className="main-card">

        <div className="products-section">
          <h3 className="products-header">Products</h3>
          <div className="products-container">
            <div className="product-card">
              <img src={chair1} alt="Product 1" />
              <h4>Womb Chair</h4>
              <p>Price: KES 1000</p>
            </div>
            <div className="product-card">
              <img src={chair2} alt="Product 2" />
              <h4>Ball Chair</h4>
              <p>Price: KES 1500</p>
            </div>
            <div className="product-card">
              <img src={chair3} alt="Product 3" />
              <h4>Wing Chair</h4>
              <p>Price: KES 800</p>
            </div>
            <div className="product-card">
              <img src={chair4} alt="Product 4" />
              <h4>High chair</h4>
              <p>Price: KES 1200</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default ProductSection;

/*
Using react component, Implement A Store main card with space from margins and has the following two sections:
1. A header section that complizes of:
  - A heading,'Simple Store' placed to the left.
  - A navbar with 'About', 'Profile' and 'Logout' link buttons which are spread out nicely. 
      The Navbar is placed to the right.
  - A Username logo, besides the logo is its username on the left and a welcome message. Both placed at the bottom center
     of the header section.
  - And lastly, on this header section has a background color of #0C3A2D
2. A products section that complizes of:
  - A header 'Products' placed at the top center of this products section
  - Four products cards placed in one row (four columns).
  - Each card contains a picture of the product, its corresponding name below the product picture,
      and the price of the product in Kenyan currency
  - There is a space between each products card to fit well in the main card. 
    (Padding of 40px between the products cards)
  - Lastly, There is a space (padding-top of 40px) between the header section and the products section
And that's it.
*/ 