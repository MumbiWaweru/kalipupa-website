// src/components/PhotoUpload.js - HIPHOP THEMED PHOTO UPLOAD COMPONENT
import React, { useState, useRef } from 'react';
import { FiUpload, FiX, FiImage, FiCheck, FiMusic, FiMic, FiCamera, FiStar } from 'react-icons/fi';
import { FaSpotify, FaSoundcloud } from 'react-icons/fa';

// Utility functions for photo upload
const validateFiles = (files) => {
  const validFiles = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Check if it's an image
    if (!file.type.startsWith('image/')) {
      alert(`${file.name} is not an image file.`);
      continue;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert(`${file.name} is too large. Maximum size is 5MB.`);
      continue;
    }

    validFiles.push(file);
  }

  return validFiles;
};

const prepareFilesForUpload = (files) => {
  return files.map((file, index) => {
    let title = '';
    let category = '';
    let icon = <FiImage />;

    if (index === 0) {
      title = 'Album Cover';
      category = 'Featured';
      icon = <FiStar />;
    } else if (index === 1) {
      title = 'Performance Photo';
      category = 'Performance';
      icon = <FiCamera />;
    } else if (index === 2) {
      title = 'Studio Session';
      category = 'Creative';
      icon = <FiMusic />;
    } else {
      title = `Photo ${index + 1}`;
      category = 'General';
      icon = <FiImage />;
    }

    return {
      id: Date.now() + index,
      title,
      category,
      description: `Uploaded photo: ${file.name}`,
      icon,
      file: file,
      url: URL.createObjectURL(file) // Create object URL for preview
    };
  });
};

