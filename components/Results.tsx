'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Results() {
  const container = useRef<HTMLElement>(null);
  const countersDone = useRef(false);
  
  const c1Ref = useRef<HTMLSpanElement>(null);
  const c2Ref = useRef<HTMLSpanElement>(null);
  const c3Ref = useRef<HTMLSpanElement>(null);
  const c4Ref = useRef<HTMLSpanElement>(null);
  const g1Ref = useRef<HTMLDivElement>(null);
  const g2Ref = useRef<HTMLDivElement>(null);
  const g3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // text split animation
    const textToSplit = container.current?.querySelector('.p4-headline') as HTMLElement;
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

    // standard scroll reveal
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

    // animated counters
    const startCounter = (ref: React.RefObject<HTMLElement | null>, endValue: number) => {
      const obj = { val: 0 };
      if (!ref.current) return;
      gsap.to(obj, {
        val: endValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.innerHTML = Math.floor(obj.val).toString();
          }
        }
      });
    };

    startCounter(c1Ref, 53);
    startCounter(c2Ref, 19);
    startCounter(c3Ref, 12);
    startCounter(c4Ref, 50);

    // growth bars fill animation
    const animateBar = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (!ref.current) return;
      gsap.fromTo(ref.current, 
        { scaleX: 0 }, 
        { 
          scaleX: 1, 
          duration: 1.4, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%"
          }
        }
      );
    };

    animateBar(g1Ref);
    animateBar(g2Ref);
    animateBar(g3Ref);

  }, { scope: container });

  return (
    <section id="p4" ref={container}>
      <div className="p4-top">
        <span className="tag sr" style={{ color: 'var(--mist)' }}>Work &amp; Results</span>
        <h2 className="serif-h sr" style={{ fontSize: 'clamp(40px,4vw,58px)', color: 'var(--white)' }}>
          Numbers That<br/><em className="gold">Tell the Story</em>
        </h2>
      </div>

      <div className="metrics">
        <div className="metric sr">
          <div className="m-num"><span ref={c1Ref}>0</span>K<span>+</span></div>
          <div className="m-label">Followers Built</div>
        </div>
        <div className="metric sr">
          <div className="m-num"><span ref={c2Ref}>0</span><span>%</span></div>
          <div className="m-label">Avg. Audience Growth</div>
        </div>
        <div className="metric sr">
          <div className="m-num"><span ref={c3Ref}>0</span>K<span>+</span></div>
          <div className="m-label">New Follows in 47 Days</div>
        </div>
        <div className="metric sr">
          <div className="m-num"><span ref={c4Ref}>0</span><span>+</span></div>
          <div className="m-label">Brands Elevated</div>
        </div>
      </div>

      <div className="flagship-clients sr" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '24px' }}>
          <span style={{ fontSize: '10px', letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--mist)' }}>/ FLAGSHIP CLIENTS</span>
          <span style={{ fontSize: '10px', letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--mist)' }}>04 brands</span>
        </div>
        
        <div className="flagship-list">
          <a href="https://www.instagram.com/deceramica/" target="_blank" rel="noreferrer" className="flagship-item">
            <div className="fi-left">
              <span className="fi-num">01</span>
              <h3 className="fi-name">De Ceramica</h3>
            </div>
            <div className="fi-right">
              <p className="fi-desc">Premium ceramic tiles &amp; surfaces. Architectural-grade porcelain.</p>
              <div className="fi-arrow">↗</div>
            </div>
          </a>
          
          <a href="https://www.instagram.com/oysterlifestyle_/" target="_blank" rel="noreferrer" className="flagship-item">
            <div className="fi-left">
              <span className="fi-num">02</span>
              <h3 className="fi-name">Oyster Lifestyle</h3>
            </div>
            <div className="fi-right">
              <p className="fi-desc">Contemporary lifestyle &amp; home décor. Curated objects.</p>
              <div className="fi-arrow">↗</div>
            </div>
          </a>
          
          <a href="https://www.instagram.com/bizyheart/" target="_blank" rel="noreferrer" className="flagship-item">
            <div className="fi-left">
              <span className="fi-num">03</span>
              <h3 className="fi-name">Bizyheart</h3>
            </div>
            <div className="fi-right">
              <p className="fi-desc">Handcrafted accessories &amp; gifting brand. Design-led pieces.</p>
              <div className="fi-arrow">↗</div>
            </div>
          </a>
          
          <a href="https://www.instagram.com/draw.design.in/" target="_blank" rel="noreferrer" className="flagship-item">
            <div className="fi-left">
              <span className="fi-num">04</span>
              <h3 className="fi-name">Draw.Design.In</h3>
            </div>
            <div className="fi-right">
              <p className="fi-desc">Interior design &amp; visualization studio. Bespoke spaces.</p>
              <div className="fi-arrow">↗</div>
            </div>
          </a>
        </div>
      </div>

      <div className="growth-panel sr">
        <p className="g-title">Real Growth, Recent Campaign Dashboard</p>
        <div className="g-grid">
          <div className="g-item">
            <div className="g-name">Follower Growth Rate</div>
            <div className="g-track"><div className="g-fill" ref={g1Ref} style={{ width: '84%' }}></div></div>
            <div className="g-pct">+19%</div>
            <div className="g-sub">in last 30 days</div>
          </div>
          <div className="g-item">
            <div className="g-name">Engagement Spike</div>
            <div className="g-track"><div className="g-fill" ref={g2Ref} style={{ width: '100%' }}></div></div>
            <div className="g-pct">3.2X</div>
            <div className="g-sub">vs previous quarter</div>
          </div>
          <div className="g-item">
            <div className="g-name">Community Value</div>
            <div className="g-track"><div className="g-fill" ref={g3Ref} style={{ width: '60%' }}></div></div>
            <div className="g-pct">11K</div>
            <div className="g-sub">highly active accounts</div>
          </div>
        </div>
      </div>
    </section>
  );
}
