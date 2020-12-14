import React from 'react'

export default function ContactUs() {
  return (
    <form className="contactForm" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <input className="name" type="text" name="user_name" placeholder="Name" required />
      <input className="number" type="tel" name="contact_number" placeholder="Phone" />
      <input className="email" type="email" name="user_email" placeholder="Email" required />
      <textarea className="message" name="message" placeholder="Message" required />
      <div data-netlify-recaptcha="true"></div>
      <input type="submit" value="Send" />
    </form>
  )
}
