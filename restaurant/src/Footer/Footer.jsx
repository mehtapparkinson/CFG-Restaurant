import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logos">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png" alt="Instagram" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="Twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
