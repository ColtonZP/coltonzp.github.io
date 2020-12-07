import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Contact from './Contact'
import bottomWave from '../images/bottom_wave.svg'

function Footer() {
  return (
    <footer>
      <img className="wave" src={bottomWave} alt="" />
      <div className="content">
        <div className="email container">
          <h1>Get in touch!</h1>
          <Contact />
        </div>
        <div className="links container">
          <a href="https://github.com/ColtonZP" className="icon">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a href="https://www.linkedin.com/in/colton-pemberton-1a7292163/" className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
