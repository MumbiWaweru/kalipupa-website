// src/components/Layout/Footer.js - NAIROBI HIPHOP ARTIST FOOTER
import React from 'react';
import { FiHeart, FiInstagram, FiYoutube, FiMail as FiEnvelope, FiMapPin, FiPhone, FiClock, FiAward } from 'react-icons/fi';
import { FaSpotify, FaSoundcloud, FaTiktok, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiInstagram />, url: 'https://www.instagram.com/nurahkalipupa?igsh=OGZkcHU0M2w5Y3k5', label: 'Instagram' },
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/share/17zkF76QGE/', label: 'Facebook' },
    { icon: <FiYoutube />, url: 'https://youtube.com/@kalipupa2324?si=gkjrNwnSKihw3oij', label: 'YouTube' },
    { icon: <FaTiktok />, url: 'https://www.tiktok.com/@kalipupa?_r=1&_t=ZS-935xFgX0kTv', label: 'TikTok' },
    { icon: <FaSpotify />, url: 'https://open.spotify.com/artist/kalipupa', label: 'Spotify' },
    { icon: <FaSoundcloud />, url: 'https://soundcloud.com/user-727292764', label: 'SoundCloud' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { name: 'Home', action: () => scrollToSection('home') },
    { name: 'About', action: () => scrollToSection('about') },
    { name: 'Music', action: () => scrollToSection('music') },
    { name: 'Gallery', action: () => scrollToSection('gallery') },
    { name: 'Contact', action: () => scrollToSection('contact') },
  ];

  const quickLinks = [
    { name: 'Press Kit', action: () => {} },
    { name: 'Merchandise', action: () => {} },
    { name: 'Booking', action: () => {} },
    { name: 'Management', action: () => {} },
  ];

  return (
    <>
      <style jsx>{`
        .footer {
          background: #0F0F0F;
          border-top: 1px solid rgba(124, 58, 237, 0.2);
          padding: 5rem 0 2rem;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7C3AED, #A855F7, #EC4899);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          margin-bottom: 2rem;
        }

        .footer-logo {
          font-size: 2.2rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 1rem;
          display: inline-block;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .footer-logo::after {
          content: '';
          display: block;
          width: 70px;
          height: 4px;
          background: linear-gradient(90deg, #7C3AED, #A855F7, #EC4899);
          margin-top: 0.6rem;
          border-radius: 2px;
        }

        .footer-description {
          color: #CCCCCC;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 400px;
          font-size: 1.05rem;
        }

        .social-links {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .social-link {
          width: 46px;
          height: 46px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #A855F7;
          transition: all 0.3s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        }

        .social-link::before {
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

        .social-link:hover::before {
          opacity: 0.2;
        }

        .social-link:hover {
          background: rgba(124, 58, 237, 0.2);
          border-color: rgba(124, 58, 237, 0.5);
          color: #C084FC;
          transform: translateY(-4px) scale(1.15);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #CCCCCC;
          font-size: 0.95rem;
        }

        .contact-icon {
          color: #A855F7;
          font-size: 1rem;
        }

        .footer-section h4 {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          color: #FFFFFF;
          position: relative;
          padding-bottom: 0.6rem;
          font-weight: 700;
        }

        .footer-section h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #7C3AED, #A855F7, #EC4899);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
        }

        .footer-link-item {
          margin-bottom: 0.8rem;
        }

        .footer-link {
          color: #CCCCCC;
          cursor: pointer;
          transition: color 0.3s ease;
          background: none;
          border: none;
          font-size: 1rem;
          text-align: left;
          padding: 0;
        }

        .footer-link:hover {
          color: #A855F7;
        }

        .newsletter-form {
          margin-top: 1rem;
        }

        .newsletter-input {
          width: 100%;
          padding: 1rem 1.2rem;
          background: rgba(40, 40, 40, 0.8);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 12px;
          color: #FFFFFF;
          margin-bottom: 1rem;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #A855F7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
        }

        .newsletter-input::placeholder {
          color: #AAAAAA;
        }

        .newsletter-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          color: #FFFFFF;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .newsletter-btn:hover {
          background: linear-gradient(135deg, #A855F7, #C084FC);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.4);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #CCCCCC;
          font-size: 0.9rem;
        }

        .stat-icon {
          color: #A855F7;
          font-size: 1rem;
        }

        .footer-bottom {
          padding-top: 3rem;
          border-top: 1px solid rgba(124, 58, 237, 0.15);
          text-align: center;
          color: #CCCCCC;
          font-size: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .heart {
          color: #A855F7;
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }

        .footer-bottom-link {
          color: #CCCCCC;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #A855F7;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .footer-bottom-links {
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-brand">
                <div className="footer-logo">KALIPUPA</div>
              </div>
              <p className="footer-description">
                Nairobi's voice in HipHop, creating authentic narratives through music
                that blends traditional sounds with contemporary beats.
              </p>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`social-link ${link.label.toLowerCase()}`}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <FiMapPin className="contact-icon" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="contact-item">
                  <FiPhone className="contact-icon" />
                  <span>+254 700 000 000</span>
                </div>
                <div className="contact-item">
                  <FiEnvelope className="contact-icon" />
                  <span>contact@kalipupa.com</span>
                </div>

                <div className="stats-grid">
                  <div className="stat-item">
                    <FiAward className="stat-icon" />
                    <span>5+ Years</span>
                  </div>
                  <div className="stat-item">
                    <FiClock className="stat-icon" />
                    <span>28+ Tracks</span>
                  </div>
                  <div className="stat-item">
                    <FiHeart className="stat-icon" />
                    <span>1.5M+ Streams</span>
                  </div>
                  <div className="stat-item">
                    <FiMapPin className="stat-icon" />
                    <span>8 Cities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {links.map((link, index) => (
                  <li key={index} className="footer-link-item">
                    <button className="footer-link" onClick={link.action}>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index} className="footer-link-item">
                    <button className="footer-link" onClick={link.action}>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4>Stay Updated</h4>
              <p style={{ color: '#AAAAAA', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Subscribe for updates on new releases and events
              </p>
              <form className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your email address"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              © {currentYear} Kalipupa. Made with <FiHeart className="heart" /> in Nairobi
            </div>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Cookies</a>
              <a href="#" className="footer-bottom-link">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;