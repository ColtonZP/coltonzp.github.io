import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import bottomWave from '../images/bottom_wave.svg'

function Footer() {
  return (
    <footer>
      <img src={bottomWave} alt="" />
      <div className="content">
        <div className="links container">
          <a href="mailto:colton@coltonpemberton.com" className="icon">
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </a>
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
