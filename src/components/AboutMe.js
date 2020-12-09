import React from 'react'
import computer_work from '../images/computer_work.svg'
import computer from '../images/computer.svg'
import responsive from '../images/responsive_design.svg'
import qa from '../images/qa.svg'

const empSkills = [
  {
    title: 'Web Development',
    class: 'WebDevelopment',
    img: computer,
  },
  {
    title: 'Responsive',
    class: 'Responsive',
    img: responsive,
  },
  {
    title: 'Quality Assurance',
    class: 'QualityAssurance',
    img: qa,
  },
]

const AboutMe = () => (
  <div className="aboutMe container">
    <div className="blurb">
      <div className="text">
        <h1>
          Hello, there!{' '}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p>
          I’m Colton. I spend a lot of time with Front-end development. With the rapid increase in
          mobile traffic, it’s no question everything should be built from the ground up with mobile
          in mind. Striving for a pixel perfect site is only on the surface, nothing should be left
          out; everything I make is bug-free with the best performance possible.
        </p>
        {/* <a
        className="Download"
        href={resumeDL}
        download
        onClick={props.analytics.logEvent('resume_downloaded')}
        >
          Download Resume
        </a> */}
      </div>

      <img className="worker" src={computer_work} alt="" />
    </div>

    <ul>
      {empSkills.map(skill => (
        <li key={skill.title} className={skill.class}>
          <img src={skill.img} alt={skill.title} />
          <h2>{skill.title}</h2>
        </li>
      ))}
    </ul>
  </div>
)

export default AboutMe
