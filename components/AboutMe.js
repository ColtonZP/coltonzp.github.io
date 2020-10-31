import computer from '../public/images/computer.svg'
import mobileViews from '../public/images/mobile_views.svg'
import magnification from '../public/images/magnification.svg'

const empSkills = [
    {
        title: 'Web Development',
        img: computer,
    },
    {
        title: 'Mobile First',
        img: mobileViews,
    },
    {
        title: 'Quality Assurance',
        img: magnification,
    },
]

const AboutMe = () => (
    <div className="aboutMe container">
        <div className="paragraph">
            <h1>About me</h1>
            <p>
                Hey, I’m Colton. I spend a lot of time with Front-end development. With the rapid
                increase in mobile traffic, it’s no question everything should be built from the
                ground up with mobile in mind. Striving for a pixel perfect site is only on the
                surface, nothing should be left out; everything I make is bug-free with the best
                performance possible.
            </p>
        </div>

        <ul>
            {empSkills.map(skill => (
                <li key={skill.title}>
                    <img src={skill.img} alt={skill.title} />
                    <h4>{skill.title}</h4>
                </li>
            ))}
        </ul>
    </div>
)

export default AboutMe
