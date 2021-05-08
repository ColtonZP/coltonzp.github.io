import React, { useState, useEffect, useRef } from 'react'

import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [scroll, setScroll] = useState({ headline: false, about: false })
  const [bgPosY, updateBGPosY] = useState(0)
  const [spacePosY, updateSpacePosY] = useState(window.pageYOffset)
  const [posX, updatePosX] = useState(0)

  const [needleOpacity, updateNeedleOpacity] = useState(1)
  const [headlineOpacity, updateHeadlineOpacity] = useState(1)

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [scroll])

  // const handleScroll = () => {
  //   const headerBottom = 1.5 * window.innerHeight
  //   const halfHeader = window.innerHeight * 0.66
  //   const fromBottom = headerBottom * 0.25

  //   // if width > 550? spaceneedle right

  //   updateSpacePosY(window.pageYOffset)
  //   if (window.pageYOffset <= halfHeader) {
  //     updateBGPosY(0)
  //     updatePosX(0)
  //     updateNeedleOpacity(1)
  //   } else if (window.pageYOffset >= headerBottom - 500) {
  //     updateNeedleOpacity(0)
  //   } else if (window.pageYOffset >= halfHeader) {
  //     updateBGPosY(window.pageYOffset - halfHeader)
  //     updatePosX((window.pageYOffset - halfHeader) * 3.5)
  //     updateNeedleOpacity(((headerBottom - window.pageYOffset) / halfHeader) * 0.5)
  //   }

  //   if (window.pageYOffset >= window.innerHeight * 0.1) {
  //     // console.log((window.innerHeight * 0.1 - window.pageYOffset) / (window.innerHeight * 0.1))
  //     // console.log(window.pageYOffset)
  //     // (200 - 175) / 100 = .25
  //   }
  // }

  return (
    <div className="App">
      <Header
        scroll={scroll}
        spacePosY={spacePosY}
        posX={posX}
        needleOpacity={needleOpacity}
        bgPosY={bgPosY}
      />
      <main>
        <Projects />
        <Footer />
      </main>
    </div>
  )
}

export default App
