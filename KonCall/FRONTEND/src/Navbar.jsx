import React from 'react';
import './app.scss';

function Navbar() {
    return (
        
         <nav className="navbar" id="navbar">
            <div className="navbar-heading">Kon<span>Call</span></div>
            <div className="links-container">
           
                <a href="#navbar" className="link">Home</a>
                <a href="#navbar" className="link">About</a>
                <a href="#navbar" className="link">Pages</a>
                <a href="#navbar" className="link">Contact</a>
                <button className="login-btn">SignIn / SignUp</button>
            </div>
        </nav>
    );
}

export default Navbar;
