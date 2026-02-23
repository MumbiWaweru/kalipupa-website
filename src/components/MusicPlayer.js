// src/components/MusicPlayer.js - Interactive Music Player with Kenyan Music Samples
import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiSkipForward, FiSkipBack, FiVolume2, FiHeart, FiShare2 } from 'react-icons/fi';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  const audioRef = useRef(null);
  
  // Sample tracks - in a real app, these would be actual Kenyan music files
  const tracks = [
    {
      title: "Nairobi Nights",
      artist: "Kalipupa",
      album: "Only Easy Day Jana EP",
      duration: "3:45",
      cover: "/photos/albums/album-cover.jpg",
      sampleUrl: "/music/sample1.mp3" // Placeholder for actual music file
    },
    {
      title: "Sawa Sawa Vibes",
      artist: "Kalipupa",
      album: "Urban Nairobi",
      duration: "4:20",
      cover: "/photos/albums/album-cover.jpg",
      sampleUrl: "/music/sample2.mp3" // Placeholder for actual music file
    },
    {
      title: "Mtaani Stories",
      artist: "Kalipupa",
      album: "Streets of Nairobi",
      duration: "3:58",
      cover: "/photos/albums/album-cover.jpg",
      sampleUrl: "/music/sample3.mp3" // Placeholder for actual music file
    },
    {
      title: "Hustle in the City",
      artist: "Kalipupa",
      album: "Nairobi Chronicles",
      duration: "4:12",
      cover: "/photos/albums/album-cover.jpg",
      sampleUrl: "/music/sample4.mp3" // Placeholder for actual music file
    }
  ];
  
  const currentTrack = tracks[currentTrackIndex];
  
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const playNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };
  
  const playPrev = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };
  
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };
  
  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    audioRef.current.currentTime = (newProgress / 100) * duration;
  };
  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  useEffect(() => {
    const audio = audioRef.current;
    
    const setAudioData = () => {
      setDuration(audio.duration || 0);
      setCurrentTime(audio.currentTime);
      setProgress(((audio.currentTime || 0) / (audio.duration || 1)) * 100 || 0);
    };
    
    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    
    if (audio) {
      audio.addEventListener('loadedmetadata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);
      audio.addEventListener('ended', playNext);
      
      // Set initial volume
      audio.volume = volume;
    }
    
    return () => {
      if (audio) {
        audio.removeEventListener('loadedmetadata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
        audio.removeEventListener('ended', playNext);
      }
    };
  }, [currentTrackIndex]);
  
  useEffect(() => {
    // When track changes, load the new track and play it
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        setTimeout(() => {
          audioRef.current.play();
        }, 100);
      }
    }
  }, [currentTrackIndex]);

  return (
    <>
      <style jsx>{`
        .music-player {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 215, 0, 0.2);
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          z-index: 1000;
          box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.3);
        }

        .track-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          min-width: 250px;
        }

        .track-cover {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .track-details {
          display: flex;
          flex-direction: column;
        }

        .track-title {
          font-size: 1rem;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0;
        }

        .track-artist {
          font-size: 0.85rem;
          color: #FFD700;
          margin: 0;
        }

        .player-controls {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex: 1;
          justify-content: center;
        }

        .control-btn {
          background: none;
          border: none;
          color: #FFFFFF;
          font-size: 1.2rem;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          background: rgba(255, 215, 0, 0.1);
          color: #FFD700;
        }

        .play-btn {
          width: 50px;
          height: 50px;
          background: #FFD700;
          color: #000000;
          font-size: 1.4rem;
        }

        .play-btn:hover {
          background: #FFEC8B;
          transform: scale(1.05);
        }

        .progress-container {
          flex: 1;
          max-width: 400px;
        }

        .progress-bar {
          width: 100%;
          height: 5px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          margin-bottom: 0.5rem;
        }

        .progress-bar::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #FFD700;
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        .progress-bar::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #FFD700;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        .time-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #CCCCCC;
        }

        .volume-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 120px;
        }

        .volume-icon {
          color: #CCCCCC;
          font-size: 1.1rem;
        }

        .volume-bar {
          flex: 1;
          height: 5px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          outline: none;
          cursor: pointer;
        }

        .volume-bar::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #FFD700;
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        .volume-bar::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #FFD700;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        .extra-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-left: 1rem;
        }

        .extra-btn {
          background: none;
          border: none;
          color: #CCCCCC;
          font-size: 1.1rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .extra-btn:hover {
          color: #FFD700;
        }

        @media (max-width: 768px) {
          .music-player {
            padding: 0.8rem 1rem;
          }

          .track-info {
            min-width: 180px;
          }

          .track-cover {
            width: 45px;
            height: 45px;
          }

          .player-controls {
            gap: 0.8rem;
          }

          .progress-container {
            max-width: 150px;
          }

          .volume-container {
            min-width: 100px;
          }

          .extra-controls {
            margin-left: 0.5rem;
          }
        }
      `}</style>

      <div className="music-player">
        <div className="track-info">
          <img src={currentTrack.cover} alt={`${currentTrack.title} album cover`} className="track-cover" />
          <div className="track-details">
            <p className="track-title">{currentTrack.title}</p>
            <p className="track-artist">{currentTrack.artist}</p>
          </div>
        </div>

        <div className="player-controls">
          <button
            className="control-btn focus-outline"
            onClick={playPrev}
            tabIndex="0"
            aria-label="Previous track"
          >
            <FiSkipBack />
          </button>

          <button
            className="control-btn play-btn focus-outline"
            onClick={togglePlayPause}
            tabIndex="0"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>

          <button
            className="control-btn focus-outline"
            onClick={playNext}
            tabIndex="0"
            aria-label="Next track"
          >
            <FiSkipForward />
          </button>
        </div>

        <div className="progress-container">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="progress-bar"
            aria-label="Playback progress"
            tabIndex="0"
          />
          <div className="time-info">
            <span>{formatTime(currentTime)}</span>
            <span>{currentTrack.duration}</span>
          </div>
        </div>

        <div className="volume-container">
          <FiVolume2 className="volume-icon" aria-hidden="true" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-bar"
            aria-label="Volume control"
            tabIndex="0"
          />
        </div>

        <div className="extra-controls">
          <button
            className="extra-btn focus-outline"
            tabIndex="0"
            aria-label="Like this track"
          >
            <FiHeart />
          </button>
          <button
            className="extra-btn focus-outline"
            tabIndex="0"
            aria-label="Share this track"
          >
            <FiShare2 />
          </button>
        </div>

        {/* Hidden audio element */}
        <audio 
          ref={audioRef} 
          src={currentTrack.sampleUrl}
          onEnded={playNext}
        />
      </div>
    </>
  );
};

export default MusicPlayer;