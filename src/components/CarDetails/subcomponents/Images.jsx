import React from "react";
import Slider from "react-slick";
import CarImages from "../../../assets/data/CarsImages";
import { useParams } from "react-router-dom";
import classes from './images.module.css';

const Images = () => {

    const {slug} = useParams();
  const carItem = CarImages.find((item) => item.carLink === slug);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className={classes.slide}>
           <img src={carItem.images}/> 
        </div>
       
        {/* {carItem.map((item, index) => (
           <div key={index}>
             <img src={item.images}/>
           </div>
          
        ))} */}

      </Slider>
    </div>
  );
};

export default Images;
