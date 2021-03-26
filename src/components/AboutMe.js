import React from 'react'
import computer_work from '../images/computer_work.svg'

import { empSkills } from '../content/skills'
import colton_pemberton_resume from '../content/colton_pemberton_resume.pdf'

const AboutMe = () => (
  <div className="aboutMe container">
    <div className="blurb">
      <div className="text">
        <h2>
          Hello, there!
          <span role="img" aria-label="wave">
            👋
          </span>
        </h2>
        <p>
          I&#39;m Colton, and I spend a lot of time in code. I work hard to make the internet a
          better place than when I found it. I&#39;m seeking a full time position in web
          development.
        </p>
        <a className="Download" href={colton_pemberton_resume} download>
          Download Resume
        </a>
      </div>

      <img className="worker" src={computer_work} alt="" />
    </div>

    <ul>
      {empSkills.map(skill => (
        <li key={skill.title} className={skill.class}>
          <img src={skill.img} alt={skill.title} />
          <span className="cardTitle">{skill.title}</span>
          <p>{skill.desc}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default AboutMe
