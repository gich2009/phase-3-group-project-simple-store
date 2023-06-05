import React from 'react';
import './style.css';
import Integrity from "./images/honesty.png";
import Demonstrate from "./images/banner.png";
import Collaboration from "./images/collaborate.png";
import Corporate from "./images/corporate.png";
import Digital from "./images/digital.png";
import People from "./images/people.png";
import Teamwork from "./images/teamwork.png";
import Technology from "./images/technology.png";

function ValuesSection() {
  return (
    <>
      <div className="our-values">
        <h1>Our Values</h1>
        <p className="description">A Simple Store, we strive to create an extraordinary
          customer experience as efficiently as possible. Our team creates solutions
          for business owners that are applicable and fast.</p>
        <div className="card-container">
          <div className="card">
            <img src={Integrity} alt="Icon 1" />
            <h2>Integrity</h2>
            <p>We display the highest level of Integrity in the way we conduct our business.</p>
          </div>
          <div className="card">
            <img src={Demonstrate} alt="Icon 2" />
            <h2>Demonstrate</h2>
            <p>We demonstrate a strong will to help our business clients excel in the market place.</p>
          </div>
          <div className="card">
            <img src={People} alt="Icon 3" />
            <h2>Diversity</h2>
            <p>We provide an inclusive working environment for all developers at our company.</p>
          </div>
          <div className="card">
            <img src={Collaboration} alt="Icon 4" />
            <h2>Collaboration</h2>
            <p>We love to collaborate with all of our business partners and clients. When you win, we win. Including advertisements.</p>
          </div>
          <div className="card">
            <img src={Technology} alt="Icon 5" />
            <h2>Technology</h2>
            <p>We harness the power of Technology to deliver better customer experience.</p>
          </div>
          <div className="card">
            <img src={Corporate} alt="Icon 6" />
            <h2>Corporate</h2>
            <p>We set the standard for the best Corporate Citizenship in our community.</p>
          </div>
          <div className="card">
            <img src={Teamwork} alt="Icon 7" />
            <h2>Teamwork</h2>
            <p>We encourage our clients to work together with each other when there is mutual benefit. .</p>
          </div>
          <div className="card">
            <img src={Digital} alt="Icon 8" />
            <h2>Digital</h2>
            <p>We believe in offering the best digital solution for keeping real-time records.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ValuesSection;

{ /*

I need a styled react component for a simple 'Our Values' page that has the following:
  - The page has an heading, 'Our Values' and a short description beneath it.
  - After that, The page divided into 8 cards. i.e; four columns and two rows. 
  - Each card contains an icon image, Heading and a short description paragraph.

*/}

// We demonstrate a strong will to help our business clients excel in the market place
// We display the highest level of Integrity in the way we conduct our business