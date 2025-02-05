import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import PropTypes from 'prop-types';
import useDrawLine from '../hooks/useDrawLine';
import useFadeUp from '../hooks/useFadeUp';
import 'yet-another-react-lightbox/styles.css';


const WorkThumbnail = ({ name, href, img, lightbox, index, description, tag }) => {

  useFadeUp();
  const lineRef = useDrawLine();
  const router = useRouter();
  const isWorkPage = router.pathname === '/work';
  
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOpenLightbox = (event, idx, lb) => {
      gtag('event', 'click', {
        event_category: 'User Interaction',
        event_label: name,
        event_action: 'click_on_project'
      });
    if (lb && lb.items && lb.items.length > 0) {
      event.preventDefault();
      setIsOpen(true);
      setPhotoIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setIsOpen(false);
  };

  const handleMovePrev = () => {
    setPhotoIndex((photoIndex + lightbox.items.length - 1) % lightbox.items.length);
  };

  const handleMoveNext = () => {
    setPhotoIndex((photoIndex + 1) % lightbox.items.length);
  };

  const lightboxImages = lightbox ? lightbox.items : [];

  return (

    <div className={`project ${isWorkPage ? 'fade-up' : ''}`}>
      <a href={href} target="_blank" rel="noreferrer">
        <div className="project-image-container">
          <Image
            src={img}
            alt={name}
            loading="lazy"
            onClick={(e) => handleOpenLightbox(e, index, lightbox)}
            className="project-thumbnail"
            fill={true}
          />
        </div>
      </a>
       <div className="project-headline-container">
          <h3 className="project-title">{name}</h3>
          <p  className="project-tags small-caps">{tag}</p>
       </div>
       <div className="project-description">{description}</div>
       <a
          onClick={(e) => handleOpenLightbox(e, index, lightbox)}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
        <span className="view">
          View project
        </span>
        <div className="line-container">
            <div className="line" ref={lineRef}></div>
        </div>
      </a>
      <div>
        {isOpen && lightboxImages.length > 0 && (
          <Lightbox
            open={isOpen}
            close={handleCloseLightbox}
            slides={lightboxImages.map(item => ({ src: item.url }))}
            currentIndex={photoIndex}
            prev={handleMovePrev}
            next={handleMoveNext}
          />
        )}
      </div>
    </div>
  );
};

WorkThumbnail.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  img: PropTypes.string,
  lightbox: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
    isOpen: PropTypes.bool,
    photoIndex: PropTypes.number,
  }),
  index: PropTypes.number,
};

export default WorkThumbnail;
