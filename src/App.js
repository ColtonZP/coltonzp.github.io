import React from 'react'

import Header from './components/Header'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  // const { REACT_APP_API_URL } = process.env
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
