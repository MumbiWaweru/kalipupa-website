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
    </section>
  );
};

export default HeroSection;
