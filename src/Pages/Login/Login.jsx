import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import login from '../../assets/login_img.PNG'
import './Login.scss'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {Link} from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    return (

            <div className="max-wrapper">
                <div className="max-wrapper-content">
                    <Navbar />
                </div>
                <div className="login">
                    <div className="login-img">
                        <img src={login} alt="login" />
                    </div>
                    <div className="login-content">
                        <div className="max-wrapper-content">
                            <div className="login-content-max_width">
                                <h1 className="heading-lg">Welcome Back</h1>
                                <div className="login-content-row">
                                    <Input type="email" labelText="Email" value={email} setValue={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="login-content-row">
                                    <Input type="password" labelText="Password" value={password} setValue={(e) => setPassword(e.target.value)} />
                                </div>

                                <div className="login-content-password_service">
                                    <div className="btn-sm login-content-password_service-btn_s">SIGN IN</div>
                                    <div className="login-content-password_service-remember_me">
                                        <span>Remember me</span>
                                        <Button />
                                    </div>
                                </div>
                                <div className="login-content-providers">
                                    <div>OR</div>
                                    <div className="login-content-providers-btn_g">
                                        <div>
                                            <span>G</span>
                                            <span>O</span>
                                            <span>O</span>
                                            <span>G</span>
                                            <span>L</span>
                                            <span>E</span>
                                        </div>
                                    </div>
                                    <div className="login-content-providers-btn_f">FACEBOOK</div>
                                </div>
                                <div className="login-content-getstarted">
                                    <span>New to Cleanhub? </span><Link to="/signup">Create account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login