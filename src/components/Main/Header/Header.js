import React from 'react'
import './Header.css'

import appstore from '../../Images/appstore.png'
import playstore from '../../Images/playstore.png'
const Header = () => {
  return (
    <header className="k-header">
      <div className="header-container">
        <div className="header-main">
          <h1>Market place for custom made wears</h1>
        </div>
        <div className="header-sub">
          <p>Buy and sell custom made wears in a market without boundaries</p>
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
