import React from 'react'
import '../assets/css/register.css'

const Register = () => {
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
                    <div className="login-box">
                        <input placeholder="Username" type="text" className="login-input" />
                        <input placeholder="Email" type="text" className="login-input" />
                        <input placeholder="Password" type="text" className="login-input" />
                        <button className="login-button">Sign Up</button>
                        <span className="login-forgot">Forgot Password?</span>
                        <button className="login-register-button">Register Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
