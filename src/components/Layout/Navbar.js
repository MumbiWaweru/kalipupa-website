import React, { useState, useEffect } from 'react';
import { FiInstagram, FiYoutube, FiX, FiArrowRight } from 'react-icons/fi';
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
    { name: 'Identity', href: '#about' },
    { name: 'Sound', href: '#music' },
    { name: 'Visuals', href: '#videos' },
    { name: 'Archive', href: '#gallery' },
    { name: 'Inquiry', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo">
            <span className="logo-symbol">◆</span> 
            <span className="logo-text">KALI<span className="gold">PUPA</span></span>
          </a>

          <div className="nav-desktop">
            <div className="nav-links">
              {navLinks.map((link, idx) => (
                <a key={link.name} href={link.href} className="nav-link">
                  <span className="link-num">0{idx + 1}</span>
                  {link.name}
                </a>
              ))}
            </div>

            <div className="nav-divider"></div>

            <div className="nav-socials">
              <a href="https://open.spotify.com/artist/kalipupa" target="_blank" rel="noreferrer" className="social-icon"><FaSpotify /></a>
              <a href="https://soundcloud.com/user-727292764" target="_blank" rel="noreferrer" className="social-icon"><FaSoundcloud /></a>
              <a href="https://youtube.com/@Kalipupa13" target="_blank" rel="noreferrer" className="social-icon"><FiYoutube /></a>
            </div>
          </div>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX color="white" size={32} /> : <div className="hamburger"><span></span><span></span></div>}
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="overlay-content">
          <div className="overlay-nav">
            {navLinks.map((link, idx) => (
              <a key={link.name} href={link.href} className="overlay-link" onClick={() => setIsMenuOpen(false)}>
                <span className="overlay-num">0{idx + 1}</span>
                {link.name}
                <FiArrowRight className="overlay-arrow" />
              </a>
            ))}
          </div>
          
          <div className="overlay-footer">
            <p>Nairobi, Kenya • All-Rounded Creative</p>
            <div className="nav-socials">
              <a href="#" className="social-icon"><FaSpotify /></a>
              <a href="#" className="social-icon"><FaSoundcloud /></a>
              <a href="#" className="social-icon"><FiInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
