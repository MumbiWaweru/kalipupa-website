// src/App.js - KALIPUPA ARTIST PORTFOLIO
import React, { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MusicSection from './components/MusicSection';
import CollaborationsSection from './components/CollaborationsSection';
import PhotoGallery from './components/PhotoGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Layout/Footer';
import './styles/global.css';

function App() {
  useEffect(() => {
    const preventHorizontalScroll = () => {
      document.body.style.overflowX = 'hidden';
    };
    const setVhVariable = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    // Prevent horizontal scroll
    preventHorizontalScroll();
    
    // Set mobile viewport height
    setVhVariable();
    
    // Add mobile viewport fix class
    document.documentElement.classList.add('mobile-optimized');
    
    window.addEventListener('resize', setVhVariable);
    return () => window.removeEventListener('resize', setVhVariable);
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <MusicSection />
        <CollaborationsSection />
        <PhotoGallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
