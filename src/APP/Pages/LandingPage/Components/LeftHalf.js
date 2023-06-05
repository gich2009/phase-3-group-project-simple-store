import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../style.css";

function LeftHalf(){
  const navigate = useNavigate();

  function handleSignup(){
    navigate("/signup");  
  }

  function handleLogin(){
    navigate("/login");
  }

  return(
    <div className="LeftHalf">
      <h1>Simple Store</h1>
      <h2>A solution for entrepreneurs and business managers</h2>
      <h3>Sign up Now and check us out for free</h3>
      <Link to="/home" className="LeftHalfLink">Learn More</Link>
      <div>
        <button onClick={handleSignup}>SIGN UP</button>
        <button onClick={handleLogin}>LOG IN</button>
      </div>
    </div>
  )

}

export default LeftHalf;