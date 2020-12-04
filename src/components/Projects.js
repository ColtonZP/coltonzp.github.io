import React, { useState, useEffect } from 'react'
import Prismic from 'prismic-javascript'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons'

import { Client } from '../prismic-configuration'

import movieTN from '../images/websites/movie.png'
import taskMasterTN from '../images/websites/taskmaster.png'
import pizzaTN from '../images/websites/pizza.png'
import coffeeTN from '../images/websites/coffeeshop.png'
import kempletTN from '../images/websites/kemplet.png'

const reactWork = [
  {
    img: movieTN,
    name: 'React Movie Database',
    desc:
      "This react project uses an API from 'The Movie Database' to pull currently playing movies as well as movies that are increasingly getting popular. Clicking on a movie poster will also show a detailed view of the movie, such as who acts in it as well as related moves.",
    live: 'https://coltonzp.github.io/React-Movie-Database/',
    source: 'https://github.com/ColtonZP/React-Movie-Database',
  },
  {
    img: pizzaTN,
    name: "Colton's Pizza",
    desc:
      'A fictitious Pizza company has allowed me to make a website with React. This site demonstrates cart functionality with Redux as well as a great interactive pizza maker, be sure to check it out!',
    live: 'https://coltonzp.github.io/react-pizza/',
    source: 'https://github.com/ColtonZP/react-pizza',
  },
]

const portfolio = [
  {
    img: taskMasterTN,
    name: 'Taskmaster',
    desc:
      "A web app that utilizes Google Map services. With this web app, you can use it as a todo list that has addresses attached to the task. When it's time to plan the day, the API will help determine the most efficient route to get the day done.",
    live: 'https://coltonzp.github.io/Taskmaster/',
    source: 'https://github.com/ColtonZP/Taskmaster',
  },
  {
    img: kempletTN,
    name: 'Kemplet',
    desc:
      'A todo app made with React. Allows multiple projects with todo lists inside of them. Utilizes Firebase for users and a database.',
    live: 'https://kemplet.com',
    source: 'https://github.com/ColtonZP/kemplet',
  },
  {
    img: coffeeTN,
    name: 'Coffee Shop',
    desc:
      'A fictitious Coffee and Cakes company has allowed me to make a website to show off excellent CSS and JavaScript Skills. This site uses cookies to keep carts saved on the computer.',
    live: 'https://coltonzp.github.io/Coffee-and-Cakes/',
    source: 'https://github.com/ColtonZP/coffee-and-cakes',
  },
  // {
  //   img: vTwinTN,
  //   name: 'American V-Twin',
  //   live: 'https://coltonzp.github.io/American-V-Twin',
  //   source: 'https://github.com/ColtonZP/American-V-Twin',
  //   tags: ['SASS', 'JavaScript', 'React'],
  // },
  {
    name: 'Emu Studios',
    desc:
      'A local artist based out of Oak Harbor has allowed me to remake a website for the modern age.',
    live: 'http://emustudios.com/',
    source: 'https://github.com/ColtonZP/EMUStudios',
  },
  {
    name: 'Tic Tac Toe',
    live: 'https://coltonzp.github.io/tic-tac-toe/',
    source: 'https://github.com/ColtonZP/tic-tac-toe',
  },
  {
    name: "Colton's Pizza v1",
    live: 'https://coltonzp.github.io/Pizza-Time/',
    source: 'https://github.com/ColtonZP/Pizza-Time',
  },
  {
    name: 'Till Calculator',
    live: 'https://coltonzp.github.io/till/',
    source: 'https://github.com/ColtonZP/till',
  },
  {
    name: 'coltonpemberton.com v3',
    live: 'https://dev8173.dqenmskxnkd8y.amplifyapp.com',
    source: '-',
  },
  {
    name: 'coltonpemberton.com v2',
    live: 'https://coltonzp.github.io/Colton-Pemberton-Portfolio-V2/',
    source: 'https://github.com/ColtonZP/Colton-Pemberton-Portfolio-V2',
  },
  {
    name: 'coltonpemberton.com v1',
    live: 'https://coltonzp.github.io/legacyhome/',
    source: 'https://github.com/ColtonZP/legacyhome',
  },
]

const Projects = () => {
  const [hidden, toggleHidden] = useState(false)
  const [doc, setDocData] = React.useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(Prismic.Predicates.at('document.type', 'project'), {
        orderings: '[document.first_publication_date]',
      })
      if (response) {
        setDocData(response.results.reverse())
      }
    }
    fetchData()
  }, [])

  console.log(doc)

  return (
    <div className="myWork container">
      <h1>Projects</h1>

      <ul className="reactWork">
        {reactWork.map(site => (
          <li key={site.name}>
            <img src={site.img} alt={`Thumbnail of ${site.name}`} />
            <div className="work">
              <a target="_blank" rel="noopener noreferrer" href={site.live}>
                <FontAwesomeIcon icon={faEye} /> Live
              </a>
              <a target="_blank" rel="noopener noreferrer" href={site.source}>
                <FontAwesomeIcon icon={faCode} /> Source
              </a>
              <h1>{site.name}</h1>
              <p>{site.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <ul className="vanillaWork">
        {portfolio.slice(0, 3).map(site => (
          <li key={site.name}>
            <div className="imageContainer">
              <img src={site.img} alt={`Thumbnail of ${site.name}`} />
            </div>
            <div className="work">
              <a target="_blank" rel="noopener noreferrer" href={site.live}>
                <FontAwesomeIcon icon={faEye} /> Live
              </a>
              <a target="_blank" rel="noopener noreferrer" href={site.source}>
                <FontAwesomeIcon icon={faCode} /> Source
              </a>
              <h1>{site.name}</h1>
              <p>{site.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <button className="showMore" onClick={() => toggleHidden(!hidden)} type="button">
        {hidden ? 'archive -' : 'archive +'}
      </button>
      {hidden && (
        <>
          <ul className="archive">
            {portfolio.slice(3).map(site => (
              <li key={site.name}>
                <h3>{site.name}</h3>
                <div className="links">
                  {site.source === '-' ? (
                    <span>-</span>
                  ) : (
                    <a target="_blank" rel="noopener noreferrer" href={site.source}>
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  )}
                  <a target="_blank" rel="noopener noreferrer" href={site.live}>
                    <FontAwesomeIcon icon={faEye} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Projects
