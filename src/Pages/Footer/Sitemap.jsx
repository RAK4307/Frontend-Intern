import React, { useEffect } from 'react';
import './Sitemap.css';

const Sitemap = ({ onClose }) => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.084121558223!2d77.5065606!3d13.0577356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae232dc7056b19%3A0x883979629b786317!2sJS%20INFOTECH%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin";
  const googleMapsUrl = "https://www.google.com/maps/place/JS+INFOTECH+PRIVATE+LIMITED/@13.0577805,77.5065606,17z/data=!4m6!3m5!1s0x3bae232dc7056b19:0x883979629b786317!8m2!3d13.0577356!4d77.5065566!16s%2Fg%2F11c5xsyfsc?entry=ttu";

  // Handle Escape key press to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="sitemap-overlay" onClick={onClose}>
      <div className="sitemap-modal" onClick={(e) => e.stopPropagation()}>
        <button className="sitemap-close-btn" onClick={onClose} aria-label="Close sitemap">
          &times;
        </button>
        <h2 className="sitemap-title">Our Location</h2>
        <div className="sitemap-map-container">
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sitemap-map-link"
            aria-label="Open location in Google Maps"
          >
            <div className="sitemap-map-overlay-text">Click to open in Google Maps</div>
          </a>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JS Infotech Location"
          ></iframe>
        </div>
        <div className="sitemap-address">
          <p>JS Infotech Pvt. Ltd.</p>
          <p>#4, 1st Main Road, MEI Layout, Bangalore, Karnataka-State, India- 560073</p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;