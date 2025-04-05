import React from 'react';
import stickerImage from '../assets/sticker-collection.jpg';
import './Page.css';

function Home() {
  return (
    <div className="page home">
      <h2>Welcome to My Sticker Shop!</h2>
      <img src={stickerImage} alt="Sticker Collection" className="sticker-image" />
      <p>Explore my handmade sticker designs crafted with love.</p>
      <a href="https://ko-fi.com/your-shop" target="_blank" rel="noopener noreferrer" className="shop-link">
        Shop Now
      </a>
    </div>
  );
}

export default Home;
