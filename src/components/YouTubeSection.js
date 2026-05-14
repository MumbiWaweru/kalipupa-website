import React from 'react';

const YouTubeSection = () => {
  return (
    <section id="videos" className="videos">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', display: 'block', margin: '0 auto 5rem' }}>Visuals</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="video-card" style={{ width: '100%', maxWidth: '900px', background: 'var(--bg-color)', border: '1px solid rgba(197, 160, 89, 0.1)' }}>
            <div className="video-wrapper">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed?listType=user_uploads&list=Kalipupa13" 
                title="Kalipupa Latest Videos"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ padding: '3rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Official YouTube Channel</h3>
              <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>Experience the visual journey of Kalipupa.</p>
              <a href="https://www.youtube.com/@Kalipupa13" target="_blank" rel="noreferrer" style={{
                fontFamily: 'Bebas Neue', color: 'var(--primary-color)', textDecoration: 'none', fontSize: '1.2rem'
              }}>Visit Channel</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
