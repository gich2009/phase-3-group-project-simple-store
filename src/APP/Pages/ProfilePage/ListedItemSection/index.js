import React, { useState } from "react";


function ListItemSection({ sectionTitle }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    { id: 1, name: "Item 1", stock: 10, price: 9.99, image: "item1.jpg" },
    { id: 2, name: "Item 2", stock: 5, price: 19.99, image: "item2.jpg" },
    // Add more items as needed
  ];


  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="listed-item-section">
      <h2>{sectionTitle}</h2>
      <div className="listed-items">
        {items && items.map((item) => (
          <div
            className={`item-card${selectedItem === item ? " active" : ""}`}
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            <img src={`/images/${item.image}`} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Stock: {item.stock}</p>
              <p>Price: {item.price}</p>
              <div className="button-card">
                <button className="sell-button">Sell</button>
                <button className="restock-button">Restocking</button>
                <button className="update-button">Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItemSection;