import React from "react";
import classes from "./carlist.module.css";
import CarsData from "./CarsData";
import { GiChemicalTank, GiGearStickPattern, GiCarDoor } from "react-icons/gi";

const CarList = () => {
  return (
    <div className={classes.container}>
      {CarsData.map((item, index) => (
        <div className={classes.car_card} key={index}>
          <div className={classes.car_img}>
            <img src={item.imgSrc} />
          </div>
          <div className={classes.car_description}>
            <div className={classes.header}>
              <h1>
                {item.brand} {item.model}
              </h1>
              <h2>{item.category}</h2>
            </div>

            <div className={classes.informations}>
              <div className={classes.info_item}><GiChemicalTank/>{item.fuel}</div>
              <div className={classes.info_item}><GiGearStickPattern/>{item.gearbox}</div>
              <div className={classes.info_item}><GiCarDoor/>{item.doors}</div>
            </div>
            <a href="#" className={classes.button_details}>
              Więcej
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
