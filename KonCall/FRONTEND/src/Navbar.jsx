import React from 'react';
import './app.scss';

function Navbar() {
    return (
        
         <nav class="navbar" id="navbar">
            <div class="navbar-heading">KonCall</div>
            <div class="links-container">
           
                <a href="#navbar" class="link">Home</a>
                <a href="#navbar" class="link">About</a>
                <a href="#navbar" class="link">Pages</a>
                <a href="#navbar" class="link">Contact</a>
                <button class="login-btn">SignIn / SignUp</button>
            </div>
        </nav>
    );
}

export default Navbar;
