import React from "react";


function Metric({value, unit, message}){
  
  return(
    <div className="metric"> 
      <p>{value}{unit}</p>
      <p>{message}</p>
    </div>
  );
}


export default Metric;