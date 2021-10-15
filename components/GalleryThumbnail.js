import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Image from 'next/image';


const Thumbnail = ({name, href, img, section, lightbox, openLightbox, closeLightbox, prevLightbox, nextLightbox, index}) => {

   const visibleSection = window.location.pathname.replace('/', '');
   let showProject = null;
   let lightboxImages = null;
   let isOpen = null;
   let photoIndex = 0;


   if (section === visibleSection) {
      showProject = 'show-project';
   }

   if (lightbox) {
      lightboxImages = lightbox.items;
      isOpen = lightbox.isOpen;
      photoIndex = lightbox.photoIndex;
   }

   return (

      <div className={ `thumbnail-container fade-in ${showProject}`}>
         <a href={href} className="grow-rotate" target="_blank" rel="noreferrer">
            <Image src={img} alt={name} width="300" height="258" loading="lazy" onClick={() => openLightbox(event, index, lightbox)} />
         </a>
         <a onClick={() => openLightbox(event, index, lightbox)} href={href} target="_blank" rel="noreferrer">{name}</a>
         <div>
            {isOpen && (
               <Lightbox
                  mainSrc={lightboxImages[photoIndex].url}
                  nextSrc={lightboxImages[(photoIndex + 1) % lightboxImages.length].url}
                  prevSrc={lightboxImages[(photoIndex + lightboxImages.length - 1) % lightboxImages.length].url}
                  onCloseRequest={() => closeLightbox(index)}
                  onMovePrevRequest={() => prevLightbox(index, lightboxImages, photoIndex)}
                  onMoveNextRequest={() => nextLightbox(index, lightboxImages, photoIndex)}
                  enableZoom={false}
                  imagePadding={80}
               />
            )}
         </div>
      </div>

   );
}

Thumbnail.propTypes = {
   name: PropTypes.string,
   href: PropTypes.string,
   img: PropTypes.string,
   section: PropTypes.string,
};

export default Thumbnail;  