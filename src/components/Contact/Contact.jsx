import React from "react";
import classes from "./contact.module.css";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.contact_details}>
          <h1>Skontaktuj się z nami</h1>
          <ul>
            <li className={classes.contact_li}>
              <FaLocationArrow />
              Jasionka 1000, 36-002 Jasionka
            </li>
            <li className={classes.contact_li}>
              <FaPhoneAlt />
              +48 123 123 123
            </li>
            <li className={classes.contact_li}>
              <HiMail />
              contact@carrentalio.com
            </li>
          </ul>
        </div>
      </div>
    
  );
};

export default Contact;
