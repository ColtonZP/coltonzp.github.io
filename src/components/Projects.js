import React, { useState, useEffect, useRef } from 'react'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { Client } from '../prismic-configuration'
import { useOnScreenProjects } from '../useOnScreen'

const Projects = () => {
  const [hidden, toggleHidden] = useState(false)
  const [projects, setProjects] = useState(null)
  const [archive, setArchive] = useState(null)

  const projectsRef = useRef()
  const isOnScreen = useOnScreenProjects(projectsRef)

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
    <div className="myWork container" style={{ opacity: isOnScreen ? 1 : 0 }}>
      <h3 ref={projectsRef}>Projects</h3>

      <ul className="projects">
        {projects &&
          projects.map(site => (
            <li key={RichText.asText(site.data.name)}>
              <h4>{RichText.asText(site.data.name)}</h4>

              <img src={site.data.image.url} alt={RichText.asText(site.data.name)} />

              <div className="links">
                <a target="_blank" rel="noopener noreferrer" href={site.data.live.url}>
                  Live
                </a>
                <a target="_blank" rel="noopener noreferrer" href={site.data.source.url}>
                  Source
                </a>
              </div>

              <div className="tags">{RichText.render(site.data.tags)}</div>

              <RichText render={site.data.description} />
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
              <h5 className="title">{RichText.asText(site.data.name)}</h5>
              <div className="links">
                {site.data.source.url && (
                  <a target="_blank" rel="noopener noreferrer" href={site.data.source.url}>
                    Source
                  </a>
                )}
                <a target="_blank" rel="noopener noreferrer" href={site.data.live.url}>
                  Live
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
