import React from "react";
import './style.css';
import logo from './images/logo.png';

function FooterSection() {
  return (
    
    <footer className="footer">
      <div className="footer-column">
        <img src={logo} alt="Logo" className="footer-logo" />
        <h4 className="footer-title">SimpleStore</h4>
        <p className="footer-description">
          Simple Store has served business<br />
          owners  and fulfilled their management<br /> needs for over two years.<br />
          <br />Join us and increase your business<br />
          reach and efficiency by connecting <br />with our clients.
        </p>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Service</h4>
        <ul className="footer-list">
          <li>Sales</li>
          <li>Inventory</li>
          <li>Suppliers</li>
          <li>Consolidation</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Authors</h4>
        <ul className="footer-list">
          <li>Jerome Origa</li>
          <li>Fartun Ali</li>
          <li>Bonface Nyatangi</li>
          <li>Amos Wanene</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="footer-title">Contact Us</h4>
        <p>Email: simple@store.com</p>
        <p>Mobile: +1234567890</p>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} SimpleStore. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterSection;