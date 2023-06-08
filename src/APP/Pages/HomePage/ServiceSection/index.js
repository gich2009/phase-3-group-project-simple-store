import React from "react"
import './style.css'
import MoneyImage from './images/money.jpeg'
import MoneyToyImage from './images/moneytoy.jpeg'
import PartnershipImage from './images/partnership.jpg'
import StoreImage from './images/store.jpg'

function ServiceSection() {
  return (
    <>
      <div className="title">
        <h2 >Our Services</h2>
      </div>
      <div className="container">
        <div className="column">
          <img src={MoneyImage} alt="1" className="rounded-image" />
          <h3>Sales</h3>
          <p>Make and track your sales simply and quickly on your profile</p>
        </div>
        <div className="column">
          <img src={MoneyToyImage} alt="2" className="rounded-image" />
          <h3>Inventory</h3>
          <p>Track your inventory to determine when you need to restock and when you should
            overstock.
          </p>
        </div>
        <div className="column">
          <img src={PartnershipImage} alt="3" className="rounded-image" />
          <h3>Suppliers</h3>
          <p>Track your main suppliers for each of your products</p>
        </div>
        <div className="column">
          <img src={StoreImage} alt="4" className="rounded-image" />
          <h3>Consolidation </h3>
          <p>Intergrate all your management activities and run your business from anywhere across
            multiple devices
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;