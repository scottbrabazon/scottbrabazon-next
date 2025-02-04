import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useImageFadeIn = () => {
  const router = useRouter();

  useEffect(() => {
    const handleImageFadeIn = () => {
      const images = document.querySelectorAll('.image-fade-in');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('active')) {
            setTimeout(() => {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }, 100); // Delay animation slightly (adjust as needed)
          }
        });
      }, {
        threshold: 0.2,
      });

      images.forEach(image => {
        if (!image.classList.contains('active')) {
          observer.observe(image);
        }
      });

      return () => {
        observer.disconnect();
      };
    };

    handleImageFadeIn();

    router.events.on('routeChangeComplete', handleImageFadeIn);

    return () => {
      router.events.off('routeChangeComplete', handleImageFadeIn);
    };
  }, [router.pathname]);
};

export default useImageFadeIn;
