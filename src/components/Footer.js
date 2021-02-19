import React from 'react'

import Contact from './Contact'
import mail from '../images/mail.svg'
import bottomWave from '../images/bottom_wave.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

function Footer() {
  return (
    <footer>
      <img className="wave" src={bottomWave} alt="" />
      <div className="content">
        <div className="container">
          <h3>Get in touch!</h3>
          <div className="contact">
            <Contact />
            <img className="mail" src={mail} alt="mailing" />
          </div>
          <div className="links">
            <a href="https://github.com/ColtonZP" className="icon">
              <img src={github} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/colton-pemberton-1a7292163/" className="icon">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
