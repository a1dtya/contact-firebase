import React from 'react';
import Image from 'next/image';
import Logo from '../assets/images/title.webp';
import { GiPalmTree } from "react-icons/gi";


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Image (Logo) */}
        <div className="header-left">
        <GiPalmTree style={{width:'50px', height:'50px'}} />
        </div>

        {/* Center Navigation Links */}
        <nav className="header-center">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Right Login/Sign In */}
        <div className="header-right">
        
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
