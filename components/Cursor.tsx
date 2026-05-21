'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursor2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = cursorRef.current;
    const cur2 = cursor2Ref.current;
    if (!cur || !cur2) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cur, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(cur2, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // Hover effects on links/buttons
    const setupHover = () => {
      const hoverElements = document.querySelectorAll('a, button, .flagship-item');
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          gsap.to(cur2, { scale: 1.5, borderColor: 'var(--gold)' });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(cur2, { scale: 1, borderColor: 'var(--gold)' });
        });
      });
    };

    setupHover();
    // setTimeout to ensure client side rendering elements are also picked up
    setTimeout(setupHover, 1000);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={cursorRef}></div>
      <div id="cur2" ref={cursor2Ref}></div>
    </>
  );
}
