'use client';

import { useEffect } from 'react';

// Marks .reveal and .reveal-stagger elements as they scroll into view. The hidden state in globals.css
// only applies once this has set data-motion, so everything still shows with no JS or reduced motion.
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // No inset on the viewport: the last lines of the page could never cross one, and would stay hidden
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.shown = 'true';
        observer.unobserve(entry.target);
      }
    });

    document.querySelectorAll<HTMLElement>('.reveal-stagger').forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        (child as HTMLElement).style.setProperty('--reveal-order', String(index));
      });
    });
    document.documentElement.dataset.motion = 'true';
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
