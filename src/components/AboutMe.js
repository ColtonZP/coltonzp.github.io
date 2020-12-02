import React from 'react'
import space from '../images/space_needle.svg'
import computer from '../images/computer.svg'
import mobileViews from '../images/mobile_views.svg'
import magnification from '../images/magnification.svg'

const empSkills = [
  {
    title: 'Web Development',
    class: 'WebDevelopment',
    img: computer,
  },
  {
    title: 'Responsive',
    class: 'Responsive',
    img: mobileViews,
  },
  {
    title: 'Quality Assurance',
    class: 'QualityAssurance',
    img: magnification,
  },
]

const AboutMe = () => (
  <div className="aboutMe container">
    <div className="blurb">
      <h1>About me</h1>
      <p>
        Hey, I’m Colton. I spend a lot of time with Front-end development. With the rapid increase
        in mobile traffic, it’s no question everything should be built from the ground up with
        mobile in mind. Striving for a pixel perfect site is only on the surface, nothing should be
        left out; everything I make is bug-free with the best performance possible.
      </p>
    </div>

    <img className="worker" src={space} alt="" />

    <ul>
      {empSkills.map(skill => (
        <li key={skill.title} className={skill.class}>
          <img src={skill.img} alt={skill.title} />
          <h4>{skill.title}</h4>
        </li>
      ))}
    </ul>
  </div>
)

export default AboutMe
