import React from 'react'
import computer_work from '../images/computer_work.svg'

import { empSkills } from '../content/skills'
import colton_pemberton_resume from '../content/colton_pemberton_resume.pdf'

const AboutMe = () => (
  <div className="aboutMe container">
    <div className="blurb">
      <div className="text">
        <h3>
          Hello, there!
          <span role="img" aria-label="wave">
            👋
          </span>
        </h3>
        <p>
          I’m Colton, and I spend a lot of time with Front-end development. Coding has taken over my
          life since writing my first line of code:{' '}
          <code>console.log(&#34;Hello, World!&#34;)</code>. Since then I’ve worked hard to make the
          internet a better place than when I found it. Everything I make has the goal of making
          people&#39;s life easier in the vastly expanding digital age.
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
          <h4>{skill.title}</h4>
          <p>{skill.desc}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default AboutMe
