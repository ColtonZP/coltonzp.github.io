import { useState, useEffect } from 'react'

import Prismic from 'prismic-javascript'

import { Client } from '../prismic-configuration'

export function Header() {
    const [resume, updateResume] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await Client.query(Prismic.Predicates.at('document.type', 'file'))
            if (response) {
                updateResume(response.results[0].data.resume.url)
                console.log(resume)
            }
        }
        fetchData()
    }, [])

    return (
        <header className="appHeader">
            <div className="container">
                <div className="content">
                    <div className="headline">
                        <h1>
                            Colton <b>Pemberton</b>
                        </h1>
                        <p>Full stack Java/React.js Developer</p>
                        <span className="hashtag">#openforwork</span>
                    </div>

                    <div className="about">
                        <h3>
                            Hello, there!{' '}
                            <span role="img" aria-label="wave">
                                👋
                            </span>
                        </h3>
                        <p>
                            I&#39;m Colton, I spend a lot of time writing code. I work hard to make the internet a
                            better place than when I found it. I&#39;m seeking a full time position in web development.
                        </p>
                        {resume && (
                            <a className="Download" href={String(resume)} download>
                                Download Resume
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
