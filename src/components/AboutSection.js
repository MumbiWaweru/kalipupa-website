import React from 'react';

const AboutSection = () => {
  const highlights = [
    { title: "Origins", detail: "Nairobi Born & Raised" },
    { title: "Medium", detail: "Music • Art • Life" },
    { title: "Legacy", detail: "Est. 2017" },
    { title: "Sound", detail: "Urban African Fusion" },
  ];

  return (
    <section id="about" className="about">
      <div className="container about-comprehensive">
        <div className="about-header-large">
          <span className="section-index">01</span>
          <h2 className="section-title-large">The Identity</h2>
        </div>

        <div className="about-content-refined">
          <div className="about-main-text">
            <h3 className="narrative-subtitle">The Voice of the City</h3>
            <p className="bio-paragraph">
              A Nairobi native, Kalipupa is an all-rounded creative who 
              traverses the boundaries of music, art, and life. Growing up 
              in the heart of Kenya, he was immersed in a rich tapestry of 
              traditional African sounds and urban energy.
            </p>
            <p className="bio-paragraph">
              For Kalipupa, HipHop is more than a genre—it's an open path to 
              expressing outright emotions and documenting the evolving 
              narratives of urban African life. Since his first mixtape in 2017, 
              he has been refining a sound that is both deeply personal and 
              culturally resonant.
            </p>
            
            <div className="about-stats-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="about-stat-box">
                  <span className="stat-box-title">{item.title}</span>
                  <span className="stat-box-detail">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-side-visual">
            <div className="philosophy-card">
              <span className="philosophy-label">Philosophy</span>
              <p className="philosophy-text">
                "Art is the heartbeat of the city. We don't just create; we document existence."
              </p>
            </div>
            <div className="artist-secondary-frame">
              <img src="/photos/artist/artist2.jpeg" alt="Kalipupa" className="side-img" />
              <div className="frame-decoration"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: #080808;
          padding: 12rem 0;
          position: relative;
        }

        .about-header-large {
          display: flex;
          align-items: baseline;
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .section-index {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 2rem;
          color: var(--primary-color);
        }

        .section-title-large {
          font-size: clamp(3rem, 8vw, 6rem);
          margin: 0;
          line-height: 1;
        }

        .about-content-refined {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 8rem;
          align-items: start;
        }

        .narrative-subtitle {
          font-size: 2rem;
          color: var(--primary-color);
          margin-bottom: 2.5rem;
        }

        .bio-paragraph {
          font-size: 1.25rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .about-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 4rem;
        }

        .about-stat-box {
          border-left: 1px solid rgba(197, 160, 89, 0.2);
          padding-left: 1.5rem;
        }

        .stat-box-title {
          display: block;
          font-family: 'Bebas Neue', cursive;
          font-size: 1rem;
          letter-spacing: 0.1em;
          color: var(--text-dim);
          margin-bottom: 0.5rem;
        }

        .stat-box-detail {
          font-size: 1.2rem;
          color: white;
          font-weight: 600;
        }

        .philosophy-card {
          background: var(--surface-color);
          padding: 3rem;
          border: 1px solid rgba(197, 160, 89, 0.1);
          margin-bottom: 4rem;
          position: relative;
        }

        .philosophy-label {
          position: absolute;
          top: -10px;
          left: 20px;
          background: var(--primary-color);
          color: black;
          font-family: 'Bebas Neue', cursive;
          padding: 0.2rem 1rem;
          font-size: 0.8rem;
        }

        .philosophy-text {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.6rem;
          line-height: 1.4;
          color: white;
        }

        .artist-secondary-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 1/1;
        }

        .side-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          z-index: 2;
          position: relative;
        }

        .frame-decoration {
          position: absolute;
          bottom: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(197, 160, 89, 0.1) 5px, rgba(197, 160, 89, 0.1) 10px);
          z-index: 1;
        }

        @media (max-width: 1024px) {
          .about-content-refined { grid-template-columns: 1fr; gap: 4rem; }
          .about-side-visual { order: -1; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
