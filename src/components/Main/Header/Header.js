import React from 'react'
import './Header.css'

import appstore from '../../Images/appstore.png'
import playstore from '../../Images/playstore.png'
const Header = () => {
  return (
    <header className="k-header">
      <div className="header-container">
        <div className="header-main">
          <h1>Get Bespoke wears</h1> 
          <h1>On-demand</h1>
        </div>
        <div className="header-sub">
          <p>Effortlessly buy and sell Bespoke wears in a market without boundaries without fear of trust and delays in delivery. </p>
        </div>
        <div className="getapp">
          <div className="appstore"><img src={appstore} alt='appstore'/></div>
          <div className="playstore"><img src={playstore} alt='playstore'/></div>
        </div>
      </div>
    </header>
  )
}

export default Header
