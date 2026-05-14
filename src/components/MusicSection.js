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
        <h2 className="section-title" style={{ textAlign: 'center', display: 'block', margin: '0 auto 5rem' }}>Discography</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.coverArt} alt={project.title} className="project-image" />
              </div>
              
              <div className="project-info">
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'Bebas Neue', color: 'var(--accent-color)' }}>{project.year}</span>
                  <span style={{ fontFamily: 'Bebas Neue', color: 'var(--accent-color)' }}>{project.type}</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{project.tracks} Tracks</p>
                <a href={project.soundcloudUrl} target="_blank" rel="noreferrer" style={{
                  fontFamily: 'Bebas Neue', color: 'var(--primary-color)', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem'
                }}>
                  Listen on SoundCloud <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
