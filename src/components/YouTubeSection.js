import React from 'react';

const YouTubeSection = () => {
  const videos = [
    { id: '1', videoId: 'VIDEO_ID_1', title: 'Latest Release' }, // Replace with real video IDs if available or placeholders
    { id: '2', videoId: 'VIDEO_ID_2', title: 'Nairobi Nights' },
    { id: '3', videoId: 'VIDEO_ID_3', title: 'Studio Vibes' },
  ];

  // Using a single featured video for high impact if IDs are not fully known, 
  // or a grid if they are. I'll stick to a clean grid layout.
  
  return (
    <section id="videos" className="videos">
      <div className="container">
        <h2 className="section-title">Visuals</h2>
        
        <div className="video-grid">
          {/* Note: In a real scenario, we'd use the YouTube Data API or a curated list of IDs */}
          <div className="video-card featured">
            <div className="video-wrapper">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed?listType=user_uploads&list=Kalipupa13" 
                title="Kalipupa Latest Videos"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h3 className="video-title">Official YouTube Channel</h3>
              <p className="video-desc">Experience the visual journey of Kalipupa.</p>
              <a 
                href="https://www.youtube.com/@Kalipupa13" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-text"
              >
                Visit Channel
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .videos {
          background-color: var(--surface-color);
        }

        .section-title {
          text-align: center;
          margin-bottom: 5rem;
          width: 100%;
        }

        .video-grid {
          display: flex;
          justify-content: center;
        }

        .video-card {
          width: 100%;
          max-width: 900px;
          background: var(--bg-color);
          border: 1px solid rgba(197, 160, 89, 0.1);
          transition: var(--transition);
        }

        .video-card:hover {
          border-color: var(--primary-color);
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          height: 0;
          overflow: hidden;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          filter: grayscale(100%) contrast(1.1);
          transition: var(--transition);
        }

        .video-card:hover .video-wrapper iframe {
          filter: grayscale(0%) contrast(1);
        }

        .video-info {
          padding: 3rem;
          text-align: center;
        }

        .video-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .video-desc {
          color: var(--text-dim);
          margin-bottom: 2rem;
        }

        .btn-text {
          font-family: 'Bebas Neue', cursive;
          color: var(--primary-color);
          text-decoration: none;
          font-size: 1.2rem;
          letter-spacing: 0.1em;
          transition: var(--transition);
        }

        .btn-text:hover {
          letter-spacing: 0.15em;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .video-info {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default YouTubeSection;
