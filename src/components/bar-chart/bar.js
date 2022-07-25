import React, { useState, useEffect, useRef } from "react";
// Import Styles
import classes from "../../styles/bar-chart/bar.module.css";

function Bar(props) {
  const { today, largest, smallest } = props;
  const { day, amount } = props.data;
  const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  // State
  const [isToday, setIsToday] = useState(false);
  const bar = useRef();

  const maxHeight = 180;
  let barHeight = (amount / largest) * 100;

  useEffect(() => {
    if (dayList[today] === day) {
      setIsToday(true);
    }

    // bar.current.style.maxHeight = `${largest}%`;
    // bar.current.style.minHeight = `${smallest}%`;
    bar.current.style.height = `${barHeight + 20}px`;
  }, []);

  if (!largest || !smallest) {
    return <div>Loading...</div>;
  }
  console.log(amount);

  return (
    <div className={classes.barContainer}>
      <div
        className="bar"
        data-active={isToday}
        data-amount={amount}
        ref={bar}
      ></div>
      <h3>{day}</h3>
    </div>
  );
}

export default Bar;
