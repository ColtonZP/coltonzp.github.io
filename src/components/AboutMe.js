import React from 'react'
import computer_work from '../images/computer_work.svg'
import computer from '../images/computer.svg'
import responsive from '../images/responsive_design.svg'
import qa from '../images/qa.svg'

const empSkills = [
  {
    title: 'Web Development',
    class: 'WebDevelopment',
    desc:
      "A strong skillset and endless eagerness to learn something new, it's easy to get any project built from the ground up and deployed to the web.",
    img: computer,
  },
  {
    title: 'Responsive',
    class: 'Responsive',
    desc:
      'The rapid increase in mobile traffic, it’s no question everything should be built from the ground up with mobile in mind.',
    img: responsive,
  },
  {
    title: 'Quality Assurance',
    class: 'QualityAssurance',
    desc:
      'Striving for a pixel perfect site is only on the surface, nothing should be left out; I create the cleanest code that is bug-free and great performance.',
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
          I’m Colton, and I spend a lot of time with Front-end development. Coding has taken over my
          life since I wrote my first line of code: console.log(&#34;Hello, World!&#34;). Since then
          I’ve worked hard to make the internet a better place than when I found it. Everything I
          make has the goal of making people&#39;s life easier in the vastly expanding digital age.
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
          <p>{skill.desc}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default AboutMe
