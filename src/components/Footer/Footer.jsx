import React from 'react'
import Logowhite from '../Logowhite/Logowhite'
import './Footer.scss'
import fb from '../../assets/fb.png'
import tt from '../../assets/tt.png'
import ig from '../../assets/ig.png'
import yt from '../../assets/yt.png'
const Footer = () => {
    return (
        <div className="max-wrapper footer">
            <div className="max-wrapper-content">
                <div className="footer-main">
                    <div className="footer-main-head">
                        <div className="footer-main-head-logo">
                            <Logowhite />
                        </div>
                        <p className="text-p-sm">SUBSCRIBE TO OUR NEWSLETTER</p>
                        <div className="footer-main-head-subscribe">
                            <input placeholder='Enter your email address' />
                            <div className="btn footer-main-head-subscribe-btn">SUBSCRIBE</div>
                        </div>
                    </div>
                    <div className="footer-main-links">
                        <div className="footer-main-links-item">
                            <h2>ABOUT US</h2>
                            <p>Who we are</p>
                            <p>Our Mission</p>
                            <p>Services</p>
                            <p>Our Projects</p>
                            <p>Partnerships</p>
                        </div>
                        <div className="footer-main-links-item">
                            <h2>RESOURCES</h2>
                            <p>Careers</p>
                            <p>Blog</p>
                            <p>My Points</p>
                            <p>Gallery</p>
                            <p>FAQs</p>
                        </div>
                        <div className="footer-main-links-item">
                            <h2>CONTACT US</h2>
                            <div>
                                <span className="material-icons">home</span>
                                <label>8 Jubliee-CMD Road, Magodo, Lagos State</label>
                            </div>
                            <div>
                                <span className="material-icons">phone</span>
                                <label>+2349000099900</label>
                            </div>
                            <div>
                                <span className="material-icons">mail</span>
                                <label>hello@klinlag.ng</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-sub">
                    <div className="footer-sub-connect">
                        <h2>CONNECT WITH US</h2>
                        <div>
                            <img src={fb} alt="fb"/>
                            <img src={tt} alt="tt"/>
                            <img src={ig} alt="ig"/>
                            <img src={yt} alt="yt"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer