'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Agency() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // text split animation
    const textToSplit = document.querySelector('.p2-heading') as HTMLElement;
    let splitText: any;
    
    if (textToSplit) {
      splitText = new SplitType(textToSplit, { types: 'lines,words,chars' });
        
      gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: textToSplit,
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        rotateX: -90,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
        transformOrigin: '50% 50% -50px'
      });
    }

    // left column elements
    gsap.utils.toArray('.sr-l').forEach((el: any) => {
      if (el.classList.contains('p2-heading')) return; // handled by split
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        opacity: 0,
        x: -36,
        duration: 0.9,
        ease: 'power3.out',
      });
    });

    // right column elements
    gsap.utils.toArray('.sr').forEach((el: any) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        opacity: 0,
        y: 36,
        duration: 0.9,
        ease: 'power3.out',
      });
    });
  }, { scope: container });

  return (
    <section id="p2" ref={container}>
      <div className="p2-left">
        <span className="tag sr-l">The Agency</span>
        <h2 className="p2-heading sr-l">We Build<br/>Brands That<br/><em>Move People</em></h2>
        <p className="p2-mission sr-l">
          We are a boutique marketing and creative agency built for founders, entrepreneurs, and ambitious brands who want more than vanity metrics, they want real growth, real community, and measurable results.
        </p>
        <p className="p2-mission sr-l">
          We blend strategic thinking with visual storytelling, building brands from the inside out. Every touchpoint intentional, every campaign purposeful.
        </p>
        <blockquote className="p2-quote sr-l">
          "Strategy first. Aesthetics always. Results guaranteed."
        </blockquote>
      </div>

      <div className="p2-right">
        <span className="tag sr" style={{ color: 'var(--gold)' }}>What Sets Us Apart</span>

        <div className="diff-item sr">
          <span className="diff-num">01</span>
          <div>
            <div className="diff-title">Strategy Before Aesthetics</div>
            <p className="diff-body">Every creative decision is anchored in market positioning and audience psychology, not trends. We build brands that outlast hype cycles.</p>
          </div>
        </div>

        <div className="diff-item sr">
          <span className="diff-num">02</span>
          <div>
            <div className="diff-title">Full-Stack Creative Execution</div>
            <p className="diff-body">From brand identity to content shoots to digital campaigns, in-house execution means your brand voice stays consistent across every touchpoint.</p>
          </div>
        </div>

        <div className="diff-item sr">
          <span className="diff-num">03</span>
          <div>
            <div className="diff-title">Founder-Led, Always</div>
            <p className="diff-body">You work directly with me, never handed off. Every project receives senior-level thinking and dedicated creative attention from day one.</p>
          </div>
        </div>

        <div className="industries sr">
          <p className="ind-label">Industries We Serve</p>
          <div className="ind-tags">
            <span className="ind-tag">Lifestyle</span>
            <span className="ind-tag">Fashion</span>
            <span className="ind-tag">F&amp;B</span>
            <span className="ind-tag">Hospitality</span>
            <span className="ind-tag">Wellness</span>
            <span className="ind-tag">Real Estate</span>
            <span className="ind-tag">E-Commerce</span>
            <span className="ind-tag">Personal Brand</span>
            <span className="ind-tag">Interior Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}
