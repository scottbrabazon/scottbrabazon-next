import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import PropTypes from 'prop-types';

const Thumbnail = ({ name, href, img, lightbox, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOpenLightbox = (event, idx, lb) => {
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
    <div className="thumbnail-container fade-in">
      <a href={href} className="grow-rotate" target="_blank" rel="noreferrer">
        <Image
          src={img}
          alt={name}
          width="300"
          height="258"
          loading="lazy"
          onClick={(e) => handleOpenLightbox(e, index, lightbox)}
        />
      </a>
      <a
        onClick={(e) => handleOpenLightbox(e, index, lightbox)}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <p>{name}</p>
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

Thumbnail.propTypes = {
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

export default Thumbnail;
