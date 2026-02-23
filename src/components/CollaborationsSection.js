// CollaborationsSection - NAIROBI HIPHOP ARTIST COLLABORATIONS
import React, { useState } from 'react';
import { FiExternalLink, FiUsers, FiMusic, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const CollaborationsSection = () => {
  const [activeTab, setActiveTab] = useState('collaborations');
  const [expandedCollab, setExpandedCollab] = useState(null);

  const collaborations = [
    {
      id: 1,
      title: "BTiSA Collaboration",
      artists: ["Kalipupa", "BTiSA"],
      year: "2020",
      type: "Single",
      description: "Collaboration bringing together Nairobi talents. The track features wordplay and innovative production.",
      tracks: [
        { title: "FinalVibez", plays: 54, duration: "3:25" },
        { title: "GOT Freestyle", plays: 11, duration: "2:45" },
        { title: "SaFarin'", plays: 28, duration: "3:10" }
      ],
      coverArt: "https://images.unsplash.com/photo-1511671782779-c97d573caf7e?q=80&w=1932&auto=format&fit=crop",
      genre: "Hip-Hop/Rap",
      location: "Nairobi, Kenya",
      achievements: ["Top 10 on local charts", "100K+ streams"]
    },
    {
      id: 2,
      title: "Urban Voices Project",
      artists: ["Kalipupa", "Various Artists"],
      year: "2021",
      type: "Compilation",
      description: "Multiple artists from the Nairobi scene, showcasing urban music in Kenya.",
      tracks: [
        { title: "City Unity", plays: 42, duration: "4:10" },
        { title: "Street Symphony", plays: 38, duration: "3:55" },
        { title: "Urban Flow", plays: 67, duration: "3:55" }
      ],
      coverArt: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1935&auto=format&fit=crop",
      genre: "Hip-Hop/Pop",
      location: "Nairobi, Kenya",
      achievements: ["Featured on national radio"]
    },
    {
      id: 3,
      title: "Cross-Cultural Mixtape",
      artists: ["Kalipupa", "International Artists"],
      year: "2022",
      type: "Mixtape",
      description: "Artists from different countries creating a fusion of sounds and cultures.",
      tracks: [
        { title: "Global Rhythm", plays: 35, duration: "3:40" },
        { title: "Cultural Bridge", plays: 29, duration: "4:25" },
        { title: "Unity Song", plays: 51, duration: "3:15" }
      ],
      coverArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
      genre: "World Music/Hip-Hop",
      location: "Pan-African",
      achievements: ["International recognition"]
    }
  ];

  const featuredArtists = [
    { name: "BTiSA", role: "Rapper", country: "Kenya", tracks: 3 },
    { name: "Urban Voices Collective", role: "Group", country: "Kenya", tracks: 5 },
    { name: "International Artists", role: "Various", country: "Multiple", tracks: 7 },
    { name: "Nairobi Beats", role: "Producer", country: "Kenya", tracks: 12 }
  ];

  const toggleExpand = (id) => {
    setExpandedCollab(expandedCollab === id ? null : id);
  };

  return (
    <>
      <style jsx>{`
        .collaborations-section {
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
          background: linear-gradient(90deg, #7C3AED, #A855F7, #EC4899);
          border-radius: 3px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #CCCCCC;
          margin-top: 0.5rem;
        }

        .tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .tab {
          padding: 0.8rem 2rem;
          background: rgba(30, 30, 30, 0.7);
          border: 1px solid rgba(255, 215, 0, 0.1);
          border-radius: 8px;
          color: #CCCCCC;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .tab.active {
          background: rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.3);
          color: #A855F7;
        }

        .tab:hover:not(.active) {
          background: rgba(124, 58, 237, 0.05);
          border-color: rgba(124, 58, 237, 0.15);
        }

        .collaborations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        .collab-card {
          background: rgba(30, 30, 30, 0.9);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(124, 58, 237, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .collab-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .collab-info {
          padding: 0;
        }

        .collab-title {
          font-size: 1.5rem;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .collab-artists {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .artist-tag {
          background: rgba(124, 58, 237, 0.1);
          color: #A855F7;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .collab-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #CCCCCC;
          font-size: 0.9rem;
        }

        .meta-icon {
          color: #A855F7;
        }

        .collab-description {
          color: #CCCCCC;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .expand-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.2);
          color: #A855F7;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .expand-btn:hover {
          background: rgba(124, 58, 237, 0.2);
        }

        .expanded-content {
          background: rgba(40, 40, 40, 0.7);
          padding: 1.5rem;
          border-top: 1px solid rgba(124, 58, 237, 0.1);
          max-height: ${expandedCollab ? '500px' : '0'};
          overflow: hidden;
          transition: max-height 0.5s ease, padding 0.5s ease;
        }

        .expanded-content.expanded {
          max-height: 500px;
        }

        .track-list {
          margin-bottom: 1.5rem;
        }

        .track-item {
          display: flex;
          justify-content: space-between;
          padding: 0.8rem;
          background: rgba(50, 50, 50, 0.7);
          border-radius: 8px;
          margin-bottom: 0.5rem;
        }

        .track-title {
          color: #FFFFFF;
          font-weight: 500;
        }

        .track-meta {
          display: flex;
          gap: 1rem;
          color: #AAAAAA;
          font-size: 0.85rem;
        }

        .achievements {
          margin-top: 1rem;
        }

        .achievement {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #A855F7;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .achievement-icon {
          color: #A855F7;
        }

        .featured-artists {
          margin-top: 4rem;
        }

        .artists-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }

        .artist-card {
          background: rgba(30, 30, 30, 0.9);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          border: 1px solid rgba(124, 58, 237, 0.1);
          transition: all 0.3s ease;
        }

        .artist-card:hover {
          transform: translateY(-8px);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .artist-icon {
          font-size: 3rem;
          margin: 0 auto 1.2rem;
          color: #A855F7;
          display: block;
        }

        .artist-name {
          font-size: 1.2rem;
          color: #FFFFFF;
          margin-bottom: 0.3rem;
          font-weight: 700;
        }

        .artist-role {
          color: #A855F7;
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }

        .artist-country {
          color: #CCCCCC;
          font-size: 0.85rem;
          margin-bottom: 0.8rem;
        }

        .artist-tracks {
          color: #AAAAAA;
          font-size: 0.9rem;
        }

        .action-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 1rem 2rem;
          background: transparent;
          border: 2px solid #7C3AED;
          color: #A855F7;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
          z-index: 1;
          box-shadow: var(--shadow-sm);
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          opacity: 0;
          transition: opacity var(--transition-normal);
          z-index: -1;
        }

        .btn:hover::before {
          opacity: 1;
        }

        .btn:hover {
          color: #FFFFFF;
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }

        .btn-primary {
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          color: #FFFFFF;
          border: none;
          box-shadow: var(--shadow-md);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #A855F7, #C084FC);
          transform: translateY(-3px);
          box-shadow: var(--shadow-xl);
        }

        @media (max-width: 768px) {
          .collaborations-grid {
            grid-template-columns: 1fr;
          }

          .tabs {
            gap: 0.5rem;
          }

          .tab {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }

          .collab-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .artists-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }

          .action-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <section id="collaborations" className="collaborations-section">
        <div className="container">
          <div className="section-header">
            <h2>Collaborations</h2>
            <p>Working with other artists</p>
          </div>

          <div className="tabs">
            <div
              className={`tab ${activeTab === 'collaborations' ? 'active' : ''}`}
              onClick={() => setActiveTab('collaborations')}
            >
              <FiUsers /> Collaborations
            </div>
            <div
              className={`tab ${activeTab === 'featured' ? 'active' : ''}`}
              onClick={() => setActiveTab('featured')}
            >
              <FiAward /> Artists
            </div>
          </div>

          {activeTab === 'collaborations' && (
            <div className="collaborations-grid">
              {collaborations.map((collab) => (
                <div key={collab.id} className="collab-card">
                  <div className="collab-info">
                    <h3 className="collab-title">{collab.title}</h3>

                    <div className="collab-artists">
                      {collab.artists.map((artist, idx) => (
                        <span key={idx} className="artist-tag">{artist}</span>
                      ))}
                    </div>

                    <div className="collab-meta">
                      <div className="meta-item">
                        <FiCalendar className="meta-icon" />
                        <span>{collab.year}</span>
                      </div>
                      <div className="meta-item">
                        <FiMusic className="meta-icon" />
                        <span>{collab.type}</span>
                      </div>
                      <div className="meta-item">
                        <FiMapPin className="meta-icon" />
                        <span>{collab.location}</span>
                      </div>
                    </div>

                    <p className="collab-description">{collab.description}</p>

                    <button
                      className="expand-btn"
                      onClick={() => toggleExpand(collab.id)}
                    >
                      {expandedCollab === collab.id ? 'Show Less' : 'View Details'}
                      <FiExternalLink />
                    </button>
                  </div>
                  
                  <div className={`expanded-content ${expandedCollab === collab.id ? 'expanded' : ''}`}>
                    <div className="track-list">
                      <h4 style={{ color: '#A855F7', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>Tracks</h4>
                      {collab.tracks.map((track, idx) => (
                        <div key={idx} className="track-item">
                          <div className="track-title">{track.title}</div>
                          <div className="track-meta">
                            <span>{track.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="achievements">
                      <h4 style={{ color: '#A855F7', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '700' }}>Achievements</h4>
                      {collab.achievements.map((achievement, idx) => (
                        <div key={idx} className="achievement">
                          <FiAward className="achievement-icon" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'featured' && (
            <div className="featured-artists">
              <div className="artists-grid">
                {featuredArtists.map((artist, index) => (
                  <div key={index} className="artist-card">
                    <div className="artist-icon">🎤</div>
                    <h4 className="artist-name">{artist.name}</h4>
                    <div className="artist-role">{artist.role}</div>
                    <div className="artist-country">{artist.country}</div>
                    <div className="artist-tracks">{artist.tracks} tracks</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CollaborationsSection;