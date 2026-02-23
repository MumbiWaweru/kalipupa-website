// src/components/Layout/Navbar.js - NAIROBI HIPHOP ARTIST NAVBAR
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiInstagram, FiYoutube, FiTwitter, FiMail } from 'react-icons/fi';
import { FaSpotify, FaSoundcloud, FaTiktok, FaFacebookF } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = ['home', 'about', 'music', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'music', label: 'Music' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: <FiInstagram />, url: 'https://www.instagram.com/nurahkalipupa?igsh=OGZkcHU0M2w5Y3k5', label: 'Instagram' },
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/share/17zkF76QGE/', label: 'Facebook' },
    { icon: <FiYoutube />, url: 'https://youtube.com/@kalipupa2324?si=gkjrNwnSKihw3oij', label: 'YouTube' },
    { icon: <FaTiktok />, url: 'https://www.tiktok.com/@kalipupa?_r=1&_t=ZS-935xFgX0kTv', label: 'TikTok' },
    { icon: <FaSpotify />, url: 'https://open.spotify.com/artist/kalipupa', label: 'Spotify' },
    { icon: <FaSoundcloud />, url: 'https://soundcloud.com/user-727292764', label: 'SoundCloud' },
  ];

  return (
    <>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.2rem 0;
          background: ${scrolled ? 'rgba(15, 15, 15, 0.98)' : 'rgba(15, 15, 15, 0.9)'};
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(124, 58, 237, 0.15);
          transition: all 0.3s ease;
          box-shadow: ${scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none'};
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .logo {
          font-size: 1.9rem;
          font-weight: 800;
          color: #FFFFFF;
          cursor: pointer;
          letter-spacing: 2px;
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-transform: uppercase;
        }

        .logo::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #7C3AED, #A855F7, #EC4899);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .logo:hover::after {
          transform: scaleX(1);
        }

        .logo-tag {
          font-size: 0.7rem;
          color: #A855F7;
          background: rgba(168, 85, 247, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
          border: 1px solid rgba(168, 85, 247, 0.3);
          margin-left: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-menu {
          display: flex;
          gap: 2.5rem;
        }

        .nav-item {
          background: none;
          border: none;
          color: ${activeSection === 'home' ? '#A855F7' : '#CCCCCC'};
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-item:hover {
          color: #A855F7;
        }

        .nav-item.active {
          color: #A855F7;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #7C3AED, #A855F7, #EC4899);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-item:hover::after,
        .nav-item.active::after {
          width: 100%;
        }

        .nav-social-links {
          display: flex;
          gap: 0.8rem;
          margin-left: 2rem;
        }

        .nav-social-link {
          width: 40px;
          height: 40px;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #A855F7;
          transition: all 0.3s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .nav-social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }

        .nav-social-link:hover::before {
          opacity: 0.2;
        }

        .nav-social-link:hover {
          background: rgba(124, 58, 237, 0.15);
          border-color: rgba(124, 58, 237, 0.4);
          color: #C084FC;
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 6px 16px rgba(124, 58, 237, 0.3);
        }

        .nav-social-link.soundcloud:hover {
          border-color: rgba(255, 85, 0, 0.4);
          color: #FF5500;
        }

        .nav-social-link.spotify:hover {
          border-color: rgba(30, 215, 96, 0.4);
          color: #1DB954;
        }

        .nav-social-link.youtube:hover {
          border-color: rgba(255, 0, 0, 0.4);
          color: #FF0000;
        }

        .nav-social-link.instagram:hover {
          border-color: rgba(255, 49, 108, 0.4);
          color: #E1306C;
        }

        .nav-social-link.facebook:hover {
          border-color: rgba(24, 119, 242, 0.4);
          color: #1877F2;
        }

        .nav-social-link.tiktok:hover {
          border-color: rgba(254, 44, 85, 0.4);
          color: #FE2C55;
        }

        .menu-toggle {
          display: none;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          width: 46px;
          height: 46px;
          border-radius: 50%;
          color: #A855F7;
          font-size: 1.4rem;
          cursor: pointer;
          transition: all 0.3s ease;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .menu-toggle:hover {
          border-color: #A855F7;
          color: #C084FC;
          transform: scale(1.1);
          background: rgba(124, 58, 237, 0.2);
        }

        .mobile-menu {
          position: fixed;
          top: 75px;
          left: 0;
          right: 0;
          background: rgba(15, 15, 15, 0.98);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-bottom: 1px solid rgba(124, 58, 237, 0.2);
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-nav-item {
          background: none;
          border: none;
          color: #CCCCCC;
          font-size: 1.05rem;
          text-align: left;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          cursor: pointer;
          transition: color 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .mobile-nav-item:hover {
          color: #A855F7;
        }

        .mobile-social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 1024px) {
          .nav-menu, .nav-social-links {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 1.5rem;
          }

          .logo {
            font-size: 1.6rem;
          }

          .logo-tag {
            display: none;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            KALIPUPA
            <span className="logo-tag">Nairobi Hip Hop</span>
          </div>

          <div className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="nav-social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`nav-social-link ${link.label.toLowerCase()}`}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="mobile-nav-item"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}

          <div className="mobile-social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`nav-social-link ${link.label.toLowerCase()}`}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;