import React, { useState, useEffect } from "react";
// Import Components
import Bar from "./bar";
// Import Styles
import classes from "../../styles/bar-chart/bar-chart.module.css";

function BarChart(props) {
  const { dataList } = props;

  const date = new Date();
  const today = date.getDay();

  // States
  const [largest, setLargest] = useState();
  const [smallest, setSmallest] = useState();

  useEffect(() => {
    setLargest(getLargest(dataList));
    setSmallest(getSmallest(dataList));
  }, []);

  // Functions
  const getLargest = (dataList) => {
    if (dataList.length === 0) {
      return;
    }

    let largest = dataList[0].amount;

    for (let i = 1; i < dataList.length; i++) {
      if (dataList[i].amount > largest) {
        largest = dataList[i].amount;
      }
    }

    return largest;
  };

  const getSmallest = (dataList) => {
    if (dataList.length === 0) {
      return;
    }

    let smallest = dataList[0].amount;

    for (let i = 1; i < dataList.length; i++) {
      if (dataList[i].amount < smallest) {
        smallest = dataList[i].amount;
      }
    }

    return smallest;
  };

  if (!smallest || !largest) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.barChartContainer}>
      <h2>Spending - Last 7 days</h2>
      <div className={classes.barContainer}>
        {dataList.map((data) => (
          <Bar
            data={data}
            today={today}
            largest={largest}
            smallest={smallest}
            key={data.day}
          />
        ))}
      </div>
    </div>
  );
}

export default BarChart;
