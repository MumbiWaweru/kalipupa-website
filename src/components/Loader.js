// src/components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <>
      <style jsx>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 0;
          animation: fadeOut 1s ease 1.5s forwards;
        }
        
        .loader-content {
          text-align: center;
        }
        
        .loader-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid var(--light);
          border-top-color: var(--secondary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }
        
        .loader-text {
          color: var(--primary);
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 2px;
        }
        
        .loader-text span {
          color: var(--secondary);
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }
      `}</style>
      
      <div className="loader-overlay">
        <div className="loader-content">
          <div className="loader-spinner"></div>
          <div className="loader-text">KALIPUPA<span>.</span></div>
        </div>
      </div>
    </>
  );
};

export default Loader;