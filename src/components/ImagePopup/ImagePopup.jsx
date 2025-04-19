import React, { useEffect, useState } from 'react';

export const ImagePopup = ({ src, alt, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  console.log('ImagePopup rendered with src:', src);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleImageLoad = () => {
    console.log('Image loaded successfully');
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.error('Failed to load image:', src);
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999999
  };

  const contentStyle = {
    position: 'relative',
    width: '90vw',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    opacity: imageLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease'
  };

  const closeButtonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    fontSize: '2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    zIndex: 1000000
  };

  const loadingStyle = {
    position: 'absolute',
    color: 'white',
    fontSize: '1rem'
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={contentStyle} onClick={e => e.stopPropagation()}>
        <button 
          style={closeButtonStyle}
          onClick={e => {
            e.stopPropagation();
            onClose();
          }}
        >
          ×
        </button>
        {!imageLoaded && <div style={loadingStyle}>Loading...</div>}
        <img 
          src={src} 
          alt={alt} 
          style={imageStyle} 
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
    </div>
  );
}; 