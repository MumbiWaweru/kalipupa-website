import React from 'react';

const PhotoGallery = () => {
  const archiveItems = [
    { src: '/photos/artist/artist1.jpeg', title: 'The Identity', tag: 'Identity' },
    { src: '/photos/artist/artist2.jpeg', title: 'Studio Session', tag: 'Process' },
    { src: '/photos/studio/recording.jpg', title: 'The Blueprint', tag: 'Process' },
    { src: '/photos/albums/album-cover.jpg', title: 'Only Easy Day', tag: 'Artwork' },
  ];

  return (
    <section id="gallery" className="archive">
      <div className="container">
        <div className="section-header-split">
          <div className="header-left">
            <span className="section-index">04</span>
            <h2 className="section-title-large">The Archive</h2>
          </div>
          <div className="header-right">
            <p className="header-desc-mini">
              A curated collection of visual moments documenting the 
              evolution of Kalipupa.
            </p>
          </div>
        </div>

        <div className="archive-grid">
          {archiveItems.map((item, index) => (
            <div key={index} className={`archive-item item-${index + 1}`}>
              <div className="archive-visual">
                <img src={item.src} alt={item.title} className="archive-img" />
                <div className="archive-overlay">
                  <div className="archive-info">
                    <span className="archive-tag">{item.tag}</span>
                    <h3 className="archive-item-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .archive {
          background: #080808;
          padding: 10rem 0;
        }

        .section-header-split {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 8rem;
        }

        .header-left {
          display: flex;
          align-items: baseline;
          gap: 2rem;
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

        .header-desc-mini {
          max-width: 300px;
          color: var(--text-dim);
          font-size: 0.9rem;
          text-align: right;
        }

        .archive-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 2rem;
        }

        .archive-item {
          position: relative;
          background: #111;
          overflow: hidden;
        }

        .item-1 { grid-column: span 8; height: 500px; }
        .item-2 { grid-column: span 4; height: 500px; }
        .item-3 { grid-column: span 4; height: 400px; }
        .item-4 { grid-column: span 8; height: 400px; }

        .archive-visual {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .archive-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .archive-item:hover .archive-img {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        .archive-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 3rem;
          opacity: 0;
          transition: var(--transition);
        }

        .archive-item:hover .archive-overlay {
          opacity: 1;
        }

        .archive-tag {
          display: block;
          font-family: 'Bebas Neue', cursive;
          color: var(--primary-color);
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .archive-item-title {
          font-size: 2rem;
          color: white;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .archive-grid { grid-template-columns: 1fr; }
          .archive-item { grid-column: span 1 !important; height: 400px; }
          .section-header-split { flex-direction: column; align-items: flex-start; gap: 2rem; }
          .header-desc-mini { text-align: left; }
        }
      `}</style>
    </section>
  );
};

export default PhotoGallery;
