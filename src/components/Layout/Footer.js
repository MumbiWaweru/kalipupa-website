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
          <span style={{ color: 'var(--primary-color)' }}>◆</span> KALI<span style={{ color: 'var(--primary-color)' }}>PUPA</span>
        </h2>
        
        <div className="footer-socials">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noreferrer" className="footer-icon">
              {social.icon}
            </a>
          ))}
        </div>
        
        <p className="copyright">
          © {new Date().getFullYear()} KALIPUPA. ALL RIGHTS RESERVED.
        </p>
      </div>

      <style jsx>{`
        .footer {
          padding: 6rem 0;
          background-color: var(--bg-color);
          border-top: 1px solid rgba(197, 160, 89, 0.05);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        .footer-logo {
          font-size: 2.5rem;
          color: var(--text-primary);
          letter-spacing: 0.2em;
        }

        .footer-socials {
          display: flex;
          gap: 2rem;
        }

        .footer-icon {
          color: var(--text-secondary);
          font-size: 1.5rem;
          transition: var(--transition);
        }

        .footer-icon:hover {
          color: var(--primary-color);
          transform: translateY(-3px);
        }

        .copyright {
          font-family: 'Bebas Neue', cursive;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
          color: var(--text-dim);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
