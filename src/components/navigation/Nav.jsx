import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className={classes.nav_container}>
    <div className={classes.nav}>
    <div className={classes.logo}>CarRentalio</div>
      <div className={toggleNav ? classes.menu : classes.menu_hide}>
        <ul>
            <li className={classes.navlink}><Link to='/'>Strona Główna</Link></li>
            <li className={classes.navlink}><Link to='/about'>O nas</Link></li>
            <li className={classes.navlink}><Link to='/contact'>Kontakt</Link></li>
            <li className={classes.navlink}><Link to='/carlist'>Lista samochodów</Link></li>
        </ul>
        <div className={classes.burger_close} onClick={()=> setToggleNav((prev) => !prev)}>
          <GiHamburgerMenu color="white" size={50}/>
      </div>
      </div>
      <div className={classes.burger} onClick={()=> setToggleNav((prev) => !prev)}>
          <GiHamburgerMenu color="white" size={50}/>
      </div>
    </div>
    </div>
  );
};

export default Nav;
