import React from "react";
import "./style.css";

function HeaderSection({ username }) {
  return (
    <header>
      <div className="header-container">
        <div className="left-section">
          <h1>Simple Store</h1>
        </div>
        <div className="right-section">
          <ul>
            <li>About</li>
            <li>Profile</li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
      <div className="content-section">
        <div className="frame">
          <div className="profile-image-container">
            <img
              src="%PUBLIC_URL%/vn_passport.jpg"
              alt="Passport"
              className="profile-image"
            />
          </div>
          <div className="welcome-message">
            <h2>Hi, {username}!</h2>
            <p>Welcome to Simple Store</p>
          </div>
        </div>
      </div>
    </header>
  );
};
    
export default HeaderSection;