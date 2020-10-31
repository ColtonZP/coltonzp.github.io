const skills = [
    'JavaScript',
    'React',
    'Next.js',
    'HTML',
    'CSS',
    'SCSS',
    'Redux',
    'MobX',
    'Java',
    'Git',
    'Firebase',
    'Strapi',
]

const Skills = () => (
    <div className="skills container">
        <h1>Skills</h1>
        <ul>
            {skills.map(skill => (
                <li key={skill}>{skill}</li>
            ))}
        </ul>
    </div>
)

export default Skills
