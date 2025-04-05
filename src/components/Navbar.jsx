import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">These Stickers</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/shop-policies">Shop Policies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
