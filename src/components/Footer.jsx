import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo or Company Name */}
        <div className="footer-left">
          <h3>ABCD</h3>
          <p> Location: Tech Avenue, City </p>
            <p> Email: contact@company.com </p>
            <p> Phone: 555-789-0123</p>
        </div>

        {/* Center: Links */}
        <nav className="footer-center">
          <ul className="footer-links">
            <li>
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service">
              Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact">
               Contact Us
              </Link>
            </li>
          </ul>
        </nav>

      
        <div className="footer-right">
          <p>Follow us:</p>
          <div className="social-icons">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
