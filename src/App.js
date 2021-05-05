import React from 'react'

import Header from './components/Header'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}

export default App
