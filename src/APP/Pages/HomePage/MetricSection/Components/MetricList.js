import React from "react";
import Metric from "./Metric";


function MetricList(){

  const metrics = [
    {value: 57.6,  unit: "bn", message: "YEARLY TRACKED SALES"},
    {value: 75,    unit: "%",  message: "INVENTORY KEPT"},
    {value: 205,   unit: "",   message: "ACCOUNTS CREATED"},
    {value: 50.4,  unit: "bn", message: "INVESTED CAPITAL"},
    {value: 187,   unit: "",   message: "BUSINESS CLIENTS"},
    {value: 58.51, unit: "%",  message: "POSITIVE REVIEWS"},
    {value: 8.5,   unit: "bn", message: "MARKET CAPITALIZATION"},
    {value: "AAA", unit: "",   message: "CREDIT RATING"}
  ]


  //Not a good practice to use the index as a key because indices may change but since the array is constant, then we can make an exception.
  const metricList = metrics.map((metric, index) => {
    return <Metric key={index} value={metric.value} unit={metric.unit} message={metric.message}/>;
  });


  return(
    <div className="metric-list">
      {metricList}
    </div>
  );
}

export default MetricList;