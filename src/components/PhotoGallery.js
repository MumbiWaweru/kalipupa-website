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
    </section>
  );
};

export default PhotoGallery;
