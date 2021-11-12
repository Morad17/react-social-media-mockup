import React from 'react'
import '../assets/css/login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">MeSocials</h3>
                    <span className="login-description">
                        Connect With Freinds From Around On MeSocial
                    </span>
                </div>
                <div className="login-right">
                    <div className="logoin-box">
                        <input paceholder="Email" type="text" className="login-input" />
                        <input paceholder="Password" type="text" className="login-input" />
                        <button className="login-button">Log In</button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-register-button">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
