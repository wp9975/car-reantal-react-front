import React from 'react'
import classes from './footer.module.css'
const Location = () => {
  return (
    <div className={classes.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2151.353040332405!2d22.023360805333525!3d50.11615531070991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ce44faed6a8e1%3A0x74bd253bef8cd691!2sJasionka!5e0!3m2!1spl!2spl!4v1671732484917!5m2!1spl!2spl"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
    </div>
  )
}

export default Location