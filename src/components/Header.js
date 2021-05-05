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
          <p>Web developer from Seattle, Wa.</p>
        </div>
        <img src={spaceNeedle} alt="Space Needle" />
      </div>
    </header>
  )
}
