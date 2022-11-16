import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import './Hero.scss'
import heroimg from '../../../assets/heroimg.png'

const Hero = () => {
  return (
    <div className="hero-wrapper max-wrapper">
      <div className="max-wrapper-content ">
        <Navbar navlinkColor={'#fff'}/>
        <div className="hero">
          <div className="hero-content">
            <h1>RE-USE THE <span>REFUSE</span></h1>
            <p>All for the love of a cleaner Lagos and a better environment, let's put the recyclable trash to good use. Become an active trash depositor and stand a chance to get a reward or maybe you just want those recyclable trash for your business... WE'VE GOT YOU COVERED.
            </p>
            <div className="hero-content-btn">
              <div className="btn hero-content-btn-start">GET STARTED</div>
              <div className="btn hero-content-btn-sign">SIGN IN</div>
            </div>
          </div>
          <div className="hero-img">
            <img src={heroimg} alt="hero img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero