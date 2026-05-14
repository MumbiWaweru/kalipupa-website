import React from 'react';
import { FiPlay, FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  const stats = [
    { label: 'Streams', value: '2.1M+' },
    { label: 'Tracks', value: '35+' },
    { label: 'Cities', value: '12' },
  ];

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Nairobi's Creative Force
          </div>
          
          <h1 className="hero-title">
            REDEFINING <br />
            <span className="text-outline">MODERN</span> <br />
            <span className="text-primary">AFRICAN SOUND</span>
          </h1>
          
          <p className="hero-description">
            Kalipupa blends traditional African rhythms with urban storytelling, 
            creating a unique sonic landscape that captures the heart of Nairobi.
          </p>
          
          <div className="hero-actions">
            <a href="#music" className="btn btn-filled">
              <FiPlay /> Listen Latest
            </a>
            <a href="#about" className="btn-minimal">
              Explore the Journey <FiArrowRight />
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

        <div className="hero-visual">
          <div className="image-frame">
            <img 
              src="/photos/artist/artist1.jpeg" 
              alt="Kalipupa" 
              className="hero-image"
            />
            <div className="image-border"></div>
          </div>
          <div className="hero-decoration">◆</div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 6rem;
          background: radial-gradient(circle at 10% 20%, rgba(197, 160, 89, 0.05) 0%, transparent 50%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          background: rgba(197, 160, 89, 0.1);
          border: 1px solid rgba(197, 160, 89, 0.2);
          color: var(--primary-color);
          font-family: 'Bebas Neue', cursive;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: var(--primary-color);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary-color);
        }

        .hero-title {
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          line-height: 0.9;
          margin-bottom: 2rem;
        }

        .text-outline {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }

        .text-primary {
          color: var(--primary-color);
        }

        .hero-description {
          max-width: 520px;
          font-size: 1.2rem;
          margin-bottom: 3rem;
          color: var(--text-secondary);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          margin-bottom: 5rem;
        }

        .btn-minimal {
          color: var(--text-primary);
          text-decoration: none;
          font-family: 'Bebas Neue', cursive;
          letter-spacing: 0.1em;
          font-size: 1.1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
        }

        .btn-minimal:hover {
          color: var(--primary-color);
          gap: 1rem;
        }

        .hero-stats {
          display: flex;
          gap: 4rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-family: 'Bebas Neue', cursive;
          font-size: 3rem;
          color: var(--primary-color);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .hero-visual {
          position: relative;
          padding: 2rem;
        }

        .image-frame {
          position: relative;
          aspect-ratio: 4/5;
          z-index: 2;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1.1);
          transition: var(--transition);
        }

        .image-border {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100%;
          height: 100%;
          border: 2px solid var(--accent-color);
          z-index: -1;
        }

        .hero-decoration {
          position: absolute;
          bottom: 0;
          left: -20px;
          font-size: 4rem;
          color: var(--primary-color);
          opacity: 0.3;
          z-index: 3;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 4rem;
          }

          .hero-badge, .hero-actions, .hero-stats {
            justify-content: center;
          }

          .hero-description {
            margin: 0 auto 3rem;
          }

          .hero-visual {
            max-width: 450px;
            margin: 0 auto;
            order: -1;
          }
          
          .hero-title {
            font-size: clamp(3rem, 10vw, 5rem);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
