import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds a scroll-triggered reveal animation.
 * When the element scrolls into view, it adds the 'visible' class.
 * @param {number} threshold - IntersectionObserver threshold (0 to 1)
 * @returns {React.RefObject} ref to attach to the element
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
