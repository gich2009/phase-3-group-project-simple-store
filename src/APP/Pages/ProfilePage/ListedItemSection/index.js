import React from "react";


function ListItemSection({ sectionTitle, items }) {
  return (
    <div>
      <h2>{sectionTitle}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItemSection;