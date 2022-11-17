import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import signup_img from '../../assets/signup.PNG'
import './Signup.scss'
import { Helmet } from "react-helmet";

const Signup = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    return (
        <div className="max-wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Cleanhub Sign Up</title>
                <link rel="canonical" href="https://cleanhubb.netlify.app/" />
            </Helmet>
            <div className="max-wrapper-content">
                <Navbar />
            </div>
            <div className="signup">
                <div className="signup-content">
                    <div className="signup-content-max">
                        <div className="signup-content-max_width">
                            <h1 className="heading-lg">Getting Started</h1>
                            <div className="signup-content-row">
                                <Input type="text" labelText="First Name" value={firstname} setValue={(e) => setFirstname(e.target.value)} />
                            </div>
                            <div className="signup-content-row">
                                <Input type="text" labelText="Last Name" value={lastname} setValue={(e) => setLastname(e.target.value)} />
                            </div>
                            <div className="signup-content-row">
                                <Input type="number" labelText="Phone Number" value={phoneNumber} setValue={(e) => setPhoneNumber(e.target.value)} />
                            </div>
                            <div className="signup-content-row">
                                <Input type="email" labelText="Email" value={email} setValue={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="signup-content-row">
                                <Input type="password" labelText="Password" value={password} setValue={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="signup-content-row">
                                <Input type="password" labelText="Confirm Password" value={confirmPassword} setValue={(e) => setConfirmPassword(e.target.value)} />
                            </div>

                            <div className="signup-content-password_service">
                                <div className="btn-sm signup-content-password_service-btn_s">SIGN UP</div>
                                <div className="signup-content-password_service-remember_me">
                                    <span>Remember me</span>
                                    <Button />
                                </div>
                            </div>
                            <div className="signup-content-providers">
                                <div className="signup-content-providers-btn">
                                    <div className="signup-content-providers-btn_g">
                                        <div>
                                            <span>G</span>
                                            <span>O</span>
                                            <span>O</span>
                                            <span>G</span>
                                            <span>L</span>
                                            <span>E</span>
                                        </div>
                                    </div>
                                    <div className="signup-content-providers-btn_f">FACEBOOK</div>
                                </div>
                            </div>
                            <div className="signup-content-getstarted">
                                <span>Already have an account? </span><Link to="/signin">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="signup-img">
                    <img src={signup_img} alt="signup" />
                </div>
            </div>
        </div>
    )
}

export default Signup