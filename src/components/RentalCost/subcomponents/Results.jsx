import React from "react";
import classes from "./results.module.css";
const Results = (props) => {
  return (
    <div className={classes.result_container}>
      <div className={classes.result_items}>
        <div className={classes.result_item}><h5>{props.days} dni</h5></div>
        <div className={classes.result_item}><h5>{props.milage} km </h5></div>
        <div className={classes.result_item}><h5>{props.price} zł / 24h</h5></div>
      </div>
      <div className={classes.total}>
            <h2>Do zapłaty:</h2>
            <h3>{props.totalPrice} zł</h3>
      </div>
    </div>
  );
};

export default Results;
