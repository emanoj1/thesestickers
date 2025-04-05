import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/thesestickers-logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="These Stickers Logo" className="logo-img" />
      </Link>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/shop-policies">Shop Policies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

