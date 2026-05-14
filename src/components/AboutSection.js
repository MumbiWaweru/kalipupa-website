import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-content">
          <h2 className="section-title">The Sound of Nairobi</h2>
          <p className="bio-lead">
            A Nairobi native, Kalipupa is an all-rounded creative who loves 
            music, art, and life.
          </p>
          <div className="bio-main">
            <p>
              Since childhood, he has grown up around traditional African sounds, 
              with HipHop as an open path to expressing his outright emotions. 
              He began rapping early in his teens with the release of his first 
              mixtape "Only Easy Day_Jana" in 2017.
            </p>
            <p>
              His music is a reflection of the vibrant energy of Nairobi, 
              blending contemporary HipHop with deep-rooted African rhythms.
            </p>
          </div>
          
          <div className="highlights-grid">
            <div className="highlight">
              <span className="highlight-title">Cultural Fusion</span>
              <p>Blending traditional Kenyan sounds with modern HipHop production.</p>
            </div>
            <div className="highlight">
              <span className="highlight-title">Authentic Stories</span>
              <p>Raw, honest lyrics that speak to the heart of the city.</p>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="image-card">
            <img src="/photos/artist/artist2.jpeg" alt="Kalipupa Session" className="about-image" />
            <div className="image-accent"></div>
          </div>
          <div className="quote-box" style={{ paddingLeft: '2rem', borderLeft: '3px solid var(--primary-color)' }}>
            <p className="quote-text" style={{ fontFamily: 'Playfair Display', fontSize: '1.4rem', fontStyle: 'italic', marginBottom: '1rem' }}>
              "HipHop is the open path to expressing my outright emotions."
            </p>
            <span className="quote-author" style={{ fontFamily: 'Bebas Neue', color: 'var(--primary-color)' }}>— KALIPUPA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
