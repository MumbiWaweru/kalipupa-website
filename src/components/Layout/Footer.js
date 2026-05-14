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
        <h2 className="footer-logo">KALIPUPA</h2>
        
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
              <p style={{ color: '#AAAAAA', fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)', marginBottom: '0.75rem' }}>
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
              <button className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Privacy Policy</button>
              <button className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Terms of Service</button>
              <button className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Cookies</button>
              <button className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Accessibility</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
