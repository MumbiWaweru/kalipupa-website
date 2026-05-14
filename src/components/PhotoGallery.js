import React from 'react';

const PhotoGallery = () => {
  const images = [
    { src: '/photos/artist/artist1.jpeg', title: 'Nairobi Streets', category: 'City' },
    { src: '/photos/artist/artist2.jpeg', title: 'Studio Session', category: 'Music' },
    { src: '/photos/studio/recording.jpg', title: 'The Process', category: 'Studio' },
    { src: '/photos/albums/album-cover.jpg', title: 'Only Easy Day', category: 'Artwork' },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', display: 'block', margin: '0 auto 5rem' }}>The Gallery</h2>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" style={{ background: 'var(--surface-color)' }}>
              <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <img src={image.src} alt={image.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'var(--transition)' }} 
                  onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <span style={{ fontFamily: 'Bebas Neue', color: 'var(--primary-color)', fontSize: '1rem' }}>{image.category}</span>
                <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
