import React from "react"
import MetricList from "./Components/MetricList";
import "./style.css";

function MetricSection(){
  return (
    <div className="metric-section">
      <h1>Our Metrics</h1>
      <h1>Here are some of the key numbers from out previous years of operations</h1>
      <MetricList />
    </div>
  );
}

export default MetricSection;