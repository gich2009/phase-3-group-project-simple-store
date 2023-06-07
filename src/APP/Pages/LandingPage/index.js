import React     from "react";
import RightHalf from "./Components/RightHalf";
import LeftHalf  from "./Components/LeftHalf";
import "./style.css";

function LandingPage(){
  return (
    <div className="LandingPage">
      <div>
        <LeftHalf />
      </div>
      <div>
        <RightHalf />
      </div>
      {/* <h1>This is the landing page</h1> */}
    </div>
  );
}

export default LandingPage;