import React from 'react'
import spaceNeedle from '../images/space_needle.svg'

export default function Header() {
  return (
    <header className="appHeader">
      <img src={spaceNeedle} alt="Space Needle" />
      <div className="container">
        <h1>
          <b>Colton</b> Pemberton
        </h1>
        <h3>Web developer from Seattle, Wa.</h3>
      </div>
    </header>
  )
}
