import React from "react";
// Import styles
import classes from "../../styles/bar-chart/chart-header.module.css";

function ChartHeader() {
  return (
    <div className={classes.cardHeader}>
      <div>
        <h2>My balance</h2>
        <p>$921.48</p>
      </div>
      <img src="./images/logo.svg" alt="Logo" />
    </div>
  );
}

export default ChartHeader;
