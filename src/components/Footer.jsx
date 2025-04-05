import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} These Stickers</p>
      <a href="https://www.instagram.com/thesestickers/" target="_blank" rel="noopener noreferrer">Instagram</a>
    </footer>
  );
}

export default Footer;
