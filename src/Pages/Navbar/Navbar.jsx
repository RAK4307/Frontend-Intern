import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo2.png' // Import the logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" height="40" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/products">Products</Link> 
        <Link to="/works">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar