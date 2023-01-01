import React from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import classes from "./footer.module.css";
import Location from "./Location";

const Footer = () => {
  return (
    <div className={classes.all}>
      <div className={classes.footer}>
        <Contact />
        <ContactForm />
      </div>
      <Location />
      <div className={classes.foot}>
        Copyright © 2022. All rights reserved. <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
