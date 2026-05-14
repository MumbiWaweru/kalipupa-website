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
        <h2 className="section-title">The Gallery</h2>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <div className="image-wrapper">
                <img src={image.src} alt={image.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <span className="gallery-category">{image.category}</span>
                    <h3 className="gallery-title">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery {
          background-color: var(--bg-color);
        }

        .section-title {
          text-align: center;
          margin-bottom: 5rem;
          width: 100%;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          background: var(--surface-color);
        }

        .image-wrapper {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-item:hover .gallery-image {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(5, 5, 5, 0.8) 0%, transparent 50%);
          display: flex;
          align-items: flex-end;
          padding: 3rem;
          opacity: 0;
          transition: var(--transition);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-category {
          font-family: 'Bebas Neue', cursive;
          color: var(--primary-color);
          letter-spacing: 0.1em;
          font-size: 1rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .gallery-title {
          font-size: 2rem;
          color: var(--text-primary);
          margin: 0;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          
          .gallery-overlay {
            padding: 2rem;
          }
          
          .gallery-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PhotoGallery;
