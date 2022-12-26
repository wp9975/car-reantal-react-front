import React from "react";
import Slider from "react-slick";
import classes from "./header.module.css";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
  };
  return (
    <div className={classes.hero_slider}>
      <Slider {...settings}>
        <div className={classes.slide_1}>
        </div>
        <div className={classes.slide_2}>
        </div>
        <div className={classes.slide_3}> 
        </div>
      </Slider>

      <div className={classes.hero_content}>
        <h2>Wybierz wymarzone auto</h2>
      </div>
    </div>
  );
};

export default Header;
