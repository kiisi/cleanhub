import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import login from '../../assets/login_img.PNG'
import './Login.scss'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
const Login = () => {


    return (
        <div className="page-min-height">
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
                                    <Input type="email" labelText="Email" />
                                </div>
                                <div className="login-content-row">
                                    <Input type="password" labelText="Password" />
                                </div>
                                <div className="login-content-password_service">
                                    <p>Forgot Password?</p>
                                    <div>
                                        <span>Remember me</span>
                                        <Button />
                                    </div>
                                </div>
                                <div className="login-content-providers">
                                    <div className="btn-sm login-content-providers-btn_s">SIGN UP</div>
                                    <div className="btn-sm login-content-providers-btn_g">
                                        <div>
                                            <span>G</span>
                                            <span>O</span>
                                            <span>O</span>
                                            <span>G</span>
                                            <span>L</span>
                                            <span>E</span>
                                        </div>
                                    </div>
                                    <div className="btn-sm login-content-providers-btn_f">FACEBOOK</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login