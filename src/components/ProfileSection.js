// src/components/ProfileSection.js
import React from 'react';
import { artistData } from '../data/artistData';

const ProfileSection = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="container">
        <h2>Artist Profile</h2>
        
        <div className="profile-grid">
          <div className="profile-image-container">
            <div className="profile-image">
              <div className="image-placeholder">
                <div className="placeholder-icon">🎤</div>
                <p>Kalipupa</p>
              </div>
              <div className="image-overlay"></div>
            </div>
            
            <div className="profile-quick-facts">
              <h3>Quick Facts</h3>
              <div className="facts-grid">
                <div className="fact">
                  <span className="fact-label">Name</span>
                  <span className="fact-value">{artistData.name}</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">{artistData.location}</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Genre</span>
                  <span className="fact-value">{artistData.genre}</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Active Since</span>
                  <span className="fact-value">{artistData.yearsActive}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="profile-content">
            <div className="bio-section">
              <h3>Biography</h3>
              <p className="bio-text">{artistData.bio}</p>
              
              <div className="highlight-quote">
                <div className="quote-icon">"</div>
                <p className="quote-text">HipHop as an open path to expressing outright emotions</p>
              </div>
            </div>
            
            <div className="stats-section">
              <h3>Career Statistics</h3>
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-number">2017</div>
                  <div className="stat-label">First Mixtape</div>
                </div>
                <div className="stat">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Mixtapes</div>
                </div>
                <div className="stat">
                  <div className="stat-number">45+</div>
                  <div className="stat-label">Performances</div>
                </div>
                <div className="stat">
                  <div className="stat-number">8</div>
                  <div className="stat-label">Collaborations</div>
                </div>
              </div>
            </div>
            
            <div className="influences-section">
              <h3>Influences & Style</h3>
              <div className="influences-tags">
                <span className="tag">Traditional Kenyan Music</span>
                <span className="tag">90s HipHop</span>
                <span className="tag">Conscious Rap</span>
                <span className="tag">Storytelling</span>
                <span className="tag">African Rhythms</span>
                <span className="tag">Emotional Expression</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .profile-section {
          background-color: var(--darker);
        }
        
        .profile-grid {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: var(--spacing-xl);
          align-items: start;
        }
        
        .profile-image-container {
          position: sticky;
          top: 100px;
        }
        
        .profile-image {
          width: 100%;
          height: 350px;
          background: linear-gradient(135deg, var(--dark), var(--darker));
          border-radius: var(--radius-lg);
          margin-bottom: var(--spacing-md);
          position: relative;
          overflow: hidden;
          border: 2px solid rgba(230, 126, 34, 0.3);
        }
        
        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--text-dim);
        }
        
        .placeholder-icon {
          font-size: 4rem;
          margin-bottom: var(--spacing-sm);
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(230, 126, 34, 0.1));
        }
        
        .profile-quick-facts {
          background: linear-gradient(135deg, rgba(28, 40, 51, 0.8), rgba(23, 32, 42, 0.9));
          border-radius: var(--radius-lg);
          padding: var(--spacing-md);
          border: 1px solid rgba(230, 126, 34, 0.2);
        }
        
        .facts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-sm);
        }
        
        .fact {
          display: flex;
          justify-content: space-between;
          padding: var(--spacing-xs) 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .fact:last-child {
          border-bottom: none;
        }
        
        .fact-label {
          color: var(--text-dim);
          font-weight: 500;
        }
        
        .fact-value {
          color: var(--primary);
          font-weight: 600;
        }
        
        .profile-content {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }
        
        .bio-section {
          background: linear-gradient(135deg, rgba(28, 40, 51, 0.8), rgba(23, 32, 42, 0.9));
          border-radius: var(--radius-lg);
          padding: var(--spacing-lg);
          border: 1px solid rgba(230, 126, 34, 0.2);
        }
        
        .bio-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text);
          margin-bottom: var(--spacing-md);
        }
        
        .highlight-quote {
          background: linear-gradient(45deg, rgba(230, 126, 34, 0.1), rgba(39, 174, 96, 0.1));
          border-left: 4px solid var(--primary);
          padding: var(--spacing-md);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-top: var(--spacing-md);
        }
        
        .quote-icon {
          font-size: 3rem;
          color: var(--primary);
          line-height: 1;
          margin-bottom: var(--spacing-xs);
        }
        
        .quote-text {
          font-style: italic;
          font-size: 1.2rem;
          color: var(--secondary);
          margin: 0;
        }
        
        .stats-section {
          background: linear-gradient(135deg, rgba(28, 40, 51, 0.8), rgba(23, 32, 42, 0.9));
          border-radius: var(--radius-lg);
          padding: var(--spacing-lg);
          border: 1px solid rgba(230, 126, 34, 0.2);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-md);
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: var(--spacing-xs);
        }
        
        .stat-label {
          color: var(--text-dim);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .influences-section {
          background: linear-gradient(135deg, rgba(28, 40, 51, 0.8), rgba(23, 32, 42, 0.9));
          border-radius: var(--radius-lg);
          padding: var(--spacing-lg);
          border: 1px solid rgba(230, 126, 34, 0.2);
        }
        
        .influences-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }
        
        .tag {
          background: rgba(230, 126, 34, 0.1);
          color: var(--primary);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          border: 1px solid rgba(230, 126, 34, 0.3);
          transition: all 0.3s ease;
        }
        
        .tag:hover {
          background: rgba(230, 126, 34, 0.2);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .profile-grid {
            grid-template-columns: 1fr;
          }
          
          .profile-image-container {
            position: static;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default ProfileSection;