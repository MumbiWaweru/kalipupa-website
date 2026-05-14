import React from 'react';
import { FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaSpotify, FaSoundcloud } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaSpotify />, url: 'https://open.spotify.com/artist/kalipupa' },
    { icon: <FaSoundcloud />, url: 'https://soundcloud.com/user-727292764' },
    { icon: <FiInstagram />, url: 'https://instagram.com/kalipupa_ke' },
    { icon: <FiYoutube />, url: 'https://youtube.com/@Kalipupa13' },
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="logo">
          <span className="logo-symbol">◆</span> 
          <span className="logo-text">KALI<span className="gold">PUPA</span></span>
        </div>
        
        <div className="footer-socials">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noreferrer" className="footer-icon">
              {social.icon}
            </a>
          ))}
        </div>
        
        <p className="copyright">
          © {new Date().getFullYear()} KALIPUPA. ARCHIVING THE NAIROBI SOUND.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
