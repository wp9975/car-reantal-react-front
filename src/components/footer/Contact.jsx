import React from "react";
import classes from "./contact.module.css";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.address_container}>
        <div className={classes.address}>
          <h3>Skontaktuj się z nami</h3>
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
        <div className={classes.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2151.353040332405!2d22.023360805333525!3d50.11615531070991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ce44faed6a8e1%3A0x74bd253bef8cd691!2sJasionka!5e0!3m2!1spl!2spl!4v1671732484917!5m2!1spl!2spl"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className={classes.contact_form}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
