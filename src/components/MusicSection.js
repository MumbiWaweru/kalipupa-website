import React from 'react';
import { FiExternalLink, FiMusic } from 'react-icons/fi';

const MusicSection = () => {
  const projects = [
    {
      id: 1,
      title: "Only Easy Day Jana EP",
      year: "2018",
      type: "EP",
      tracks: 11,
      soundcloudUrl: "https://soundcloud.com/user-727292764/sets/only-easy-day-jana-ep",
      coverArt: "/photos/albums/album-cover.jpg"
    },
    {
      id: 2,
      title: "Single Releases",
      year: "2017-2023",
      type: "Singles",
      tracks: 17,
      soundcloudUrl: "https://soundcloud.com/user-727292764",
      coverArt: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Upcoming Release",
      year: "2024",
      type: "Album",
      tracks: 12,
      soundcloudUrl: "#",
      coverArt: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="music" className="music">
      <div className="container">
        <h2 className="section-title">Discography</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.coverArt} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.soundcloudUrl} target="_blank" rel="noreferrer" className="play-icon">
                    <FiMusic />
                  </a>
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-details">{project.tracks} Tracks</p>
                <a href={project.soundcloudUrl} target="_blank" rel="noreferrer" className="btn-text">
                  Listen on SoundCloud <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .music {
          background-color: var(--bg-color);
        }

        .section-title {
          margin-bottom: 5rem;
          text-align: center;
          width: 100%;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .project-card {
          background: var(--surface-color);
          transition: var(--transition);
          border: 1px solid rgba(197, 160, 89, 0.05);
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(197, 160, 89, 0.2);
        }

        .project-image-wrapper {
          position: relative;
          aspect-ratio: 1/1;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: var(--transition);
        }

        .project-card:hover .project-image {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(5, 5, 5, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .play-icon {
          font-size: 2.5rem;
          color: var(--primary-color);
          background: var(--bg-color);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .play-icon:hover {
          transform: scale(1.1);
          background: var(--primary-color);
          color: var(--bg-color);
        }

        .project-info {
          padding: 2rem;
        }

        .project-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .project-year, .project-type {
          font-family: 'Bebas Neue', cursive;
          color: var(--accent-color);
          font-size: 0.9rem;
          letter-spacing: 0.05em;
        }

        .project-title {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .project-details {
          color: var(--text-dim);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .btn-text {
          font-family: 'Bebas Neue', cursive;
          color: var(--primary-color);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          letter-spacing: 0.05em;
          transition: var(--transition);
        }

        .btn-text:hover {
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default MusicSection;
