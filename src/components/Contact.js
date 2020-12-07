import React from 'react'
import emailjs from 'emailjs-com'

// import './ContactUs.css'

export default function ContactUs() {
  const { REACT_APP_EMAIL_TEMPLATE, REACT_APP_EMAILJS_USER, REACT_APP_EMAIL_SERVICE } = process.env

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        `${REACT_APP_EMAIL_SERVICE}`,
        `${REACT_APP_EMAIL_TEMPLATE}`,
        e.target,
        `${REACT_APP_EMAILJS_USER}`,
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        },
      )
  }

  return (
    <form className="contactForm" onSubmit={sendEmail}>
      <label htmlFor="name">Name:</label>
      <input className="name" type="text" name="user_name" />
      <label htmlFor="number">Phone:</label>
      <input className="number" type="tel" name="contact_number" />
      <label htmlFor="email">Email:</label>
      <input className="email" type="email" name="user_email" />
      <label htmlFor="message">Message:</label>
      <textarea className="message" name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}
