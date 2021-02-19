import React from 'react'

export default function Contact() {
  return (
    <form className="contactForm" name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <input className="name" type="text" name="name" placeholder="Name" required />
      <input className="email" type="email" name="email" placeholder="Email" required />
      <textarea className="message" name="message" placeholder="Message" required />
      <div data-netlify-recaptcha="true"></div>
      <input type="submit" value="Send" />
    </form>
  )
}
