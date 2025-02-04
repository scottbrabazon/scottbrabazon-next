import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useFadeRight = () => {
  const router = useRouter();

  useEffect(() => {
    const handleFadeRightAcrossElements = () => {
      const fadeAcrossElements = document.querySelectorAll('.fade-right');
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains('active')) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
      });

      fadeAcrossElements.forEach(element => {
        if (!element.classList.contains('active')) {
          observer.observe(element);
        }
      });

      return () => {
        observer.disconnect();
      };
    };

    handleFadeRightAcrossElements();

    router.events.on('routeChangeComplete', handleFadeRightAcrossElements);

    return () => {
      router.events.off('routeChangeComplete', handleFadeRightAcrossElements);
    };
  }, [router.pathname]);
};

export default useFadeRight;