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
              It's more than just music; it's a narrative of urban life, 
              struggle, and triumph.
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
          <div className="quote-box">
            <p className="quote-text">
              "HipHop is the open path to expressing my outright emotions."
            </p>
            <span className="quote-author">— KALIPUPA</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background-color: var(--surface-color);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .section-title {
          margin-bottom: 3rem;
        }

        .bio-lead {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.8rem;
          color: var(--text-primary);
          margin-bottom: 2rem;
          line-height: 1.4;
        }

        .bio-main {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .highlight-title {
          font-family: 'Bebas Neue', cursive;
          color: var(--accent-color);
          font-size: 1.4rem;
          display: block;
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }

        .about-visual {
          position: relative;
        }

        .image-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1/1;
          margin-bottom: 4rem;
        }

        .about-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          z-index: 2;
          filter: grayscale(100%);
          transition: var(--transition);
        }

        .image-card:hover .about-image {
          filter: grayscale(0%);
        }

        .image-accent {
          position: absolute;
          top: 2rem;
          left: 2rem;
          width: 100%;
          height: 100%;
          border: 2px solid var(--accent-color);
          z-index: 1;
        }

        .quote-box {
          padding-left: 2rem;
          border-left: 3px solid var(--primary-color);
        }

        .quote-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .quote-author {
          font-family: 'Bebas Neue', cursive;
          color: var(--primary-color);
          letter-spacing: 0.1em;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .about-visual {
            order: -1;
            max-width: 500px;
            margin: 0 auto;
          }

          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;

      <section id="about" className="about-section">
        <div className="section-divider"></div>

        <div className="container">
          <div className="about-container">
            <div className="about-image">
              <div className="about-image-content">
                <div className="about-image-icon">
                  <FiMic />
                </div>
                <h3 className="about-image-title">Kalipupa</h3>
                <p className="about-image-subtitle">Nairobi Artist</p>
              </div>
            </div>

            <div className="about-content">
              <div className="section-subtitle">About Me</div>
              <h2 className="about-title">The Voice of Nairobi</h2>
              <p className="about-description">
                Kalipupa is a Kenyan artist from Nairobi. The music started in the city streets,
                where the passion for storytelling through hip-hop and contemporary African sounds grew.
              </p>

              <div className="about-highlights">
                {highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    {highlight.icon}
                    <span className="highlight-text">{highlight.text}</span>
                  </div>
                ))}
              </div>

              <p className="about-description">
                The music reflects the diversity and energy of Kenya, blending traditional rhythms with modern
                production. Each track captures urban life, cultural heritage, and personal experiences.
              </p>

              <div className="quote-section">
                <p className="quote">
                  "Music connects hearts across all boundaries.
                  Through my art, I share the stories of my people and celebrate the rich
                  culture of Kenya."
                  <span className="quote-author">- Kalipupa</span>
                </p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {achievements.map((achievement, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{achievement.icon}</div>
                <div className="stat-count">{achievement.count}</div>
                <div className="stat-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
