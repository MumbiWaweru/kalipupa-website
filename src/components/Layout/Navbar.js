import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaSpotify, FaSoundcloud } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
            <span style={{ color: 'var(--primary-color)', fontSize: '1.5em' }}>◆</span> 
            KALI<span style={{ color: 'var(--primary-color)' }}>PUPA</span>
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
            ))}
          </div>

          <div className="nav-socials">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer" className="social-icon">
                {social.icon}
              </a>
            ))}
          </div>

          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.8rem' }}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`} style={{
        position: 'fixed', top: 0, right: 0, width: '100%', height: '100vh',
        background: 'var(--bg-color)', zIndex: 999, display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        transition: 'var(--transition)'
      }}>
        <div className="mobile-links" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="mobile-link" onClick={() => setIsMenuOpen(false)} style={{
              fontFamily: 'Bebas Neue', fontSize: '3rem', color: 'white', textDecoration: 'none'
            }}>{link.name}</a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
