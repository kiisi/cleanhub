import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.scss'
import { Link } from 'react-router-dom'

// 
const Navbar = ({navLinkColor}) => {


  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="nav-logo" />
      </div>
      <div className="nav-items">
        <div className="nav-items-item"><Link to="/" className={navLinkColor ? "navlink-color-w" : "navlink-color-b"}>HOME</Link></div>
        <div className="nav-items-item"><Link to="/" className={navLinkColor ? "navlink-color-w" : "navlink-color-b"}>ABOUT US</Link></div>
        <div className="nav-items-item"><Link to="/" className={navLinkColor ? "navlink-color-w" : "navlink-color-b"}>HOW IT WORKS</Link></div>
        <div className="nav-items-item"><Link to="/" className={navLinkColor ? "navlink-color-w" : "navlink-color-b"}>CONTACT</Link></div>
        <div className="nav-items-item"><Link to="/" className={navLinkColor ? "navlink-color-w" : "navlink-color-b"}>BLOG</Link></div>
      </div>
    </nav>
  )
}

export default Navbar