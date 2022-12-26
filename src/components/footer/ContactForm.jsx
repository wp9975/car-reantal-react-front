import React from 'react'
import classes from './contactform.module.css';

const ContactForm = () => {
  return (
    <div className={classes.container}>
        <h3>Masz pytanie?</h3>
        <h5>Napisz do nas:</h5>
        <div className={classes.form}>
        <form>
        <input type="text" name="name" id="name" placeholder="Imię" required/>
        <input type="email" name="email" id="email" placeholder="Email" required/>
        <textarea name="message" id="message" cols="52" rows="15" placeholder="Wiadomość" required></textarea><br/>
        <button>Wyślij wiadomość</button>
        </form>
        </div>
    </div>
  )
}

export default ContactForm