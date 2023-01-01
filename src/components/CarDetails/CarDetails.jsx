import React from "react";
import { useParams } from "react-router-dom";
import classes from "./cardetails.module.css";
import CarsData from "../../assets/data/CarsData";
import CarCard from "../subcomponents/CarCard";

const CarDetails = () => {
  const {slug} = useParams();
  const carItem = CarsData.find((item) => item.detailsLink === slug);

  return <div className={classes.container}>
    <CarCard image={carItem.imgSrc} brand={carItem.brand} model={carItem.model} category={carItem.category} year={carItem.year} fuel={carItem.fuel} type={carItem.type} gearbox={carItem.gearbox} fuelConsumption={carItem.fuelConsumption}/>
  </div>
};

export default CarDetails;
