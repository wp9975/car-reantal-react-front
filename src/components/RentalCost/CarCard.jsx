import React from "react";

import RentalData from "../../assets/data/RentalData";
import classes from "./carcard.module.css";

const CarCard = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={props.image} alt=''/>
      </div>
      <div className={classes.info}>
        <h2>
          {props.brand} {props.model}
        </h2>
        <h4>{props.category}</h4>
        <div className={classes.grid}>
          <div className={classes.name}>Rok produkcji:</div>
          <div className={classes.value}>{props.year}</div>
          <div className={classes.name}>Rodzaj paliwa:</div>
          <div className={classes.value}>{props.fuel}</div>
          <div className={classes.name}>Typ nadwozia:</div>
          <div className={classes.value}>{props.type}</div>
          <div className={classes.name}>Skrzynia biegów:</div>
          <div className={classes.value}>{props.gearbox}</div>
          <div className={classes.name}>Spalanie:</div>
          <div className={classes.value}>{props.fuelConsumption} l /100km</div>
        </div>
       
      </div>
    </div>
  );
};

export default CarCard;
