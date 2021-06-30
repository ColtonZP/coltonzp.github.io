import React from 'react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Projects />
                <Footer />
            </main>
        </div>
    )
}

export default App
