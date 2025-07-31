import React, { useState, useEffect } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.png' 
import Sitemap from './Sitemap';
const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array ensures this effect runs only once

  const openSitemap = (e) => {
    e.preventDefault();
    setIsSitemapOpen(true);
  };

  const closeSitemap = () => {
    setIsSitemapOpen(false);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-main">
        <div className="footer-brand">
          <p className="footer-company">JS Infotech Pvt. Ltd.</p>
          <p className="footer-address">#4, 1st Main Road, MEI Layout, Bangalore, Karnataka-State, India- 560073</p>       
          <br />
          <p className="footer-phone">Contact : <a href="tel:+919901491200">+91-9901491200</a></p>
        </div>
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products/acb">Air Circuit Breakers (ACB)</Link></li>
              <li><Link to="/products/mccb">Moulded Case Circuit Breakers (MCCB)</Link></li>
              <li><Link to="/products/mcb">Miniature Circuit Breakers (MCB)</Link></li>
              <li><Link to="/products">More products &rarr;</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/Works">Indian Railways</Link></li>
              <li><Link to="/Works">Trading & Sourcing</Link></li>
              <li><Link to="/Works">More services &rarr;</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/Works">Our works</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <h4>Connect Us</h4>
            <ul>
              <li className="footer-email">Email : <a href="mailto:info@jsinfotech.co" target="_blank" rel="noopener noreferrer">info@jsinfotech.co</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-cert">
          <img src={logo} alt="AICPA SOC" height="40" />
        </div>
        <div className="footer-links">
          <a href="#sitemap" onClick={openSitemap}>Sitemap</a>
          <Link to="/terms">Terms of service</Link>
          <Link to="/privacy">Privacy policy</Link>
          {/* <Link to="/cookies">Cookie settings</Link> */}
          <Link to="/donotsell">Do Not Sell or Share My Personal Info</Link>
        </div>
        <div className="footer-social">
          <a className="social-icon facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="JS Infotech on Facebook"><i className="fab fa-facebook-f"></i></a>
          <a className="social-icon twitter" href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="JS Infotech on X"><i className="fab fa-x-twitter"></i></a>
          <a className="social-icon linkedin" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="JS Infotech on LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a className="social-icon instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="JS Infotech on Instagram"><i className="fab fa-instagram"></i></a>
          <a className="social-icon youtube" href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="JS Infotech on Youtube"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      </footer>
      <button 
        onClick={scrollToTop} 
        className={`back-to-top-btn ${showBackToTop ? 'show' : ''}`} 
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
      {isSitemapOpen && <Sitemap onClose={closeSitemap} />}
    </>
  )
}

export default Footer