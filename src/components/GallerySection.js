// src/components/GallerySection.js - NAIROBI HIPHOP ARTIST PHOTO GALLERY
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      id: 1,
      title: 'Artist Portrait',
      description: 'Professional portrait of the artist',
      imageUrl: '/photos/artist/artist1.jpeg'
    },
    {
      id: 2,
      title: 'Artist Portrait',
      description: 'Artist in creative mode',
      imageUrl: '/photos/artist/artist2.jpeg'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .gallery-section {
          position: relative;
          padding: 6rem 0;
          background: linear-gradient(135deg, #0F0F0F 0%, #1a1025 50%, #0F0F0F 100%);
        }

        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .carousel-container {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(124, 58, 237, 0.2), 0 10px 30px rgba(0, 0, 0, 0.4);
          height: 500px;
          border: 2px solid rgba(124, 58, 237, 0.3);
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .carousel-slide.active {
          opacity: 1;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .carousel-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(to top, rgba(15, 15, 15, 0.95), rgba(26, 16, 37, 0.7), transparent);
          color: white;
          z-index: 2;
        }

        .carousel-title {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: #A855F7;
          text-shadow: 0 2px 10px rgba(168, 85, 247, 0.3);
        }

        .carousel-description {
          font-size: 1.1rem;
          color: #E9D5FF;
          line-height: 1.6;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 2rem;
          z-index: 3;
        }

        .carousel-btn {
          background: linear-gradient(135deg, #7C3AED 0%, #A855F7 100%);
          border: none;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          color: #FFFFFF;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(124, 58, 237, 0.4);
        }

        .carousel-btn:hover {
          background: linear-gradient(135deg, #A855F7 0%, #C084FC 100%);
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(168, 85, 247, 0.5);
        }

        .carousel-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 3;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(168, 85, 247, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .indicator:hover {
          background: rgba(168, 85, 247, 0.7);
        }

        .indicator.active {
          background: #A855F7;
          border-color: #C084FC;
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);
        }

        @media (max-width: 768px) {
          .carousel-container {
            height: 350px;
          }

          .carousel-btn {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }

          .carousel-nav {
            padding: 0 1rem;
          }

          .carousel-title {
            font-size: 1.4rem;
          }

          .carousel-description {
            font-size: 1rem;
          }
        }
      `}</style>

      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Gallery</h2>
            <p>Visual moments from the musical journey</p>
          </div>

          <div className="gallery-container">
            <div className="carousel-container">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`carousel-slide ${index === currentImage ? 'active' : ''}`}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="carousel-image"
                  />
                  <div className="carousel-overlay">
                    <h3 className="carousel-title">{image.title}</h3>
                    <p className="carousel-description">{image.description}</p>
                  </div>
                </div>
              ))}

              <div className="carousel-nav">
                <button className="carousel-btn" onClick={prevImage}>
                  <FiChevronLeft />
                </button>
                <button className="carousel-btn" onClick={nextImage}>
                  <FiChevronRight />
                </button>
              </div>

              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${index === currentImage ? 'active' : ''}`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;
