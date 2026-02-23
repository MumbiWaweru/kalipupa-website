// src/components/HeroSection.js - NAIROBI HIPHOP ARTIST HERO
import React, { useEffect, useState } from 'react';
import { FiPlay, FiExternalLink } from 'react-icons/fi';
import { FaSoundcloud, FaSpotify, FaInstagram, FaYoutube } from 'react-icons/fa';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { label: 'Streams', value: '2.1M+' },
    { label: 'Tracks', value: '35+' },
    { label: 'Cities', value: '12' },
    { label: 'Awards', value: '5' },
  ];

  return (
    <>
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: #0F0F0F;
          overflow: hidden;
          padding: 2rem 0;
        }

        .hero-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          justify-content: center;
        }

        /* Content side */
        .hero-content {
          opacity: ${isVisible ? 1 : 0};
          transform: translateX(${isVisible ? '0' : '-30px'});
          transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-tag {
          display: inline-block;
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          color: #FFFFFF;
          padding: 0.5rem 1.2rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 1.5rem;
          border-radius: 30px;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1.2rem;
          line-height: 1.2;
          color: #FFFFFF;
          font-weight: 800;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          color: #A855F7;
          font-weight: 600;
          letter-spacing: 0.5px;
          animation: fadeInUp 0.8s ease-out 0.4s both;
          position: relative;
        }

        .hero-subtitle::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #7C3AED, #A855F7);
          border-radius: 2px;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          color: #CCCCCC;
          max-width: 500px;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
          animation: fadeInUp 0.8s ease-out 0.8s both;
        }

        .btn-primary {
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          border: none;
          color: #FFFFFF;
          border-radius: 8px;
          padding: 0.9rem 1.8rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #A855F7, #C084FC);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.5);
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid #7C3AED;
          color: #A855F7;
          border-radius: 8px;
          padding: 0.9rem 1.8rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-secondary:hover {
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          color: #FFFFFF;
          transform: translateY(-2px);
          border-color: transparent;
        }

        .btn-spotify {
          background: #1DB954;
          border: none;
          color: #FFFFFF;
          border-radius: 8px;
          padding: 0.9rem 1.8rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-spotify:hover {
          background: #1ed760;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(29, 185, 84, 0.4);
        }

        .social-links {
          display: flex;
          gap: 1.2rem;
          margin-top: 1.5rem;
          animation: fadeInUp 0.8s ease-out 1.0s both;
        }

        .social-link {
          width: 42px;
          height: 42px;
          border-radius: 8px;
          background: rgba(124, 58, 237, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #A855F7;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(124, 58, 237, 0.3);
        }

        .social-link:hover {
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          color: #FFFFFF;
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(124, 58, 237, 0.3);
          border-color: transparent;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          animation: fadeInUp 0.8s ease-out 1.2s both;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
          border-left: 3px solid #7C3AED;
          background: rgba(124, 58, 237, 0.1);
          border-radius: 6px;
        }

        .stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: #A855F7;
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #AAAAAA;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Image side */
        .hero-image-container {
          position: relative;
          opacity: ${isVisible ? 1 : 0};
          transform: translateX(${isVisible ? '0' : '30px'});
          transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1) 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 60px rgba(124, 58, 237, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image {
          width: 100%;
          height: 450px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
          vertical-align: middle;
        }

        .hero-image:hover {
          transform: scale(1.03);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.15) 0%,
            transparent 50%,
            rgba(168, 85, 247, 0.15) 100%
          );
          pointer-events: none;
        }

        /* Section divider style */
        .section-divider {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 200px;
          height: 2px;
          background: repeating-linear-gradient(
            to right,
            #7C3AED 0,
            #7C3AED 10px,
            transparent 10px,
            transparent 20px
          );
          opacity: 0.2;
          z-index: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .hero-content {
            order: 2;
          }

          .hero-image-container {
            order: 1;
            max-width: 500px;
            margin: 0 auto;
          }

          .hero-description {
            margin: 0 auto 2rem;
          }

          .hero-cta {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
            grid-template-columns: repeat(4, 1fr);
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .hero-container {
            gap: 2rem;
            padding: 0 1.5rem;
          }

          .hero-cta {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary,
          .btn-spotify {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }

          .hero-stats {
            grid-template-columns: 1fr 1fr;
          }

          .stat-item {
            padding: 0.8rem;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section id="home" className="hero-section">
        <div className="section-divider"></div>

        <div className="hero-container">
          {/* Content Side */}
          <div className="hero-content">
            <div className="hero-tag">Nairobi's HipHop Voice</div>

            <h1 className="hero-title">
              I'm Kalipupa
            </h1>

            <p className="hero-subtitle">
              Authentic Stories Through Music
            </p>

            <p className="hero-description">
              Blending traditional Nairobi sounds with contemporary HipHop to create
              music that resonates with the soul of the city and beyond.
            </p>

            <div className="hero-cta">
              <button
                className="btn-primary"
                onClick={() => window.open('https://soundcloud.com/user-727292764', '_blank')}
              >
                <FiPlay /> Listen Now
              </button>
              <button
                className="btn-spotify"
                onClick={() => window.open('https://open.spotify.com/artist/kalipupa', '_blank')}
              >
                <FaSpotify /> Spotify
              </button>
              <button
                className="btn-secondary"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                <FiExternalLink /> Learn More
              </button>
            </div>

            <div className="social-links">
              <a href="https://instagram.com/kalipupa" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/kalipupa" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
              </a>
              <a href="https://soundcloud.com/kalipupa" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaSoundcloud />
              </a>
            </div>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="hero-image-container">
            <div className="image-wrapper">
              <img
                src="/photos/artist/artist1.jpeg"
                alt="Kalipupa - Nairobi HipHop Artist"
                className="hero-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;