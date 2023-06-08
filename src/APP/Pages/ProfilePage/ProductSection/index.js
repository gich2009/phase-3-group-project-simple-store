import React, { useState, useEffect } from 'react';

import HeaderSection from "../HeaderSection";
import './style.css';
import { useNavigate } from 'react-router-dom';

function ProductSection() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:9292/stores/1/products');
        const jsonData = await response.json();
        setProducts(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
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