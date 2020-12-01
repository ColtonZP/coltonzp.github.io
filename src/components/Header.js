import React from 'react'
import spaceNeedle from '../images/space_needle.svg'

export default function Header() {
  return (
    <header className="appHeader">
      <div className="headerTitles">
        <div className="container">
          <img src={spaceNeedle} alt="Space Needle" />
          <h1>
            <b>Colton</b> Pemberton
          </h1>
          <h2>Web developer based in Seattle, Wa.</h2>
        </div>
      </div>
    </header>
  )
}
