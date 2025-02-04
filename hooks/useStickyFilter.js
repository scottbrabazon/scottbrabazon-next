import { useEffect } from 'react';

const useStickyFilter = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const filterContainer = document.querySelector('.filter-container');

    if (!header || !filterContainer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // When header is out of view, activate sticky filter
          filterContainer.classList.add('sticky');

          setTimeout(() => {
            filterContainer.classList.add('active');
          }, 50);
        } else {
          // When header is back in view, remove sticky
          filterContainer.classList.remove('sticky', 'active');
        }
      },
      { threshold: 0 }
    );

    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return null;
};

export default useStickyFilter;
