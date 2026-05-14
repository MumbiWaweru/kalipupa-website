import React from 'react';
import { FiPlay } from 'react-icons/fi';

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
          <span className="hero-tagline">Nairobi native • Artist • Life</span>
          <h1 className="hero-title">
            I AM <br />
            <span className="text-primary">KALIPUPA</span>
          </h1>
          <p className="hero-description">
            A Nairobi native and all-rounded creative. Since childhood, 
            growing up around traditional African sounds, with HipHop as 
            an open path to expressing outright emotions.
          </p>
          
          <div className="hero-actions">
            <a href="#music" className="btn btn-filled">
              <FiPlay /> Listen Now
            </a>
            <a href="#about" className="btn">
              The Journey
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

        <div className="hero-image-wrapper">
          <div className="hero-image-overlay"></div>
          <img 
            src="/photos/artist/artist1.jpeg" 
            alt="Kalipupa" 
            className="hero-image"
          />
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 10rem;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-tagline {
          font-family: 'Bebas Neue', cursive;
          color: var(--primary-color);
          letter-spacing: 0.2em;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .hero-title {
          font-size: clamp(4rem, 8vw, 7rem);
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .text-primary {
          color: var(--primary-color);
        }

        .hero-description {
          max-width: 500px;
          margin-bottom: 3rem;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-family: 'Bebas Neue', cursive;
          font-size: 2.5rem;
          color: var(--primary-color);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        .hero-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, var(--bg-color) 0%, transparent 20%);
          z-index: 1;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1.1);
          transition: var(--transition);
        }

        .hero-image-wrapper:hover .hero-image {
          filter: grayscale(0%) contrast(1);
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content {
            order: 2;
          }

          .hero-description {
            margin: 0 auto 3rem;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-image-wrapper {
            order: 1;
            max-width: 500px;
            margin: 0 auto;
          }
          
          .hero-image-overlay {
            background: linear-gradient(to top, var(--bg-color) 0%, transparent 20%);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
