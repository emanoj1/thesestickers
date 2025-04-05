import React from 'react';
import creatorImage from '../assets/yellow-ring-socialmedia-photo.png'; // creator photo
import './Page.css';

function About() {
  return (
    <div className="page about-page">
      <img
        src={creatorImage}
        alt="Sticker Creator"
        className="creator-photo"
      />

      <div className="about-content">
        <h2>Hi, I'm Manoj, the creator of These Stickers!</h2>
        <p>
          Growing up, I was all about drawing and collecting stickers—seriously, I had tons.
          But life took me down the path of studies, career, and family, and those hobbies
          took a back seat... until now! Since 2020, I've been reconnecting with my creative
          roots, and that's how <strong>These Stickers</strong> was born in September 2024!
        </p>
        <p>
          On this site, you'll find a mix of my own illustrations (mainly!) and a little bit
          commissioned from other artists. And soon, I’ll feature work from talented artists
          worldwide—stay tuned!
        </p>
        <p>
          It’s just me running the show here! This includes drawing, graphic design,
          printing, laminating, cutting, managing the website, packing orders & posting them
          out to you! So, your support and patience means the world to me :)
        </p>
        <p>
          Based in Sydney, Australia, I’m all about spreading sticker love locally (for now)
          but I welcome international buyers too! I hope you find some stickers that speak to you and join me on this fun journey!
          ---
        </p>
        <p>
          Oh, and when I’m not making and sticking stickers,
          I’m podcasting, vlogging, writing, indie publishing, coding full-stack apps, cooking and hitting the gym.
          You can check my ventures here: <a href="https://bento.me/emanoj" target="_blank" rel="noopener noreferrer">(bento.me/emanoj) </a>
        </p>
      </div>
    </div>
  );
}

export default About;

