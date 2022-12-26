import React from 'react'
import Contact from './Contact';
import classes from './footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Contact/>
      <div className={classes.foot}>Copyright © 2022. All rights reserved. <a href='#'>Privacy Policy</a></div>
    </div>
  )
}

export default Footer