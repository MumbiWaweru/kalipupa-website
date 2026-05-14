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
        <h2 className="footer-logo">
          <span style={{ color: 'var(--primary-color)', fontSize: '1.2em' }}>◆</span> 
          KALI<span style={{ color: 'var(--primary-color)' }}>PUPA</span>
        </h2>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'var(--transition)' }}>
              {social.icon}
            </a>
          ))}
        </div>
        
        <p style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.1em', fontSize: '0.9rem', color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} KALIPUPA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
