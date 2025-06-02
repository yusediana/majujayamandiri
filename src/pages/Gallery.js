import React, { useState } from 'react';
import '../App.css';

function Gallery() {
  const [lightbox, setLightbox] = useState({ isOpen: false, type: '', src: '' });

  const openLightbox = (type, src) => {
    setLightbox({ isOpen: true, type, src });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, type: '', src: '' });
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Galeri</h1>
        <h3>Dokumentasi 2023</h3>
      </div>
      <div className="media-grid">
        {[
          { type: 'img', src: "/media/2023/WhatsApp Image 2023-08-28 at 13.43..jpg" },
          { type: 'img', src: "/media/2023/WhatsApp Image 2023-08-28 at 13.43.2.jpg" },
          { type: 'img', src: "/media/2023/WhatsApp Image 2023-08-28 at 13.43.21.jpg" },
          { type: 'img', src: "/media/2023/WhatsApp Image 2023-08-28 at 13.43.22.jpg" },
          { type: 'img', src: "/media/2023/WhatsApp Image 2023-08-28 at 22.56.29.jpeg" },
          { type: 'img', src: "/media/2023/ww.jpg" },
          { type: 'video', src: "/media/2023/WhatsApp Video 2023-08-28 at 10.36.38.mp4" },
          { type: 'video', src: "/media/2023/WhatsApp Video 2023-08-28 at 10.41.43.mp4" },
          { type: 'video', src: "/media/2023/WhatsApp Video 2023-08-28 at 10.41.53.mp4" },
          { type: 'video', src: "/media/2023/WhatsApp Video 2023-08-28 at 23.24.57.mp4" },
          { type: 'video', src: "/media/2023/WhatsApp Video 2023-08-28 at 23.56.53.mp4" },
          { type: 'video', src: "/media/2023/WhatsApp Video 2023-08-29 at 00.01.38.mp4" },
          { type: 'video', src: "/media/2023/WhatsApp Video 2023-08-29 at 00.02.03.mp4" },
          { type: 'video', src: "/media/2023/WhatsApp Video 2023-08-29 at 00.02.20.mp4" }
        ].map((media, index) => (
          media.type === 'img' ? (
            <img key={index} src={media.src} alt="" onClick={() => openLightbox('img', media.src)} />
          ) : (
            <video key={index} onClick={() => openLightbox('video', media.src)} controls>
              <source src={media.src} type="video/mp4" />
            </video>
          )
        ))}
      </div>
      
      <p>Dokumentasi 2024</p>
      <div className='media-grid'>
        {[
         
          { type: 'img', src: "/media/2024/g1.jpg" },
          { type: 'img', src: "/media/2024/g2.jpg" },
          { type: 'img', src: "/media/2024/g2-.jpg" },
          { type: 'img', src: "/media/2024/g4.jpg" },
          { type: 'img', src: "/media/2024/g5.jpg" },
          { type: 'img', src: "/media/2024/g6.jpg" },
          { type: 'img', src: "/media/2024/g7.jpg" },
          { type: 'img', src: "/media/2024/g8.jpg" },
          { type: 'img', src: "/media/2024/g9.jpg" },
          { type: 'img', src: "/media/2024/g10.jpg" },
          { type: 'img', src: "/media/2024/g11.jpg" },
          { type: 'img', src: "/media/2024/g12.jpg" },
          { type: 'img', src: "/media/2024/g13.jpg" },
          { type: 'img', src: "/media/2024/g14.jpg" },
          { type: 'img', src: "/media/2024/g15.jpg" },
          { type: 'img', src: "/media/2024/g16.jpg" },
          { type: 'img', src: "/media/2024/g17.jpg" },
          { type: 'img', src: "/media/2024/g18.jpg" },
          { type: 'img', src: "/media/2024/g19.jpg" },
          { type: 'img', src: "/media/2024/g21.jpg" },
          { type: 'img', src: "/media/2024/g22.jpeg" },
          { type: 'img', src: "/media/2024/ga2.jpeg" },
          { type: 'img', src: "/media/2024/ga3.jpeg" },
          { type: 'img', src: "/media/2024/ga4.jpeg" },
          { type: 'img', src: "/media/2024/ga5.jpeg" },
          { type: 'img', src: "/media/2024/ga6.jpeg" },
          { type: 'img', src: "/media/2024/ga7.jpeg" },
          { type: 'img', src: "/media/2024/ga8.jpeg" },
          { type: 'img', src: "/media/2024/ga9.jpeg" },
          { type: 'img', src: "/media/2024/ga10.jpeg" },
          { type: 'img', src: "/media/2024/ga11.jpeg" },
          { type: 'img', src: "/media/2024/ga12.jpeg" },
          { type: 'img', src: "/media/2024/ga13.jpeg" },
          { type: 'img', src: "/media/2024/ga14.jpeg" },
          { type: 'img', src: "/media/2024/ga15.jpeg" },
          { type: 'img', src: "/media/2024/ga16.jpeg" },
          { type: 'img', src: "/media/2024/ga17.jpeg" },
          { type: 'img', src: "/media/2024/ga18.jpeg" },
          { type: 'img', src: "/media/2024/ga19.jpeg" },
          { type: 'img', src: "/media/2024/ga20.jpeg" },
          { type: 'img', src: "/media/2024/ga21.jpeg" },
          { type: 'img', src: "/media/2024/ga22.jpeg" },
          { type: 'img', src: "/media/2024/ga23.jpeg" },
          { type: 'img', src: "/media/2024/ga24.jpeg" },
          { type: 'img', src: "/media/2024/ga25.jpeg" },
          { type: 'img', src: "/media/2024/ga26.jpeg" },
          { type: 'img', src: "/media/2024/ga27.jpeg" },
          { type: 'img', src: "/media/2024/ga28.jpeg" },
          { type: 'img', src: "/media/2024/ga29.jpeg" },
          { type: 'img', src: "/media/2024/ga30.jpeg" },
          { type: 'img', src: "/media/2024/ga31.jpeg" },
          { type: 'img', src: "/media/2024/ga32.jpeg" },
          { type: 'img', src: "/media/2024/ga33.jpeg" },
          { type: 'img', src: "/media/2024/ga34.jpeg" },
          { type: 'img', src: "/media/2024/ga35.jpeg" },
          { type: 'img', src: "/media/2024/ga36.jpeg" },
          { type: 'img', src: "/media/2024/ga37.jpeg" },
          { type: 'img', src: "/media/2024/ga38.jpeg" },
          { type: 'img', src: "/media/2024/ga39.jpeg" },
          { type: 'img', src: "/media/2024/ga40.jpeg" },
          { type: 'img', src: "/media/2024/ga41.jpeg" },
          { type: 'img', src: "/media/2024/ga42.jpeg" },
          { type: 'img', src: "/media/2024/ga43.jpeg" },
          { type: 'img', src: "/media/2024/ga44.jpeg" },
          { type: 'img', src: "/media/2024/ga45.jpeg" },
          { type: 'img', src: "/media/2024/ga46.jpeg" },
          { type: 'img', src: "/media/2024/ga47.jpeg" },
          { type: 'img', src: "/media/2024/ga48.jpeg" },

          
          // { type: 'video', src: "/media/2024/v1.mp4" },
          // { type: 'video', src: "/media/2024/v2.mp4" },
          // { type: 'video', src: "/media/2024/v3.mp4" },
          // { type: 'video', src: "/media/2024/v4.mp4" },
          // { type: 'video', src: "/media/2024/v5.mp4" },
          // { type: 'video', src: "/media/2024/v6.mp4" },
          // { type: 'video', src: "/media/2024/v8.mp4" },
          // { type: 'video', src: "/media/2024/vi1.mp4" },
          // { type: 'video', src: "/media/2024/vi2.mp4" },
          // { type: 'video', src: "/media/2024/vi3.mp4" },
          // { type: 'video', src: "/media/2024/vi4.mp4" },
          // { type: 'video', src: "/media/2024/vi5.mp4" },
          // { type: 'video', src: "/media/2024/vi6.mp4" },
          // { type: 'video', src: "/media/2024/vi8.mp4" },
          // { type: 'video', src: "/media/2024/vi9.mp4" },
          // { type: 'video', src: "/media/2024/vi10.mp4" },
          // { type: 'video', src: "/media/2024/vi11.mp4" },
          // { type: 'video', src: "/media/2024/vi12.mp4" },
          // { type: 'video', src: "/media/2024/vi13.mp4" },
          // { type: 'video', src: "/media/2024/vi14.mp4" },
          // { type: 'video', src: "/media/2024/vi15.mp4" },
          // { type: 'video', src: "/media/2024/vi16.mp4" },
          // { type: 'video', src: "/media/2024/vi17.mp4" },
          // { type: 'video', src: "/media/2024/vi18.mp4" },
          // { type: 'video', src: "/media/2024/vi19.mp4" },
          // { type: 'video', src: "/media/2024/vi20.mp4" },
          // { type: 'video', src: "/media/2024/vi21.mp4" },
          // { type: 'video', src: "/media/2024/vi22.mp4" },
          // { type: 'video', src: "/media/2024/vi23.mp4" },
          { type: 'video', src: "/media/video7.mp4" }


        ].map((media, index) => (
          media.type === 'img' ? (
            <img key={index} src={media.src} alt="" onClick={() => openLightbox('img', media.src)} />
          ) : (
            <video key={index} onClick={() => openLightbox('video', media.src)} controls>
              <source src={media.src} type="video/mp4" />
            </video>
          )
        ))}
      </div>
    
      {/* Lightbox */}
      {lightbox.isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close">&times;</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {lightbox.type === 'img' ? (
              <img src={lightbox.src} alt="Full View" />
            ) : (
              <video src={lightbox.src} controls autoPlay />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
