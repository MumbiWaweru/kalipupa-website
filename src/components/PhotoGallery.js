// src/components/PhotoGallery.js - Photo Gallery Component with Actual Photos
import React, { useState, useEffect } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiGrid, FiMusic, FiCamera, FiAward } from 'react-icons/fi';

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Actual photo data from the photos folder
  const photos = [
    { id: 1, title: 'Artist Portrait', category: 'artist', description: 'Official artist portrait', icon: <FiCamera />, src: '/photos/artist/artist1.jpeg' },
    { id: 2, title: 'Artist Photo', category: 'artist', description: 'Professional artist photo', icon: <FiCamera />, src: '/photos/artist/artist2.jpeg' },
    { id: 3, title: 'Album Cover', category: 'albums', description: 'Official album cover artwork', icon: <FiMusic />, src: '/photos/albums/album-cover.jpg' },
    { id: 4, title: 'Studio Session', category: 'studio', description: 'Recording session in the studio', icon: <FiMusic />, src: '/photos/studio/recording.jpg' },
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: <FiGrid /> },
    { id: 'artist', name: 'Artist Photos', icon: <FiCamera /> },
    { id: 'albums', name: 'Albums', icon: <FiMusic /> },
    { id: 'studio', name: 'Studio Sessions', icon: <FiMusic /> },
  ];

  const [filteredPhotos, setFilteredPhotos] = useState(photos);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(photos.filter(photo => photo.category === selectedCategory));
    }
    // Reset lightbox if current image is not in filtered photos
    if (currentImage >= filteredPhotos.length && filteredPhotos.length > 0) {
      setCurrentImage(0);
    }
  }, [selectedCategory]);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <>
      <style jsx>{`
        .gallery-section {
          position: relative;
          padding: 6rem 0;
          background: #0F0F0F;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          padding-bottom: 2rem;
        }

        .section-header h2 {
          font-size: clamp(2.5rem, 5vw, 3rem);
          color: #FFFFFF;
          margin-bottom: 1rem;
          position: relative;
          font-weight: 800;
        }

        .section-header h2::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 5px;
          background: linear-gradient(90deg, #FFD700, #FFEC8B, #D4AF37);
          border-radius: 3px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #CCCCCC;
          margin-top: 0.5rem;
        }

        .category-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: rgba(30, 30, 30, 0.7);
          border: 1px solid rgba(255, 215, 0, 0.1);
          border-radius: 8px;
          color: #CCCCCC;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-btn.active {
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.3);
          color: #FFD700;
        }

        .category-btn:hover:not(.active) {
          background: rgba(255, 215, 0, 0.05);
          border-color: rgba(255, 215, 0, 0.15);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .gallery-item {
          height: 280px;
          background: rgba(30, 30, 30, 0.9);
          border: 1px solid rgba(255, 215, 0, 0.1);
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .gallery-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(255, 236, 139, 0.08) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-item:hover {
          transform: translateY(-12px) scale(1.04);
          border-color: rgba(255, 215, 0, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .gallery-item:hover::before {
          opacity: 1;
        }

        .image-container {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 0.8rem;
          position: relative;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.1);
        }

        .image-title {
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          color: #FFFFFF;
          position: relative;
          z-index: 2;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .image-category {
          font-size: 0.8rem;
          color: #FFD700;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          z-index: 2;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }

        .image-description {
          font-size: 0.8rem;
          color: #CCCCCC;
          position: relative;
          z-index: 2;
          display: none;
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 15, 15, 0.98);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          opacity: ${lightboxOpen ? 1 : 0};
          pointer-events: ${lightboxOpen ? 'all' : 'none'};
          transition: opacity 0.4s ease;
          backdrop-filter: blur(10px);
        }

        .lightbox-content {
          max-width: 900px;
          width: 90%;
          position: relative;
          text-align: center;
        }

        .lightbox-image {
          height: 500px;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 236, 139, 0.1) 100%);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .lightbox-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 236, 139, 0.05) 100%);
          pointer-events: none;
        }

        .lightbox-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .lightbox-icon {
          font-size: 6rem;
          margin-bottom: 1.5rem;
          color: #FFD700;
          animation: float 3s ease-in-out infinite;
        }

        .lightbox-title {
          font-size: 2.4rem;
          margin-bottom: 0.5rem;
          color: #FFFFFF;
          text-align: center;
          position: relative;
          z-index: 2;
          font-weight: 800;
        }

        .lightbox-title::after {
          content: '';
          display: block;
          width: 70px;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #FFEC8B, #D4AF37);
          margin: 1rem auto;
          border-radius: 2px;
        }

        .lightbox-description {
          color: #CCCCCC;
          text-align: center;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          font-size: 1.1rem;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 2rem;
          pointer-events: none;
        }

        .lightbox-btn {
          background: rgba(30, 30, 30, 0.9);
          border: 1px solid rgba(255, 215, 0, 0.3);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          color: #FFD700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          transition: all 0.3s ease;
          pointer-events: all;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .lightbox-btn:hover {
          background: rgba(255, 215, 0, 0.1);
          border-color: #FFD700;
          transform: scale(1.15);
          box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
        }

        .lightbox-close {
          position: absolute;
          top: -60px;
          right: 0;
          background: rgba(30, 30, 30, 0.9);
          border: 1px solid rgba(255, 215, 0, 0.3);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          color: #FFD700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .lightbox-close:hover {
          background: rgba(255, 215, 0, 0.1);
          border-color: #FFD700;
          transform: scale(1.15);
          box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          }

          .gallery-item {
            height: 240px;
          }

          .lightbox-image {
            height: 350px;
          }

          .lightbox-nav {
            padding: 0 1rem;
          }

          .lightbox-close {
            top: -50px;
          }

          .lightbox-icon {
            font-size: 4rem;
          }

          .lightbox-title {
            font-size: 2rem;
          }
        }
      `}</style>

      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Photo Gallery</h2>
            <p>Visual moments from the musical journey</p>
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <div className="image-container">
                  <img 
                    src={photo.src} 
                    alt={photo.title} 
                    className="gallery-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-icon" style={{display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                    {photo.icon}
                  </div>
                </div>
                <div className="image-title">{photo.title}</div>
                <div className="image-category">{photo.category}</div>
              </div>
            ))}
          </div>

          {lightboxOpen && (
            <div className="lightbox">
              <div className="lightbox-content">
                <div className="lightbox-image">
                  <img 
                    src={filteredPhotos[currentImage]?.src} 
                    alt={filteredPhotos[currentImage]?.title} 
                    className="lightbox-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="lightbox-icon" style={{display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                    {filteredPhotos[currentImage]?.icon}
                  </div>
                </div>

                <h3 className="lightbox-title">{filteredPhotos[currentImage]?.title}</h3>
                <p className="lightbox-description">{filteredPhotos[currentImage]?.description}</p>

                <div className="lightbox-nav">
                  <button className="lightbox-btn" onClick={prevImage}>
                    <FiChevronLeft />
                  </button>
                  <button className="lightbox-btn" onClick={nextImage}>
                    <FiChevronRight />
                  </button>
                </div>

                <button className="lightbox-close" onClick={closeLightbox}>
                  <FiX />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;