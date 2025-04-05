import React from 'react';
import stickerImage from '../assets/sticker-collection.jpg';
import kofiLogo from '../assets/kofi_logo.png';
import './Page.css';

function Home() {
  return (
    <div className="page home">
      <h2>Welcome! Explore my handmade sticker art, crafted with love!</h2>
      <img src={stickerImage} alt="Sticker Collection" className="sticker-image" />

      <a
        href="https://ko-fi.com/emanoj/shop/thesestickers"
        target="_blank"
        rel="noopener noreferrer"
        className="kofi-button"
      >
        <img src={kofiLogo} alt="Shop on Ko-fi" className="kofi-logo" />
        <div className="kofi-label">Visit My Shop</div>
      </a>
    </div>
  );
}

export default Home;

