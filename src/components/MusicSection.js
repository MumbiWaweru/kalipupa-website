import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const MusicSection = () => {
  const releases = [
    {
      id: 1,
      title: "Only Easy Day Jana",
      year: "2018",
      type: "EP",
      description: "A seminal project exploring the early struggles and triumphs of a Nairobi native. The foundation of the Kalipupa sound.",
      tracks: ["O.E.D.I.Y", "Distant Stranger", "Smile Ya Mwafrica", "Man Is Free"],
      soundcloudUrl: "https://soundcloud.com/user-727292764/sets/only-easy-day-jana-ep",
      coverArt: "/photos/albums/album-cover.jpg"
    },
    {
      id: 2,
      title: "Evolution & Singles",
      year: "2019-2023",
      type: "Collection",
      description: "A series of high-impact releases and collaborations that pushed the boundaries of contemporary Kenyan HipHop.",
      tracks: ["BTiSA - FinalVibez", "GOT Freestyle", "SaFarin'", "Urban Flow"],
      soundcloudUrl: "https://soundcloud.com/user-727292764",
      coverArt: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1887&auto=format&fit=crop"
    }
  ];

  return (
    <section id="music" className="music-detailed">
      <div className="container">
        <div className="section-header-split">
          <div className="header-left">
            <span className="section-index">02</span>
            <h2 className="section-title-large">The Sound</h2>
          </div>
          <div className="header-right">
            <p className="header-desc-mini">
              Explore the sonic evolution of Kalipupa. From gritty street 
              narratives to experimental African fusion.
            </p>
          </div>
        </div>

        <div className="releases-stack">
          {releases.map((item) => (
            <div key={item.id} className="release-row">
              <div className="release-visual">
                <img src={item.coverArt} alt={item.title} className="release-img" />
                <div className="release-badge">{item.type}</div>
              </div>
              
              <div className="release-info">
                <div className="release-header">
                  <span className="release-year">{item.year}</span>
                  <h3 className="release-title">{item.title}</h3>
                </div>
                
                <p className="release-description">{item.description}</p>
                
                <div className="tracklist-mini">
                  <span className="tracklist-label">Featured Tracks</span>
                  <div className="track-pills">
                    {item.tracks.map((track, i) => (
                      <span key={i} className="track-pill">{track}</span>
                    ))}
                  </div>
                </div>

                <div className="release-actions">
                  <a href={item.soundcloudUrl} target="_blank" rel="noreferrer" className="btn-release">
                    Listen on SoundCloud <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sound-philosophy">
          <div className="philosophy-box">
            <h4 className="phi-title">Sonic Identity</h4>
            <p className="phi-text">
              "We blend the 808s of the city with the drums of the village. 
              It's about finding harmony in the chaos of Nairobi."
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .music-detailed {
          background: #050505;
          padding: 10rem 0;
        }

        .section-header-split {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 10rem;
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

        .releases-stack {
          display: flex;
          flex-direction: column;
          gap: 8rem;
        }

        .release-row {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 6rem;
          align-items: center;
        }

        .release-visual {
          position: relative;
        }

        .release-img {
          width: 100%;
          aspect-ratio: 1/1;
          object-fit: cover;
          filter: grayscale(100%);
          transition: var(--transition);
        }

        .release-row:hover .release-img {
          filter: grayscale(0%);
        }

        .release-badge {
          position: absolute;
          top: 20px;
          left: -10px;
          background: var(--primary-color);
          color: black;
          padding: 0.3rem 1rem;
          font-family: 'Bebas Neue', cursive;
          font-size: 0.8rem;
          transform: rotate(-5deg);
        }

        .release-year {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: var(--primary-color);
          font-size: 1.2rem;
        }

        .release-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-top: 0.5rem;
          margin-bottom: 2rem;
        }

        .release-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.7;
          max-width: 600px;
        }

        .tracklist-mini {
          margin-bottom: 3rem;
        }

        .tracklist-label {
          display: block;
          font-family: 'Bebas Neue', cursive;
          font-size: 0.9rem;
          color: var(--text-dim);
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }

        .track-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .track-pill {
          padding: 0.4rem 1rem;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .track-pill:hover {
          border-color: var(--primary-color);
          color: white;
        }

        .btn-release {
          font-family: 'Bebas Neue', cursive;
          color: var(--primary-color);
          text-decoration: none;
          font-size: 1.1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: var(--transition);
        }

        .btn-release:hover {
          gap: 1.2rem;
          color: white;
        }

        .sound-philosophy {
          margin-top: 12rem;
          padding-top: 6rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .philosophy-box {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .phi-title {
          color: var(--primary-color);
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .phi-text {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 2.2rem;
          line-height: 1.3;
          color: white;
        }

        @media (max-width: 1024px) {
          .release-row { grid-template-columns: 1fr; gap: 3rem; }
          .section-header-split { flex-direction: column; align-items: flex-start; gap: 2rem; }
          .header-desc-mini { text-align: left; }
        }
      `}</style>
    </section>
  );
};

export default MusicSection;
