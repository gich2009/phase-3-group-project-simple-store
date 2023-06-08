import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import "./style.css";

function LandingSection(){
  return (
    <div className="LandingSection">
      <img src="./APP/Pages/HomePage/LandingSection/pexels-anna-shvets-3727469_1.jpg" alt="Lady entrepreneur writing in her book."/>
      <Header />
      <Body />
      {/* <h1>This is the <strong>landing section</strong> of the home page</h1> */}
    </div>
  );
}

export default LandingSection;