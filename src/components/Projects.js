import React, { useState, useEffect } from 'react'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons'

import { Client } from '../prismic-configuration'

// const reactWork = [
//   {
//     img: movieTN,
//     name: 'React Movie Database',
//     desc:
//       "This react project uses an API from 'The Movie Database' to pull currently playing movies as well as movies that are increasingly getting popular. Clicking on a movie poster will also show a detailed view of the movie, such as who acts in it as well as related moves.",
//     live: 'https://coltonzp.github.io/React-Movie-Database/',
//     source: 'https://github.com/ColtonZP/React-Movie-Database',
//   },
//   {
//     img: pizzaTN,
//     name: "Colton's Pizza",
//     desc:
//       'A fictitious Pizza company has allowed me to make a website with React. This site demonstrates cart functionality with Redux as well as a great interactive pizza maker, be sure to check it out!',
//     live: 'https://coltonzp.github.io/react-pizza/',
//     source: 'https://github.com/ColtonZP/react-pizza',
//   },
// ]

// const portfolio = [
//   {
//     img: taskMasterTN,
//     name: 'Taskmaster',
//     desc:
//       "A web app that utilizes Google Map services. With this web app, you can use it as a todo list that has addresses attached to the task. When it's time to plan the day, the API will help determine the most efficient route to get the day done.",
//     live: 'https://coltonzp.github.io/Taskmaster/',
//     source: 'https://github.com/ColtonZP/Taskmaster',
//   },
//   {
//     img: kempletTN,
//     name: 'Kemplet',
//     desc:
//       'A todo app made with React. Allows multiple projects with todo lists inside of them. Utilizes Firebase for users and a database.',
//     live: 'https://kemplet.com',
//     source: 'https://github.com/ColtonZP/kemplet',
//   },
//   {
//     img: coffeeTN,
//     name: 'Coffee Shop',
//     desc:
//       'A fictitious Coffee and Cakes company has allowed me to make a website to show off excellent CSS and JavaScript Skills. This site uses cookies to keep carts saved on the computer.',
//     live: 'https://coltonzp.github.io/Coffee-and-Cakes/',
//     source: 'https://github.com/ColtonZP/coffee-and-cakes',
//   },
// ]

const Projects = () => {
  const [hidden, toggleHidden] = useState(false)
  const [projects, setProjects] = useState(null)
  const [archive, setArchive] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(Prismic.Predicates.at('document.type', 'project'), {
        orderings: '[document.first_publication_date]',
      })
      if (response) {
        setArchive(response.results.filter(res => res.data.archived).reverse())
        setProjects(response.results.filter(res => !res.data.archived).reverse())
      }
    }
    fetchData()
  }, [])

  return (
    <div className="myWork container">
      <h1>Projects</h1>

      <ul className="projects">
        {projects &&
          projects.map(site => (
            <li key={RichText.asText(site.data.name)}>
              <img src={site.data.image.url} alt={RichText.asText(site.data.name)} />
              <div className="work">
                <RichText render={site.data.name} />
                <RichText render={site.data.description} />

                <div className="links">
                  <a target="_blank" rel="noopener noreferrer" href={site.live}>
                    <FontAwesomeIcon icon={faEye} /> Live
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={site.source}>
                    <FontAwesomeIcon icon={faCode} /> Source
                  </a>
                </div>
              </div>
            </li>
          ))}
      </ul>

      <button className="showMore" onClick={() => toggleHidden(!hidden)} type="button">
        {hidden ? 'hide archive -' : 'view archive +'}
      </button>

      {hidden && (
        <ul className="archive">
          {archive.map(site => (
            <li key={RichText.asText(site.data.name)}>
              <RichText render={site.data.name} />
              <div className="links">
                {site.data.source.url && (
                  <a target="_blank" rel="noopener noreferrer" href={site.data.source.url}>
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                )}
                <a target="_blank" rel="noopener noreferrer" href={site.data.live.url}>
                  <FontAwesomeIcon icon={faEye} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Projects
