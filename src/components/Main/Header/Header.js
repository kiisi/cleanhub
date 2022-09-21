import React from 'react'
import './Header.css'

import appstore from '../../Images/appstore.png'
import playstore from '../../Images/playstore.png'
const Header = () => {
  return (
    <header className="k-header">
      <div className="header-container">
        <div className="header-main">
          <h1>Shop for bespoke wears</h1>
          <h1>Right from ur smart phone</h1>
        </div>
        <div className="header-sub">
          <p>A marketplace for fashion designers in Africa to help meet the increasing demand for bespoke wears
</p>
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
