// src/App.js - KALIPUPA ARTIST PORTFOLIO
import React from 'react';
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