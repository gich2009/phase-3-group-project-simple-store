import React from "react";
import './style.css';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductSection() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(()=> {
    fetch(`http://localhost:9292/stores/${params.id}/products`)
    .then((response) => response.json())
    .then((data) => setProducts(data));
  }, []);


  // function handleListedItem(id){
  //   navigate(`${id}`, {state : {storeId: params.id}});
  // }

    function handleListedItem(id) {
    navigate(`${id}`, { state: { storeId: params.id } });
  }

  return (
    <>
      <div className="products-main-card">
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
                {/* <p>Store ID: {product.store_id}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default ProductSection;