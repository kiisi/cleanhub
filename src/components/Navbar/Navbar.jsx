import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.scss'
import {Link} from 'react-router-dom'

const Navbar = ({navlinkColor}) => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="nav-logo"/>
      </div>
      <div className="nav-items" style={{color: navlinkColor ? navlinkColor : 'black'}}>
        <div className="nav-items-item"><Link to="/">HOME</Link></div>
        <div className="nav-items-item">ABOUT US</div>
        <div className="nav-items-item">HOW IT WORKS</div>
        <div className="nav-items-item">CONTACT</div>
        <div className="nav-items-item">BLOG</div>
      </div>
    </nav>
  )
}

export default Navbar