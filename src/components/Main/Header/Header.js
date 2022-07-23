import React from 'react'
import './Header.css'

import appstore from '../../Images/appstore.png'
import playstore from '../../Images/playstore.png'
const Header = () => {
  return (
    <header className="k-header">
      <div className="header-container">
        <div className="header-main">
          <h1>Buy and sell</h1>
          <h1>Custom-made clothing</h1>
        </div>
        <div className="header-sub">
          <p>A marketplace for fashion designers and fashion customers</p>
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
