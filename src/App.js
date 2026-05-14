import React, { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MusicSection from './components/MusicSection';
import YouTubeSection from './components/YouTubeSection';
import PhotoGallery from './components/PhotoGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Layout/Footer';
import './styles/global.css';

function App() {
  useEffect(() => {
    // Mobile viewport height fix
    const setVhVariable = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVhVariable();
    window.addEventListener('resize', setVhVariable);
    return () => window.removeEventListener('resize', setVhVariable);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MusicSection />
        <YouTubeSection />
        <PhotoGallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
