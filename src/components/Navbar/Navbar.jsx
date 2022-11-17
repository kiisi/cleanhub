import React, {useState} from 'react'
import logo from '../../assets/logo.png'
import './Navbar.scss'
import { Link } from 'react-router-dom'

// 
const Navbar = ({ navLinkColor }) => {

  const [click, setClick] = useState(false)

  const clickHandler = () => setClick(true)
  const closeHandler = () => setClick(false)

  return (
    <>
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
        <div className="nav-menubar">
          <span className="material-icons" onClick={clickHandler}>menu</span>
        </div>
      </nav>

      <div className={click ? "mobile-nav show" : "mobile-nav"}>
        <div className="mobile-nav-items">
          <div className="mobile-nav-items-item"><Link to="/" className="navlink-color-w">HOME</Link></div>
          <div className="mobile-nav-items-item"><Link to="/" className="navlink-color-w">ABOUT US</Link></div>
          <div className="mobile-nav-items-item"><Link to="/" className="navlink-color-w">HOW IT WORKS</Link></div>
          <div className="mobile-nav-items-item"><Link to="/" className="navlink-color-w">CONTACT</Link></div>
          <div className="mobile-nav-items-item"><Link to="/" className="navlink-color-w">BLOG</Link></div>
        </div>
        <div className="mobile-nav-close">
          <div className={click ? "mobile-nav-close--times show" : "mobile-nav-close--times"} onClick={closeHandler}>
            <span className="material-icons">close</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar