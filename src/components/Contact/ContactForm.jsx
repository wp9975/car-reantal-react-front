import React from 'react'
import classes from './contact.module.css';

const ContactForm = () => {
  return (
    <div className={classes.contact_form}>
        <h2>Masz pytanie?</h2>
        <h3>Napisz do nas:</h3>
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