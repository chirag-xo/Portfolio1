'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function WebPortfolio() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const textToSplit = container.current?.querySelector('.web-heading') as HTMLElement;
    if (textToSplit) {
      const splitText = new SplitType(textToSplit, { types: 'lines,words,chars' });
        
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
      if (el.classList.contains('serif-h')) return; 
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

  const websites = [
    { 
      name: "Drawdesign", 
      desc: "Interior design studio interactive portfolio.", 
      link: "https://draw-white.vercel.app/", 
      role: "Frontend & Web Development",
      image: "/draw.png"
    },
    { 
      name: "Studio Monolith", 
      desc: "A minimalist digital workspace and architectural portfolio.", 
      link: "https://sample-showcase.vercel.app/", 
      role: "Design & Frontend Development",
      image: "/monolith.png"
    }
  ];

  return (
    <section id="web-portfolio" ref={container} className="web-portfolio-sec">
      <div className="web-top sr">
        <span className="tag sr" style={{ marginBottom: '20px', display: 'inline-block' }}>Web Development</span>
        <h2 className="serif-h sr web-heading" style={{ fontSize: 'clamp(40px,4vw,60px)', color: 'var(--white)' }}>
          Digital <em style={{ color: 'var(--mist)' }}>Craft</em>
        </h2>
        <p className="sr web-top-desc">
          A curated selection of high-performance digital experiences built from the ground up to drive real business growth and elevate brand equity.
        </p>
      </div>

      <div className="web-grid">
        {websites.map((site, i) => (
          <a key={i} href={site.link} target="_blank" rel="noreferrer" className="web-card sr">
            <div className="web-img-wrapper">
              {site.image ? (
                <img src={site.image} alt={site.name} className="web-img" />
              ) : (
                <div className="web-img-placeholder">
                  <span>Coming Soon</span>
                </div>
              )}
            </div>
            <div className="web-info-box">
              <div className="web-info-left">
                <h3 className="web-card-title">{site.name}</h3>
                <p className="web-card-desc">{site.desc}</p>
              </div>
              <div className="web-arrow">→</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
