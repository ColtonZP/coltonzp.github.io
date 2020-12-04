import React, { useState, useEffect } from 'react'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons'

import { Client } from '../prismic-configuration'

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
              <RichText render={site.data.name} />

              <div className="links">
                <a target="_blank" rel="noopener noreferrer" href={site.data.live.url}>
                  <FontAwesomeIcon icon={faEye} /> Live
                </a>
                <a target="_blank" rel="noopener noreferrer" href={site.data.source.url}>
                  <FontAwesomeIcon icon={faCode} /> Source
                </a>
              </div>

              <RichText render={site.data.description} />
              {/* {site.data.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))} */}
              <div className="tags">{RichText.render(site.data.tags)}</div>
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
