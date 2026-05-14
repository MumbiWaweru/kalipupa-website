import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaSpotify, FaSoundcloud } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Music', href: '#music' },
    { name: 'Videos', href: '#videos' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaSpotify />, url: 'https://open.spotify.com/artist/kalipupa' },
    { icon: <FaSoundcloud />, url: 'https://soundcloud.com/user-727292764' },
    { icon: <FiInstagram />, url: 'https://instagram.com/kalipupa_ke' },
    { icon: <FiYoutube />, url: 'https://youtube.com/@Kalipupa13' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo">
            <span style={{ color: 'var(--primary-color)' }}>◆</span> KALI<span style={{ color: 'var(--primary-color)' }}>PUPA</span>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-socials">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer" className="social-icon">
                {social.icon}
              </a>
            ))}
          </div>

          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="mobile-socials">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noreferrer" className="social-icon">
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 2rem 0;
          z-index: 1000;
          transition: var(--transition);
        }

        .navbar-scrolled {
          padding: 1.2rem 0;
          background: rgba(5, 5, 5, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(197, 160, 89, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Bebas Neue', cursive;
          font-size: 2rem;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: 0.15em;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-link {
          font-family: 'Bebas Neue', cursive;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1.1rem;
          letter-spacing: 0.1em;
          transition: var(--transition);
        }

        .nav-link:hover {
          color: var(--primary-color);
        }

        .nav-socials {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          color: var(--text-secondary);
          font-size: 1.2rem;
          transition: var(--transition);
        }

        .social-icon:hover {
          color: var(--primary-color);
          transform: translateY(-2px);
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 1.8rem;
          cursor: pointer;
        }

        /* Mobile Menu Styles */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: var(--bg-color);
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateX(100%);
          transition: var(--transition);
        }

        .mobile-menu-open {
          transform: translateX(0);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .mobile-link {
          font-family: 'Bebas Neue', cursive;
          font-size: 3rem;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: 0.1em;
        }

        .mobile-socials {
          display: flex;
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .nav-links, .nav-socials {
            display: none;
          }
          .menu-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
