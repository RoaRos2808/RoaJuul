import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="instagram-logo">
        <img src="/images/Instagram_logo.png" alt="Instagram Logo" />
      </div>
      <a className='insta-text' href="https://www.instagram.com/roaros/" target="_blank" rel="noopener noreferrer">
        roaros
      </a>
      <div className="instagram-logo">
        <img src="/images/Instagram_logo.png" alt="Instagram Logo" />
      </div>
      <a className='insta-text' href="https://www.instagram.com/julieboschh/" target="_blank" rel="noopener noreferrer">
        julieboschh
      </a>
    </footer>
  );
};

export default Footer;