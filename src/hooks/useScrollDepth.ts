import { useEffect, useRef } from 'react';

const MILESTONES = [25, 50, 75, 100];

export function useScrollDepth() {
  const fired = useRef(new Set<number>());

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = Math.round((scrolled / total) * 100);

      for (const milestone of MILESTONES) {
        if (pct >= milestone && !fired.current.has(milestone)) {
          fired.current.add(milestone);
          window.umami?.track('scroll-depth', { percent: milestone });
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
