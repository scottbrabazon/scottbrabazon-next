import { useEffect } from 'react';

const useStickyFilter = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    const beacon = document.querySelector('#beacon-1');
    const filterContainer = document.querySelector('.filter-container');

    if (!header || !beacon || !filterContainer) return;

    let headerOut = false;
    let beaconOut = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === header) {
            headerOut = !entry.isIntersecting;
          }
          if (entry.target === beacon) {
            beaconOut = !entry.isIntersecting;
          }
        });

        if (headerOut && beaconOut) {
          filterContainer.classList.add('sticky');
          setTimeout(() => {
            filterContainer.classList.add('active');
          }, 50);
        } else {
          filterContainer.classList.remove('sticky', 'active');
        }
      },
      { threshold: 0 }
    );

    observer.observe(header);
    observer.observe(beacon);

    return () => observer.disconnect();
  }, []);

  return null;
};

export default useStickyFilter;
