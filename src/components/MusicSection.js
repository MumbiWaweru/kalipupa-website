// MusicSection - NAIROBI HIPHOP ARTIST MUSIC SECTION
import React, { useState } from 'react';
import { FiPlay, FiExternalLink, FiClock, FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const MusicSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Only Easy Day Jana EP",
      year: "2018",
      type: "EP",
      tracks: 11,
      description: "Debut EP featuring 11 tracks that established the Kalipupa sound",
      tracksList: [
        { title: "O.E.D.I.Y", duration: "3:45" },
        { title: "Distant Stranger", duration: "4:20" },
        { title: "Kalipupa", duration: "3:15" },
        { title: "Smile Ya Mwafrica", duration: "3:50" },
        { title: "Man Is Free", duration: "4:05" },
        { title: "Another Track", duration: "3:30" },
        { title: "Bonus Beat", duration: "2:55" }
      ],
      soundcloudUrl: "https://soundcloud.com/user-727292764/sets/only-easy-day-jana-ep",
      coverArt: "/photos/albums/album-cover.jpg"
    },
    {
      id: 2,
      title: "Single Releases",
      year: "2017-2023",
      type: "Singles",
      tracks: 17,
      description: "Collection of individual tracks and collaborations",
      tracksList: [
        { title: "BTiSA - FinalVibez", duration: "3:25" },
        { title: "BTiSA - GOT Freestyle", duration: "2:45" },
        { title: "BTiSA - SaFarin'", duration: "3:10" },
        { title: "Urban Flow", duration: "3:55" },
        { title: "City Lights", duration: "4:10" }
      ],
      soundcloudUrl: "https://soundcloud.com/user-727292764",
      coverArt: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Upcoming Release",
      year: "2024",
      type: "Album",
      tracks: 12,
      description: "Latest project showcasing evolution of Kalipupa's sound",
      tracksList: [
        { title: "New Dawn", duration: "4:00" },
        { title: "Nairobi Nights", duration: "3:45" },
        { title: "Legacy", duration: "5:20" }
      ],
      soundcloudUrl: "#",
      coverArt: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const totalStats = {
    tracks: 28,
    plays: 500
  };

  const playTrack = (trackIndex) => {
    setCurrentTrack(trackIndex);
    console.log(`Playing track: ${projects[activeProject].tracksList[trackIndex].title}`);
  };

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <style jsx>{`
        .music-section {
          position: relative;
          padding: 5rem 0;
          background: #0F0F0F;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          padding-bottom: 1.5rem;
        }

        .section-header h2 {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          position: relative;
          font-weight: 800;
        }

        .section-header h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #7C3AED, #A855F7);
          border-radius: 2px;
        }

        .section-header p {
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          color: #CCCCCC;
          margin-top: 0.5rem;
        }

        .music-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 3rem;
          width: 100%;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .music-stat {
          text-align: center;
          padding: 1.5rem 1rem;
          background: rgba(30, 30, 30, 0.7);
          border-radius: 8px;
          border: 1px solid rgba(124, 58, 237, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .music-stat:hover {
          transform: translateY(-8px);
          border-color: rgba(124, 58, 237, 0.5);
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
          background: rgba(40, 40, 40, 0.8);
        }

        .music-stat-icon {
          font-size: clamp(1.5rem, 4vw, 2rem);
          margin-bottom: 0.5rem;
          color: #A855F7;
          transition: transform 0.3s ease;
        }

        .music-stat:hover .music-stat-icon {
          transform: scale(1.1);
        }

        .music-stat-value {
          font-size: clamp(1.5rem, 5vw, 2.2rem);
          font-weight: 800;
          margin-bottom: 0.25rem;
          color: #A855F7;
        }

        .music-stat-label {
          font-size: clamp(0.75rem, 2vw, 0.9rem);
          color: #AAAAAA;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
          margin-top: 0.25rem;
        }

        .projects-navigation {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .project-nav-btn {
          background: rgba(30, 30, 30, 0.7);
          border: 1px solid rgba(124, 58, 237, 0.3);
          color: #A855F7;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .project-nav-btn:hover {
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          color: #FFFFFF;
          border-color: transparent;
          transform: scale(1.1);
        }

        .project-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
        }

        .project-tab {
          padding: 0.6rem 1rem;
          background: rgba(30, 30, 30, 0.7);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 8px;
          color: #CCCCCC;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: clamp(0.8rem, 2.5vw, 0.9rem);
          text-align: center;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .project-tab.active {
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          border-color: transparent;
          color: #FFFFFF;
        }

        .project-tab:hover:not(.active) {
          background: rgba(40, 40, 40, 0.8);
          border-color: rgba(124, 58, 237, 0.4);
        }

        .project-display {
          display: flex;
          gap: 2rem;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          width: 100%;
        }

        .project-cover {
          flex: 0 0 auto;
          width: 250px;
          height: 250px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 0 0 40px rgba(124, 58, 237, 0.2);
          position: relative;
          flex-shrink: 0;
        }

        .cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%);
        }

        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .project-cover:hover .play-overlay {
          opacity: 1;
        }

        .play-overlay:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: linear-gradient(135deg, #A855F7, #C084FC);
        }

        .project-info {
          flex: 1;
          min-width: 280px;
        }

        .project-title {
          font-size: clamp(1.25rem, 4vw, 1.8rem);
          color: #FFFFFF;
          margin-bottom: 0.5rem;
          font-weight: 800;
          word-wrap: break-word;
        }

        .project-meta {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .project-type {
          background: rgba(124, 58, 237, 0.15);
          color: #A855F7;
          padding: 0.3rem 0.75rem;
          border-radius: 8px;
          font-size: clamp(0.75rem, 2.5vw, 0.9rem);
          font-weight: 600;
          white-space: nowrap;
        }

        .project-year {
          background: rgba(30, 30, 30, 0.7);
          color: #CCCCCC;
          padding: 0.3rem 0.75rem;
          border-radius: 8px;
          font-size: clamp(0.75rem, 2.5vw, 0.9rem);
          white-space: nowrap;
        }

        .project-description {
          color: #CCCCCC;
          line-height: 1.7;
          margin-bottom: 1rem;
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
        }

        .project-tracks {
          background: rgba(30, 30, 30, 0.7);
          border-radius: 8px;
          padding: 1.25rem;
          border: 1px solid rgba(124, 58, 237, 0.2);
          width: 100%;
        }

        .track-list {
          margin-top: 1rem;
        }

        .track-item {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          background: rgba(40, 40, 40, 0.7);
          border-radius: 8px;
          margin-bottom: 0.5rem;
          border: 1px solid rgba(124, 58, 237, 0.15);
          transition: all 0.3s ease;
          cursor: pointer;
          gap: 0.75rem;
        }

        .track-item:hover {
          border-color: rgba(124, 58, 237, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(124, 58, 237, 0.2);
        }

        .track-item.playing {
          background: rgba(124, 58, 237, 0.15);
          border-color: rgba(124, 58, 237, 0.4);
        }

        .track-number {
          width: 30px;
          font-weight: 700;
          color: #A855F7;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .track-info {
          flex: 1;
          min-width: 0;
        }

        .track-title {
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .track-meta {
          display: flex;
          gap: 1rem;
          color: #AAAAAA;
          font-size: clamp(0.8rem, 2vw, 0.95rem);
        }

        .track-duration {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #A855F7;
          white-space: nowrap;
        }

        .play-btn {
          background: rgba(30, 30, 30, 0.7);
          border: 1px solid rgba(124, 58, 237, 0.3);
          color: #A855F7;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .play-btn:hover {
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          color: #FFFFFF;
          border-color: transparent;
          transform: scale(1.1);
        }

        .action-buttons {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
          width: 100%;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid #7C3AED;
          color: #A855F7;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex: 1;
          min-width: auto;
          white-space: nowrap;
        }

        .btn:hover {
          color: #FFFFFF;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(124, 58, 237, 0.4);
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          border-color: transparent;
        }

        .btn-primary {
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          color: #FFFFFF;
          border: none;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #A855F7, #C084FC);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.5);
        }

        .section-divider {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 100px;
          height: 2px;
          background: repeating-linear-gradient(
            to right,
            #7C3AED 0,
            #7C3AED 8px,
            transparent 8px,
            transparent 16px
          );
          opacity: 0.2;
          z-index: 0;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .project-display {
            flex-direction: column;
            text-align: center;
          }

          .project-cover {
            width: 220px;
            height: 220px;
          }

          .project-info {
            width: 100%;
            min-width: 100%;
          }

          .project-meta {
            justify-content: center;
          }

          .action-buttons {
            justify-content: center;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .music-section {
            padding: 4rem 0;
          }

          .music-stats {
            gap: 0.75rem;
          }

          .music-stat {
            padding: 1.25rem 0.75rem;
          }

          .project-selector {
            flex-wrap: wrap;
            justify-content: center;
          }

          .project-tab {
            flex: 0 0 calc(50% - 0.25rem);
            max-width: calc(50% - 0.25rem);
          }

          .project-cover {
            width: 200px;
            height: 200px;
          }

          .track-item {
            flex-wrap: wrap;
          }

          .track-meta {
            width: 100%;
            justify-content: space-between;
          }

          .play-btn {
            margin-top: 0.5rem;
          }

          .action-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .music-section {
            padding: 3rem 0;
          }

          .project-tab {
            flex: 0 0 100%;
            max-width: 100%;
            font-size: 0.8rem;
            padding: 0.5rem 0.75rem;
          }

          .project-cover {
            width: 180px;
            height: 180px;
          }

          .project-tracks {
            padding: 1rem;
          }

          .track-item {
            padding: 0.6rem;
          }

          .track-title {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section id="music" className="music-section">
        <div className="section-divider"></div>

        <div className="container">
          <div className="section-header">
            <h2>Music & Discography</h2>
            <p>Stream all tracks on SoundCloud</p>
          </div>

          <div className="music-stats">
            <div className="music-stat">
              <div className="music-stat-icon">🎵</div>
              <div className="music-stat-value">{totalStats.tracks}</div>
              <div className="music-stat-label">Total Tracks</div>
            </div>
            <div className="music-stat">
              <div className="music-stat-icon">🎧</div>
              <div className="music-stat-value">{totalStats.plays}+</div>
              <div className="music-stat-label">Total Plays</div>
            </div>
          </div>

          <div className="projects-navigation">
            <button className="project-nav-btn" onClick={prevProject} aria-label="Previous project">
              <FiChevronLeft />
            </button>
            <button className="project-nav-btn" onClick={nextProject} aria-label="Next project">
              <FiChevronRight />
            </button>
          </div>

          <div className="project-selector">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-tab ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                {project.title}
              </div>
            ))}
          </div>

          <div className="project-display">
            <div className="project-cover">
              <img
                src={projects[activeProject].coverArt}
                alt={`${projects[activeProject].title} Cover Art`}
                className="cover-image"
                loading="lazy"
              />
              <div className="cover-overlay"></div>
              <div
                className="play-overlay"
                onClick={() => playTrack(0)}
                role="button"
                tabIndex={0}
                aria-label="Play album"
              >
                <FiPlay />
              </div>
            </div>

            <div className="project-info">
              <h3 className="project-title">{projects[activeProject].title}</h3>
              <div className="project-meta">
                <span className="project-type">{projects[activeProject].type}</span>
                <span className="project-year">{projects[activeProject].year}</span>
                <span className="project-year">{projects[activeProject].tracks} tracks</span>
              </div>
              <p className="project-description">{projects[activeProject].description}</p>

              <div className="action-buttons">
                <a
                  href={projects[activeProject].soundcloudUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FiExternalLink /> Listen on SoundCloud
                </a>
                <button className="btn">
                  <FiHeart /> Favorite
                </button>
              </div>
            </div>
          </div>

          <div className="project-tracks">
            <h4 style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)' }}>Track List</h4>
            <div className="track-list">
              {projects[activeProject].tracksList.map((track, index) => (
                <div
                  key={index}
                  className={`track-item ${currentTrack === index ? 'playing' : ''}`}
                  onClick={() => playTrack(index)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="track-number">{index + 1}</div>
                  <div className="track-info">
                    <div className="track-title">{track.title}</div>
                    <div className="track-meta">
                      <span className="track-duration">
                        <FiClock /> {track.duration}
                      </span>
                    </div>
                  </div>
                  <button
                    className="play-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      playTrack(index);
                    }}
                    aria-label={`Play ${track.title}`}
                  >
                    <FiPlay />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MusicSection;
