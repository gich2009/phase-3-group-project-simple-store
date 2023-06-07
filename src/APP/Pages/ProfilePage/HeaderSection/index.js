import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import icon from "./images/vn_passport.jpg";


function HeaderSection({ username = "Fartun" }) {
  return (
    <header>
      <div className="header-container">
        <div className="left-section">
          <h1>Simple Store</h1>
        </div>
        <div className="right-section">
          <ul>
            <Link className="header-link" to="/home">Home</Link>
            <Link className="header-link" to="/profile">Profile</Link>
            <Link className="header-link" to="/">Logout</Link>
          </ul>
        </div>
      </div>
      <div className="content-section">
        <div className="frame">
          <div className="profile-image-container">
            <img
              src={icon}
              alt="Passport"
              className="profile-image"
            />
          </div>
          <div className="welcome-message">
            <h2>Hi, {username} !</h2>
            <p>Welcome to Simple Store</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;