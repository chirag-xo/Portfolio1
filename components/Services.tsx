'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // text split animation
    const textToSplit = document.querySelector('.p3-heading') as HTMLElement;
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

    gsap.utils.toArray('.sr').forEach((el: any) => {
      if (el.classList.contains('serif-h')) return; // handled by split
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
    <section id="p3" ref={container}>
      <div className="p3-top">
        <div>
          <span className="tag sr">Services</span>
          <h2 className="serif-h sr" style={{ fontSize: 'clamp(40px,4vw,60px)', color: 'var(--white)' }}>
            What We<br/><em style={{ color: 'var(--gold2)' }}>Do Best</em>
          </h2>
        </div>
        <p className="p3-desc sr">Five core offerings built to solve real growth challenges. Every engagement is customised, no templates, no off-the-shelf strategies.</p>
      </div>

      <div className="svc-grid">
        <div className="svc-card sr">
          <div className="svc-num">01</div>
          <h3 className="svc-title">Website Development</h3>
          <p className="svc-body">Custom websites designed to convert, built with brand identity, UX flow, and SEO architecture as the foundation, not as afterthoughts.</p>
          <div className="svc-value">→ Your digital flagship, elevated</div>
        </div>
        <div className="svc-card sr">
          <div className="svc-num">02</div>
          <h3 className="svc-title">Content Creation</h3>
          <p className="svc-body">Photo, video, reels, and written content crafted with intent. Strategic storytelling that builds equity at every scroll and drives meaningful engagement.</p>
          <div className="svc-value">→ Content that earns attention</div>
        </div>
        <div className="svc-card sr">
          <div className="svc-num">03</div>
          <h3 className="svc-title">Social Media Management</h3>
          <p className="svc-body">End-to-end social channel management, strategy, scheduling, community building, and analytics. We grow your audience while you run your business.</p>
          <div className="svc-value">→ Presence that compounds daily</div>
        </div>
        <div className="svc-card sr">
          <div className="svc-num">04</div>
          <h3 className="svc-title">Creative Shoots & Production</h3>
          <p className="svc-body">Brand shoots, product photography, lifestyle campaigns, and video production, directed, styled, and delivered for maximum visual impact.</p>
          <div className="svc-value">→ Visuals worth stopping for</div>
        </div>
        <div className="svc-card sr">
          <div className="svc-num">05</div>
          <h3 className="svc-title">Branding & Strategy</h3>
          <p className="svc-body">Logo systems, brand voice, messaging architecture, and market positioning. We build the strategic foundation that everything else stands on.</p>
          <div className="svc-value">→ Identity that commands respect</div>
        </div>
      </div>
    </section>
  );
}
