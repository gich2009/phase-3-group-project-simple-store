import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function LeftHalf(){
  return(
    <div className="LeftHalf">
      <h1>Simple Store</h1>
      <h2>A solution for entrepreneurs and business managers</h2>
      <h3>Sign up Now and check us out for free</h3>
      <Link to="/home" className="LeftHalfLink">Learn More</Link>
      <div>
        <button>SIGN UP</button>
        <button>LOG IN</button>
      </div>
    </div>
  )

}

export default LeftHalf;