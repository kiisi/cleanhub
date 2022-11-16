import React from 'react'
import './Logowhite.scss'
import cleanhubwhite from '../../assets/logo-w.png'

const Logowhite = () => {
  return (
    <div className="cleanhub-logo">
        <img src={cleanhubwhite} alt="Cleanhub white logo"/>
        <span>cleanhub</span>
    </div>
  )
}

export default Logowhite