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
        
        <div className="video-container-refined" onClick={() => !isPlaying && setIsPlaying(true)}>
          {!isPlaying ? (
            <div className="video-placeholder">
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
    </section>
  );
};

export default YouTubeSection;
