import React from 'react'
import { useParams } from 'react-router-dom';
import CarsData from "../assets/data/CarsData";
import Calculator from '../components/RentalCost/Calculator'
import CarCard from '../components/RentalCost/CarCard';

const RentalCost = () => {
    const {slug} = useParams();
    const carItem = CarsData.find((item) => item.detailsLink === slug);
  return (
    <div>
        <CarCard image={carItem.imgSrc} brand={carItem.brand} model={carItem.model} category={carItem.category} year={carItem.year} fuel={carItem.fuel} type={carItem.type} gearbox={carItem.gearbox} fuelConsumption={carItem.fuelConsumption}/>
        <Calculator fuelConsumption={carItem.fuelConsumption}/>
    </div>
  )
}

export default RentalCost