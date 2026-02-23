/**
 * Upload Service for Kenyan Artist Website
 * Handles photo uploads including album cover and additional photos
 */

/**
 * Validates uploaded files
 * @param {FileList} files - List of files to validate
 * @returns {Object} - Validation result with isValid flag and errors array
 */
export const validateFiles = (files) => {
  const errors = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Check if it's an image
    if (!file.type.startsWith('image/')) {
      errors.push(`${file.name} is not an image file.`);
      continue;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      errors.push(`${file.name} is too large. Maximum size is 5MB.`);
      continue;
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Prepares files for upload with metadata
 * @param {Array<File>} files - Array of validated files
 * @returns {Array} - Array of file objects with metadata
 */
export const prepareFilesForUpload = (files) => {
  return files.map((file, index) => {
    let title = '';
    let category = '';
    let icon = 'image'; // Using string identifier for icon

    if (index === 0) {
      title = 'Album Cover';
      category = 'Featured';
      icon = 'star';
    } else if (index === 1) {
      title = 'Performance Photo';
      category = 'Performance';
      icon = 'camera';
    } else if (index === 2) {
      title = 'Studio Session';
      category = 'Creative';
      icon = 'music';
    } else {
      title = `Photo ${index + 1}`;
      category = 'General';
      icon = 'image';
    }

    return {
      id: Date.now() + index,
      title,
      category,
      description: `Uploaded photo: ${file.name}`,
      icon,
      file: file,
      url: URL.createObjectURL(file), // Create object URL for preview
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type
    };
  });
};

/**
 * Simulates upload progress for files
 * @param {Array} files - Array of file objects
 * @param {Function} onProgress - Callback function to report progress
 * @returns {Promise<Array>} - Promise that resolves to uploaded files
 */
export const simulateUpload = (files, onProgress) => {
  return new Promise((resolve) => {
    let completed = 0;

    const processFile = (index) => {
      if (index >= files.length) {
        resolve(files);
        return;
      }

      const file = files[index];
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (onProgress) {
          onProgress({
            fileId: file.id,
            progress,
            fileName: file.fileName,
            fileIndex: index
          });
        }

        if (progress >= 100) {
          clearInterval(interval);
          processFile(index + 1);
        }
      }, 100);
    };

    processFile(0);
  });
};

/**
 * Uploads files to server (placeholder implementation)
 * @param {Array<File>} rawFiles - Raw files to upload
 * @param {Function} onProgress - Progress callback
 * @returns {Promise<Array>} - Promise that resolves to uploaded file metadata
 */
export const uploadFiles = async (rawFiles, onProgress) => {
  // Validate files
  const validationResult = validateFiles(rawFiles);
  
  if (!validationResult.isValid) {
    throw new Error(validationResult.errors.join('\n'));
  }
  
  // Limit to 3 files
  const limitedFiles = rawFiles.slice(0, 3);
  
  if (limitedFiles.length !== rawFiles.length) {
    console.warn(`Only 3 files are allowed. ${rawFiles.length - limitedFiles.length} files were rejected.`);
  }
  
  // Prepare files with metadata
  const preparedFiles = prepareFilesForUpload(limitedFiles);
  
  // Simulate upload process
  await simulateUpload(preparedFiles, onProgress);
  
  return preparedFiles;
};

/**
 * Process uploaded photos for display in gallery
 * @param {Array} uploadResult - Result from upload operation
 * @returns {Array} - Processed photos ready for gallery
 */
export const processUploadedPhotos = (uploadResult) => {
  if (!uploadResult || !Array.isArray(uploadResult)) {
    throw new Error('Invalid upload result');
  }

  return uploadResult.map(photo => ({
    id: photo.id,
    title: photo.title,
    category: photo.category,
    description: photo.description,
    icon: photo.icon,
    url: photo.url
  }));
};

/**
 * Revokes object URLs to free up memory
 * @param {Array} uploadedFiles - Array of uploaded file objects
 */
export const cleanupObjectUrls = (uploadedFiles) => {
  if (uploadedFiles && Array.isArray(uploadedFiles)) {
    uploadedFiles.forEach(file => {
      if (file.url && file.url.startsWith('blob:')) {
        URL.revokeObjectURL(file.url);
      }
    });
  }
};

/**
 * Main upload service function
 * @param {File} albumCover - The album cover image file
 * @param {Array<File>} additionalPhotos - Array of 2 additional photo files
 * @returns {Promise<Object>} - Result of the upload operation
 */
export const uploadPhotos = async (albumCover, additionalPhotos) => {
  // Validate inputs
  if (!albumCover) {
    throw new Error('Album cover is required');
  }

  if (!additionalPhotos || additionalPhotos.length !== 2) {
    throw new Error('You must provide exactly 2 additional photos');
  }

  // Combine all files
  const allFiles = [albumCover, ...additionalPhotos];

  // Validate all files
  const validationResult = validateFiles(allFiles);
  if (!validationResult.isValid) {
    throw new Error(validationResult.errors.join('\n'));
  }

  // Perform upload
  const uploadResult = await uploadFiles(allFiles, (progressData) => {
    console.log(`Uploading ${progressData.fileName}: ${progressData.progress}%`);
  });

  // Process the results for gallery display
  const processedPhotos = processUploadedPhotos(uploadResult);

  return {
    success: true,
    photos: processedPhotos,
    message: 'Photos uploaded successfully'
  };
};