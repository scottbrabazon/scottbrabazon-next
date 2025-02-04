import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useFadeLeft = () => {
  const router = useRouter();

  useEffect(() => {
    const handleFadeLeftAcrossElements = () => {
      const fadeAcrossElements = document.querySelectorAll('.fade-left');
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

    handleFadeLeftAcrossElements();

    router.events.on('routeChangeComplete', handleFadeLeftAcrossElements);

    return () => {
      router.events.off('routeChangeComplete', handleFadeLeftAcrossElements);
    };
  }, [router.pathname]);
};

export default useFadeLeft;