import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Header(){
  const navigate = useNavigate();

  function handleLogOut(){
    navigate("/");
  }

  return(
    <div className="Header">
      <h1>Simple Store</h1>
      <ul>
        <Link className="home-link" to="/home">Home       </Link>
        <Link className="home-link" to="/profile">Profile </Link>
        <button onClick={handleLogOut}>Log Out</button>
      </ul>
    </div>
  );
}

export default Header;