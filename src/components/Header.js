import React from 'react'
import spaceNeedle from '../images/space_needle.svg'

export default function Header() {
  return (
    <header className="appHeader">
      <div className="container">
        <div className="headline">
          <h1>
            <b>Colton</b> Pemberton
          </h1>
          <h2>Web developer from Seattle, Wa.</h2>
        </div>
        <img src={spaceNeedle} alt="Space Needle" />
      </div>
    </header>
  )
}
