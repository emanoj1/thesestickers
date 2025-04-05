import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} My Handmade Stickers</p>
      <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
    </footer>
  );
}

export default Footer;
