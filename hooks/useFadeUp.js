import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useFadeUp = () => {
  const router = useRouter();

  useEffect(() => {
    const handleFadeUpElements = () => {
      const fadeUpElements = document.querySelectorAll('.fade-up');
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

      fadeUpElements.forEach(element => {
        if (!element.classList.contains('active')) {
          observer.observe(element);
        }
      });

      return () => {
        observer.disconnect();
      };
    };

    handleFadeUpElements();

    router.events.on('routeChangeComplete', handleFadeUpElements);

    return () => {
      router.events.off('routeChangeComplete', handleFadeUpElements);
    };
  }, [router.pathname]);
};

export default useFadeUp;
