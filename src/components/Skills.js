import { skills } from '../content/skills'

const Skills = () => (
  <div className="skills">
    <ul className="container">
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
)

export default Skills