const simulateUpload = async (files, onProgressUpdate, onComplete) => {
  for (let i = 0; i < files.length; i++) {
    const fileId = files[i].name + i;

    // Determine the photo type based on position
    let photoType = '';
    if (i === 0) photoType = 'Album Cover';
    else if (i === 1) photoType = 'Photo 1';
    else if (i === 2) photoType = 'Photo 2';
    else photoType = `Photo ${i}`;

    onProgressUpdate(`Uploading ${photoType}...`);

    // Update progress gradually
    for (let progress = 0; progress <= 100; progress += 10) {
      // Update progress for this specific file
      // This would normally update state in the calling component

      // Wait a bit to simulate network delay
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  onComplete();
};

const PhotoUpload = ({ onUploadComplete }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(''); // Album Cover, Photo 1, Photo 2
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    // Validate file types and sizes
    const validFiles = validateFiles(files);

    // Limit to 3 files total (album cover + 2 photos)
    const totalFiles = selectedFiles.length + validFiles.length;
    if (totalFiles > 3) {
      alert('You can only upload 3 photos total (album cover + 2 additional photos)');
      return;
    }

    setSelectedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (indexToRemove) => {
    setSelectedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setIsUploading(true);
    setUploadStatus('Starting upload...');

    // Prepare files for upload with metadata
    const preparedFiles = prepareFilesForUpload(selectedFiles);

    // Perform the simulated upload
    await simulateUpload(
      preparedFiles,
      (status) => setUploadStatus(status), // onProgressUpdate
      () => { // onComplete
        setIsUploading(false);
        setUploadProgress({});
        setUploadStatus('Upload complete!');
        alert(`Successfully uploaded ${selectedFiles.length} photo(s)! Your gallery is now updated.`);

        // Call the callback to notify parent component
        if (onUploadComplete) {
          onUploadComplete(preparedFiles);
        }

        setSelectedFiles([]); // Clear the selected files after successful upload
      }
    );
  };

  // Get photo type labels
  const getPhotoLabel = (index) => {
    if (index === 0) return 'Album Cover (Required)';
    if (index === 1) return 'Additional Photo 1';
    if (index === 2) return 'Additional Photo 2';
    return `Photo ${index + 1}`;
  };

  return (
    <>
      <style jsx>{`
        .photo-upload-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #0F0F0F 0%, #0A0A0A 100%);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 215, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .photo-upload-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 10% 20%, rgba(106, 90, 205, 0.03) 0%, transparent 20%),
                      radial-gradient(circle at 90% 80%, rgba(65, 105, 225, 0.03) 0%, transparent 20%);
          pointer-events: none;
          z-index: -1;
        }

        .upload-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .upload-header h2 {
          color: #FFFFFF;
          margin-bottom: 0.5rem;
          font-size: 2.5rem;
          position: relative;
          display: inline-block;
        }

        .upload-header h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #FFEC8B, #D4AF37);
          border-radius: 2px;
        }

        .upload-header p {
          color: #CCCCCC;
          font-size: 1.2rem;
          margin-top: 1rem;
        }

        .upload-area {
          border: 3px dashed rgba(106, 90, 205, 0.3);
          border-radius: 20px;
          padding: 4rem 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.4s ease;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .upload-area::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(106, 90, 205, 0.05), rgba(65, 105, 225, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .upload-area:hover::before {
          opacity: 1;
        }

        .upload-area:hover {
          border-color: #6A5ACD;
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(106, 90, 205, 0.15);
        }

        .upload-icon {
          font-size: 4rem;
          color: #6A5ACD;
          margin-bottom: 1.5rem;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .upload-text {
          color: #4A5568;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .upload-hint {
          color: #A0AEC0;
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        .upload-button {
          background: linear-gradient(135deg, #6A5ACD, #4169E1, #00CED1);
          color: #FFFFFF;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 10px 20px rgba(106, 90, 205, 0.3);
        }

        .upload-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(106, 90, 205, 0.4);
        }

        .file-input {
          display: none;
        }

        .selected-files {
          margin-top: 2.5rem;
        }

        .selected-files h3 {
          color: #2D3748;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          position: relative;
          display: inline-block;
        }

        .selected-files h3::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 2px;
          background: linear-gradient(90deg, #6A5ACD, #4169E1);
        }

        .file-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .file-item {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          background: #1E1E1E;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 215, 0, 0.1);
        }

        .file-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.15);
          border-color: rgba(255, 215, 0, 0.2);
        }

        .file-preview {
          width: 100%;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 236, 139, 0.1));
          color: #FFD700;
          font-size: 3rem;
        }

        .file-info {
          padding: 1rem;
          text-align: center;
          background: #1E1E1E;
        }

        .file-name {
          font-size: 0.9rem;
          color: #FFFFFF;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 0.25rem;
        }

        .file-size {
          font-size: 0.8rem;
          color: #AAAAAA;
        }

        .file-label {
          font-size: 0.8rem;
          color: #FFD700;
          font-weight: bold;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .remove-button {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: rgba(30, 30, 30, 0.9);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #E53E3E;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .remove-button:hover {
          background: rgba(229, 62, 62, 0.1);
          transform: scale(1.1);
          color: #E53E3E;
        }

        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #FFEC8B);
          transition: width 0.3s ease;
        }

        .upload-controls {
          margin-top: 2.5rem;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .upload-btn {
          background: linear-gradient(135deg, #FFD700, #FFEC8B, #D4AF37);
          color: #000000;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
        }

        .upload-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.4);
        }

        .upload-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .cancel-btn {
          background: #2A2A2A;
          color: #CCCCCC;
          border: 1px solid rgba(255, 215, 0, 0.2);
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .cancel-btn:hover {
          background: #3A3A3A;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .instructions {
          margin-top: 2.5rem;
          padding: 1.5rem;
          background: rgba(255, 215, 0, 0.05);
          border-radius: 15px;
          border-left: 4px solid #FFD700;
        }

        .instructions h4 {
          color: #FFFFFF;
          margin-bottom: 1rem;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .instructions ul {
          padding-left: 1.5rem;
          color: #CCCCCC;
          font-size: 1rem;
          line-height: 1.8;
        }

        .instructions li {
          margin-bottom: 0.75rem;
          position: relative;
          padding-left: 1.5rem;
        }

        .instructions li::before {
          content: '•';
          color: #FFD700;
          font-weight: bold;
          position: absolute;
          left: 0;
          top: 0;
        }

        .hiphop-icons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .hiphop-icon {
          font-size: 2.5rem;
          color: #FFD700;
          opacity: 0.7;
        }

        .hiphop-icon.spot {
          color: #1DB954;
        }

        .hiphop-icon.sound {
          color: #FF5500;
        }

        .hiphop-icon.mic {
          color: #4169E1;
        }

        .hiphop-icon.cam {
          color: #FF6B35;
        }

        .upload-status {
          text-align: center;
          margin: 1rem 0;
          font-size: 1.1rem;
          color: #FFD700;
          font-weight: 600;
        }

        .file-limit-notice {
          text-align: center;
          margin: 1rem 0;
          font-size: 0.9rem;
          color: #AAAAAA;
        }

        @media (max-width: 768px) {
          .photo-upload-container {
            margin: 1.5rem;
            padding: 2rem 1.5rem;
          }

          .upload-header h2 {
            font-size: 2rem;
          }

          .upload-area {
            padding: 2.5rem 1.5rem;
          }

          .file-list {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }

          .upload-controls {
            flex-direction: column;
            gap: 1rem;
          }

          .upload-btn, .cancel-btn {
            width: 100%;
            justify-content: center;
          }

          .hiphop-icons {
            gap: 1.5rem;
          }

          .hiphop-icon {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="photo-upload-container" id="upload">
        <div className="upload-header">
          <h2>KALIPUPA Gallery Manager</h2>
          <p>Elevate your visual presence with high-quality images that showcase your artistry</p>

          <div className="hiphop-icons">
            <FiMusic className="hiphop-icon" />
            <FiMic className="hiphop-icon mic" />
            <FaSpotify className="hiphop-icon spot" />
            <FaSoundcloud className="hiphop-icon sound" />
            <FiCamera className="hiphop-icon cam" />
          </div>
        </div>

        <div className="upload-area" onClick={triggerFileSelect}>
          <div className="upload-icon">
            <FiUpload />
          </div>
          <div className="upload-text">
            <p>Click to browse or drag & drop your photos here</p>
            <p className="upload-hint">Upload your album cover and 2 additional photos</p>
          </div>
          <button className="upload-button">
            <FiCamera /> Select Photos
          </button>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="file-input"
          accept="image/*"
          multiple
        />

        <div className="file-limit-notice">
          <p>You can upload up to 3 photos: 1 album cover + 2 additional photos</p>
        </div>

        {selectedFiles.length > 0 && (
          <div className="selected-files">
            <h3>Your Selected Photos ({selectedFiles.length}/3)</h3>
            <div className="file-list">
              {selectedFiles.map((file, index) => {
                const fileId = file.name + index;
                return (
                  <div key={index} className="file-item">
                    <button className="remove-button" onClick={() => removeFile(index)}>
                      <FiX />
                    </button>
                    <div className="file-preview">
                      <FiImage />
                    </div>
                    <div className="file-info">
                      <div className="file-label">{getPhotoLabel(index)}</div>
                      <div className="file-name" title={file.name}>{file.name}</div>
                      <div className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                    </div>
                    {uploadProgress[fileId] !== undefined && (
                      <div className="progress-bar" style={{ width: `${uploadProgress[fileId]}%` }}></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {isUploading && (
          <div className="upload-status">
            {uploadStatus}
          </div>
        )}

        <div className="upload-controls">
          <button
            className="upload-btn"
            onClick={handleUpload}
            disabled={selectedFiles.length === 0 || isUploading}
          >
            <FiCheck /> {isUploading ? 'Uploading...' : 'Publish to Gallery'}
          </button>
          <button
            className="cancel-btn"
            onClick={() => {
              setSelectedFiles([]);
              setUploadProgress({});
            }}
            disabled={isUploading}
          >
            Clear All
          </button>
        </div>

        <div className="instructions">
          <h4><FiMusic /> Tips for Professional Gallery Photos:</h4>
          <ul>
            <li>Upload high-resolution photos that capture your unique style and energy</li>
            <li>Include images from live performances, studio sessions, and music videos</li>
            <li>Feature photos with good lighting and clear focus on your face/artistic expression</li>
            <li>Show diversity in your shots - close-ups, full body, stage presence, intimate moments</li>
            <li>Ensure all photos represent your brand and resonate with your audience</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PhotoUpload;