import { useEffect, useRef } from 'react';

const useDrawLine = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.disconnect(); // Ensure animation happens only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return lineRef;
};

export default useDrawLine;
