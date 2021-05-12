import React, { useState, useEffect, useRef } from 'react'
import Prismic from 'prismic-javascript'
import { Client } from '../prismic-configuration'

import spaceNeedle from '../images/space_needle.svg'
import { useOnScreenHeadline, useOnScreenImage } from '../useOnScreen'

export default function Header() {
  const [resume, updateResume] = useState(null)
  const name = useRef()
  const about = useRef()
  const isHeadline = useOnScreenHeadline(name, '-40%')
  const isAbout = useOnScreenHeadline(about, '-40%')
  const isImage = useOnScreenImage(about, '-40%')

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(Prismic.Predicates.at('document.type', 'file'))
      if (response) {
        updateResume(response.results[0].data.resume.url)
        console.log(resume)
      }
    }
    fetchData()
  }, [])

  return (
    <header className="appHeader">
      <div className="container">
        <div className="content">
          <div className="headline" style={{ opacity: isHeadline ? 1 : 0 }}>
            <h1 ref={name}>
              Colton <b>Pemberton</b>
            </h1>
            <p>React.js developer from Seattle, Wa.</p>
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
            {resume && (
              <a className="Download" href={String(resume)} download>
                Download Resume
              </a>
            )}
          </div>
        </div>
        <img src={spaceNeedle} alt="" style={{ left: isImage ? '70%' : '100%' }} />
      </div>
    </header>
  )
}
