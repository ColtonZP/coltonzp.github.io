import React from 'react'

import Header from './components/Header'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
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
