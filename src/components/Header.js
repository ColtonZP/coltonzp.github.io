import React, { useRef } from 'react'

import spaceNeedle from '../images/space_needle.svg'
import colton_pemberton_resume from '../content/colton_pemberton_resume.pdf'
import { useOnScreenHeadline, useOnScreenImage, useOnScreenProjects } from '../useOnScreen'

export default function Header({ scroll, bgPosY, spacePosY, posX, needleOpacity }) {
  const name = useRef()
  const about = useRef()
  const isHeadline = useOnScreenHeadline(name, '-40%')
  const isAbout = useOnScreenHeadline(about, '-40%')
  const isImage = useOnScreenImage(about, '-40%')

  return (
    <header className="appHeader">
      <div className="container">
        <div className="content">
          <div className="headline" style={{ opacity: isHeadline ? 1 : 0 }}>
            <h1 ref={name}>
              Colton <b>Pemberton</b>
            </h1>
            <p>Web developer from Seattle, Wa.</p>
          </div>

          <div className="about" style={{ opacity: isAbout ? 1 : 0 }}>
            <h3 ref={about}>
              Hello, there!{' '}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h3>
            <p>
              I&#39;m Colton, I spend a lot of time writing code. I work hard to make the internet a
              better place than when I found it. I&#39;m seeking a full time position in web
              development.
            </p>

            <a className="Download" href={colton_pemberton_resume} download>
              Download Resume
            </a>
          </div>
        </div>
        <img src={spaceNeedle} alt="" style={{ top: spacePosY, left: isImage ? '70%' : '100%' }} />
      </div>
    </header>
  )
}
