import React from 'react';
import './SocialMediaLinks.css'; // Style your social media links

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img src="assets/facebook-logo.jpg"  alt="Facebook" className="social-logo" />
      </a>
      <a href="https://x.com/Farooq85851" target="_blank" rel="noopener noreferrer">
        <img src="assets/twitter-logo.jpg" alt="Twitter" className="social-logo" />
      </a>
      <a href="https://www.instagram.com/shaik_farooq77/" target="_blank" rel="noopener noreferrer">
        <img src="assets/instagram-logo.jpg" alt="Instagram" className="social-logo" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img src="assets/youtube-logo.jpg" alt="YouTube" className="social-logo" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
