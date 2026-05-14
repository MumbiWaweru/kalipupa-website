import React, { useState } from 'react';
import { FiPlay, FiYoutube } from 'react-icons/fi';

const YouTubeSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="videos" className="videos">
      <div className="container">
        <div className="section-intro">
          <h2 className="section-title">Visual Narratives</h2>
          <p className="section-subtitle">Cinematic experiences from the heart of the city.</p>
        </div>
        
        <div className="video-container-refined">
          {!isPlaying ? (
            <div className="video-placeholder" onClick={() => setIsPlaying(true)}>
              <img 
                src="/photos/albums/album-cover.jpg" 
                alt="Kalipupa Video Thumbnail" 
                className="placeholder-image"
              />
              <div className="play-overlay-cinematic">
                <div className="play-button-outer">
                  <div className="play-button-inner">
                    <FiPlay />
                  </div>
                </div>
                <span className="play-text">Watch Latest Release</span>
              </div>
            </div>
          ) : (
            <div className="video-wrapper">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed?listType=user_uploads&list=Kalipupa13&autoplay=1" 
                title="Kalipupa Latest Videos"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        <div className="video-footer">
          <a href="https://www.youtube.com/@Kalipupa13" target="_blank" rel="noreferrer" className="youtube-cta">
            <FiYoutube /> Discover More on YouTube
          </a>
        </div>
      </div>

      <style jsx>{`
        .videos {
          background-color: var(--surface-color);
          position: relative;
          overflow: hidden;
        }

        .section-intro {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-subtitle {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: var(--primary-color);
          font-size: 1.2rem;
          margin-top: -1rem;
        }

        .video-container-refined {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          aspect-ratio: 16/9;
          background: #000;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          position: relative;
          cursor: pointer;
        }

        .video-placeholder {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .placeholder-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.6) grayscale(20%);
          transition: var(--transition);
        }

        .video-placeholder:hover .placeholder-image {
          filter: brightness(0.4) grayscale(0%);
          transform: scale(1.02);
        }

        .play-overlay-cinematic {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          z-index: 2;
        }

        .play-button-outer {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 1px solid rgba(197, 160, 89, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .play-button-inner {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: var(--primary-color);
          color: var(--bg-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          padding-left: 5px;
          transition: var(--transition);
        }

        .video-placeholder:hover .play-button-outer {
          border-color: var(--primary-color);
          transform: scale(1.1);
        }

        .play-text {
          font-family: 'Bebas Neue', cursive;
          letter-spacing: 0.2em;
          font-size: 1.2rem;
          color: var(--text-primary);
          opacity: 0.8;
          transition: var(--transition);
        }

        .video-placeholder:hover .play-text {
          opacity: 1;
          letter-spacing: 0.3em;
        }

        .video-wrapper {
          width: 100%;
          height: 100%;
        }

        .video-footer {
          margin-top: 4rem;
          text-align: center;
        }

        .youtube-cta {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-family: 'Bebas Neue', cursive;
          font-size: 1.3rem;
          letter-spacing: 0.1em;
          transition: var(--transition);
        }

        .youtube-cta:hover {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .play-button-outer { width: 70px; height: 70px; }
          .play-button-inner { width: 55px; height: 55px; }
        }
      `}</style>
    </section>
  );
};

export default YouTubeSection;
