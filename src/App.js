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
  // Mobile viewport optimization
  useEffect(() => {
    // Prevent horizontal scroll on mobile
    const preventHorizontalScroll = () => {
      document.body.style.overflowX = 'hidden';
    };

    // Handle mobile viewport height issue (Safari iOS)
    const setVhVariable = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    preventHorizontalScroll();
    setVhVariable();
    window.addEventListener('resize', setVhVariable);

    return () => {
      window.removeEventListener('resize', setVhVariable);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <CollaborationsSection />
      <PhotoGallery />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;