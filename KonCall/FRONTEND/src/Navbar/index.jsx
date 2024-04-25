import React from 'react'
import './index.scss';
import 'boxicons'

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
            <div className="navbar-heading">
                
            Kon<span>Call</span></div>
            <div className="links-container">
           
                <a href="#navbar" className="link">Home</a>
                <a href="#navbar" className="link">About</a>
                <a href="#navbar" className="link">Pages</a>
                <a href="#navbar" className="link">Contact</a>
                <button className="login-btn">SignUp</button>
                <button className="login-btn">SignIn</button>
            </div>
        </nav>
  )
}
