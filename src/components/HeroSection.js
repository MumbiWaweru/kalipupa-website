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
            <span style={{ color: 'var(--primary-color)' }}>KALIPUPA</span>
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
          <div className="hero-image-overlay" style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to right, var(--bg-color) 0%, transparent 20%)',
            zIndex: 1
          }}></div>
          <img 
            src="/photos/artist/artist1.jpeg" 
            alt="Kalipupa" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
