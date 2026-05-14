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
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  <span className="link-num">0{navLinks.indexOf(link) + 1}</span>
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
            {isMenuOpen ? <FiX /> : <div className="hamburger"><span></span><span></span></div>}
          </button>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="overlay-content">
          <div className="overlay-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="overlay-link" onClick={() => setIsMenuOpen(false)}>
                <span className="overlay-num">0{navLinks.indexOf(link) + 1}</span>
                {link.name}
                <FiArrowRight className="overlay-arrow" />
              </a>
            ))}
          </div>
          
          <div className="overlay-footer">
            <p>Nairobi, Kenya • All-Rounded Creative</p>
            <div className="overlay-socials">
              <a href="#" className="social-icon"><FaSpotify /></a>
              <a href="#" className="social-icon"><FaSoundcloud /></a>
              <a href="#" className="social-icon"><FiInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; width: 100%;
          padding: 2.5rem 0;
          z-index: 1000;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navbar-scrolled {
          padding: 1.2rem 0;
          background: rgba(5, 5, 5, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(197, 160, 89, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          z-index: 1001;
        }

        .logo-symbol {
          color: var(--primary-color);
          font-size: 1.5rem;
          animation: pulse 4s infinite;
        }

        .logo-text {
          font-family: 'Bebas Neue', cursive;
          font-size: 2.2rem;
          color: white;
          letter-spacing: 0.1em;
        }

        .gold { color: var(--primary-color); }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 3rem;
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
          letter-spacing: 0.15em;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
        }

        .link-num {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem;
          color: var(--primary-color);
          letter-spacing: 0;
          margin-bottom: -0.2rem;
        }

        .nav-link:hover {
          color: white;
          transform: translateY(-2px);
        }

        .nav-divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.1);
        }

        .nav-socials {
          display: flex;
          gap: 1.5rem;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
          color: white;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .hamburger span {
          width: 30px;
          height: 2px;
          background: var(--primary-color);
          transition: var(--transition);
        }

        /* Mobile Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100vh;
          background: var(--bg-color);
          z-index: 999;
          padding: 8rem 2rem 4rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateY(-20px);
        }

        .mobile-overlay.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .overlay-nav {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .overlay-link {
          font-family: 'Bebas Neue', cursive;
          font-size: clamp(3rem, 10vw, 5rem);
          color: white;
          text-decoration: none;
          line-height: 1;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: var(--transition);
        }

        .overlay-num {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: var(--primary-color);
        }

        .overlay-arrow {
          font-size: 2rem;
          opacity: 0;
          transform: translateX(-20px);
          transition: var(--transition);
          color: var(--primary-color);
        }

        .overlay-link:hover {
          padding-left: 1rem;
          color: var(--primary-color);
        }

        .overlay-link:hover .overlay-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .overlay-footer {
          margin-top: auto;
          padding-top: 4rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        @media (max-width: 1024px) {
          .nav-desktop { display: none; }
          .menu-toggle { display: block; }
          .mobile-overlay { display: flex; flex-direction: column; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
