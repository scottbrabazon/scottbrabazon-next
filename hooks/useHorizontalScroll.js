import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const useHorizontalScroll = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only proceed with the hook logic on the client side
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // We need to make sure elements are loaded and layout is calculated
    const container = document.querySelector('.featured-projects');
    const inner = document.querySelector('.inner-container');

    if (!container || !inner) return;

    // Force a reflow to ensure the layout is calculated
    container.offsetHeight; // Trigger reflow

    // Delay initialization until after the layout has settled
    const initAnimation = () => {
      // Register GSAP plugin
      gsap.registerPlugin(ScrollTrigger);

      // Calculate the total scrollable distance
      const totalScroll = inner.scrollWidth - window.innerWidth;


      // Animate using GSAP and ScrollTrigger
      gsap.to(inner, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'bottom bottom',
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        },
      });
    };

    // Using `requestAnimationFrame` to ensure the layout is ready
    requestAnimationFrame(() => {
      // Init animation with a slight delay
      setTimeout(initAnimation, 1000); // Delay by 100ms to let layout settle
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isClient]);

};

export default useHorizontalScroll;
