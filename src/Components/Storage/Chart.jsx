import React from "react";
// import ChartBar from "./ChartBar";
import './Chart.css'
import ChartBar from "./ChartBar";
function Chart({ data }) {
  let pricesArray = data.map((row) => row.value);
  let maxPrice = Math.max(...pricesArray);

  console.log(maxPrice);
  return (
    <div>
      <div className="chart">
        {data.map((record) => {
          return (
            <ChartBar
              key={record.label}
              label={record.label}
              value={record.value}
              maxValue={maxPrice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Chart;
