import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useFadeRight = () => {
  const router = useRouter();

  useEffect(() => {
    let observer;
    let mutationObserver;
    let retryTimeout;

    const handleFadeRightAcrossElements = () => {
      const fadeAcrossElements = document.querySelectorAll('.fade-right');

      if (!fadeAcrossElements.length) {
        retryTimeout = setTimeout(handleFadeRightAcrossElements, 500);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains('active')) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      fadeAcrossElements.forEach((element) => {
        if (!element.classList.contains('active')) {
          observer.observe(element);
        }
      });
    };

    // Observe DOM changes to detect new elements being added
    mutationObserver = new MutationObserver(() => {
      handleFadeRightAcrossElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    handleFadeRightAcrossElements();

    router.events.on('routeChangeComplete', handleFadeRightAcrossElements);

    return () => {
      clearTimeout(retryTimeout);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
      router.events.off('routeChangeComplete', handleFadeRightAcrossElements);
    };
  }, [router.pathname]);

  return null;
};

export default useFadeRight;
