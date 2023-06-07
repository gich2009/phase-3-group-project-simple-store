import React from "react";
import './style.css';
import logo from './images/logo.png';

function FooterSection() {
  return (

    <footer className="footer">
      <div className="column">
        <img src={logo} alt="Logo" className="logo" />
        <h4 className="title">SimpleStore</h4>
        <p className="description">
          Sample Store has served business<br />
          owners  and fulfilled their management<br /> needs for over two years.<br />
          <br />Join us and increase your business<br />
          reach and efficiency by connecting <br />with our clients.
        </p>
      </div>
      <div className="column">
        <h4 className="title">Service</h4>
        <ul className="list">
          <li>Sales</li>
          <li>Inventory</li>
          <li>Suppliers</li>
          <li>Consolidation</li>
        </ul>
      </div>
      <div className="column">
        <h4 className="title">Authors</h4>
        <ul className="list">
          <li>Jerome Origa</li>
          <li>Fartun Ali</li>
          <li>Bonface Nyatangi</li>
          <li>Amos Wanene</li>
        </ul>
      </div>
      <div className="column">
        <h4 className="title">Contact Us</h4>
        <p>Email: simple@store.com</p>
        <p>Mobile: +1234567890</p>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} SimpleStore. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterSection;



/*
Footer Section
 In separate jsx and css files, create a styled react component for a simple footer section 'SimpleStore' page that has the following:
  - The footer section is divided into four columns.
  - The first column has a logo image, a title beneath the logo, and paragraph describtion.
  - The second column has a title 'Service' and a list of services.
  - The third column has a title 'Authors' and a list of authors.
  - The fourth column has a title 'Contact Us', an email address and mobile number.
  - This section has a Copyright message at the bottom center
  - And lastly this section has a background color of '#0C3A2D'

*/
