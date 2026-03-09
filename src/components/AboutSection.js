// src/components/AboutSection.js - NAIROBI HIPHOP ARTIST ABOUT SECTION
import React from 'react';
import { FiMusic, FiMic, FiGlobe, FiAward, FiHeart, FiMapPin, FiUsers, FiHeadphones } from 'react-icons/fi';

const AboutSection = () => {
  const achievements = [
    { icon: <FiAward />, count: '5+', label: 'Years Experience' },
    { icon: <FiMusic />, count: '28+', label: 'Songs Released' },
    { icon: <FiGlobe />, count: '8+', label: 'Countries Reached' },
    { icon: <FiHeadphones />, count: '1.5M+', label: 'Streams' },
  ];

  const highlights = [
    { icon: <FiHeart />, text: 'Authentic Storytelling' },
    { icon: <FiMusic />, text: 'Contemporary Sounds' },
    { icon: <FiGlobe />, text: 'Cultural Fusion' },
    { icon: <FiMapPin />, text: 'Nairobi Born & Raised' },
    { icon: <FiUsers />, text: 'Community Focused' },
    { icon: <FiAward />, text: 'Award Winning' },
  ];

  return (
    <>
      <style jsx>{`
        .about-section {
          position: relative;
          padding: 5rem 0;
          background: #0F0F0F;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .about-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 60px rgba(124, 58, 237, 0.15);
          transition: transform 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .about-image:hover {
          transform: translateY(-5px);
        }

        .about-image-content {
          position: relative;
          padding: 2.5rem 2rem;
          background: rgba(30, 30, 30, 0.9);
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(124, 58, 237, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .about-image-icon {
          font-size: clamp(3rem, 6vw, 4rem);
          color: #A855F7;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .about-image:hover .about-image-icon {
          transform: scale(1.05);
        }

        .about-image-title {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          color: #FFFFFF;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .about-image-subtitle {
          color: #A855F7;
          font-size: clamp(0.85rem, 2vw, 1rem);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        .about-content {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }

        .section-subtitle {
          font-size: clamp(0.85rem, 2.5vw, 1rem);
          color: #A855F7;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.75rem;
          position: relative;
          display: inline-block;
          font-weight: 600;
        }

        .section-subtitle::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #7C3AED, #A855F7);
          border-radius: 2px;
        }

        .about-title {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          color: #FFFFFF;
          margin-bottom: 1.25rem;
          position: relative;
          font-weight: 800;
          word-wrap: break-word;
        }

        .about-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #7C3AED, #A855F7);
          border-radius: 2px;
        }

        .about-description {
          color: #CCCCCC;
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem;
          background: rgba(30, 30, 30, 0.7);
          border-radius: 8px;
          border: 1px solid rgba(124, 58, 237, 0.2);
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .highlight-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 16px rgba(124, 58, 237, 0.3);
          border-color: rgba(124, 58, 237, 0.5);
          background: rgba(40, 40, 40, 0.8);
        }

        .highlight-icon {
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          color: #A855F7;
          min-width: 1.5rem;
          flex-shrink: 0;
        }

        .highlight-text {
          color: #FFFFFF;
          font-size: clamp(0.85rem, 2.5vw, 0.95rem);
          font-weight: 500;
          word-wrap: break-word;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-top: 2.5rem;
          width: 100%;
          max-width: 100%;
        }

        .stat-item {
          text-align: center;
          padding: 1.25rem 0.75rem;
          background: rgba(30, 30, 30, 0.7);
          border-radius: 8px;
          border: 1px solid rgba(124, 58, 237, 0.2);
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .stat-item:hover {
          transform: translateY(-5px);
          border-color: rgba(124, 58, 237, 0.5);
          box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
          background: rgba(40, 40, 40, 0.8);
        }

        .stat-icon {
          font-size: clamp(1.5rem, 3vw, 1.8rem);
          color: #A855F7;
          margin-bottom: 0.5rem;
        }

        .stat-count {
          font-size: clamp(1.5rem, 4vw, 1.8rem);
          font-weight: 800;
          margin-bottom: 0.25rem;
          color: #A855F7;
        }

        .stat-label {
          font-size: clamp(0.7rem, 2vw, 0.9rem);
          color: #AAAAAA;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .quote-section {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(30, 30, 30, 0.7);
          border-radius: 8px;
          border-left: 4px solid #7C3AED;
          position: relative;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          width: 100%;
        }

        .quote {
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          font-style: italic;
          color: #FFFFFF;
          line-height: 1.7;
          margin: 0;
          position: relative;
          padding: 0 0.5rem;
        }

        .quote::before {
          content: '"';
          position: absolute;
          top: -0.75rem;
          left: -0.5rem;
          font-size: 2rem;
          color: rgba(168, 85, 247, 0.15);
          font-family: serif;
          line-height: 1;
        }

        .quote-author {
          display: block;
          margin-top: 1rem;
          text-align: right;
          color: #A855F7;
          font-weight: 600;
          font-size: clamp(0.85rem, 2.5vw, 1rem);
        }

        .section-divider {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 100px;
          height: 2px;
          background: repeating-linear-gradient(
            to right,
            #7C3AED 0,
            #7C3AED 8px,
            transparent 8px,
            transparent 16px
          );
          opacity: 0.2;
          z-index: 0;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 1.5rem;
          }

          .about-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }

          .stat-item {
            padding: 1rem 0.5rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .about-section {
            padding: 4rem 0;
          }

          .about-container {
            gap: 1.75rem;
            padding: 0 1.25rem;
          }

          .about-highlights {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .highlight-item {
            padding: 0.6rem;
          }

          .quote-section {
            padding: 1.25rem;
          }

          .quote {
            font-size: 0.95rem;
          }

          .about-stats {
            gap: 0.5rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .about-section {
            padding: 3rem 0;
          }

          .about-container {
            padding: 0 1rem;
          }

          .about-image-content {
            padding: 1.5rem 1rem;
          }

          .about-highlights {
            gap: 0.4rem;
          }

          .highlight-text {
            font-size: 0.85rem;
          }

          .stat-item {
            padding: 0.75rem 0.4rem;
          }

          .quote-section {
            padding: 1rem;
          }
        }
      `}</style>

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
