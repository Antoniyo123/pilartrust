import React, { useState, useEffect, useRef } from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  // 6 distinct phases for precise timing control
  // logo → lines → letters → tagline → hold → exit → done
  const [phase, setPhase] = useState('logo');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const contentRef = useRef(null);

  // Track mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!contentRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize mouse position to -1 to 1 range
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timers = [
      // logo is immediate — CSS keyframe handles the 0.7s blur-in
      [600,  () => setPhase('lines')],      // sweep lines slide in
      [700, () => setPhase('letters')],     // P I L A R drop staggered
      [800, () => setPhase('tagline')],     // tagline + progress appear
      [800, () => setPhase('hold')],        // idle: particles float, shimmer loops
      [5000, () => setPhase('exit')],       // white wipe slides down
      [5600, () => {                        // fully gone
        setPhase('done');
        document.body.style.overflow = 'unset';
      }],
    ];

    const ids = timers.map(([ms, fn]) => setTimeout(fn, ms));

    return () => {
      ids.forEach(clearTimeout);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (phase === 'done') return null;

  // ── helper: returns true if current phase is one of the given list ──
  const after = (...phases) => phases.includes(phase);

  const letters = ['P', 'I', 'L', 'A', 'R'];

  // ── 12 floating particle positions (static layout, CSS animates them) ──
  const particles = [
    { top: '12%',  left: '8%',  size: 3, delay: 0 },
    { top: '18%',  left: '85%', size: 2, delay: 0.4 },
    { top: '30%',  left: '5%',  size: 4, delay: 0.8 },
    { top: '25%',  left: '72%', size: 2, delay: 1.2 },
    { top: '70%',  left: '10%', size: 3, delay: 0.6 },
    { top: '75%',  left: '88%', size: 2, delay: 1.0 },
    { top: '82%',  left: '22%', size: 2, delay: 1.4 },
    { top: '60%',  left: '78%', size: 3, delay: 0.2 },
    { top: '45%',  left: '3%',  size: 2, delay: 0.9 },
    { top: '40%',  left: '92%', size: 3, delay: 0.5 },
    { top: '88%',  left: '55%', size: 2, delay: 1.1 },
    { top: '10%',  left: '45%', size: 2, delay: 0.7 },
  ];

  // Calculate 3D transform based on mouse position
  const get3DTransform = (intensity = 1) => {
    const rotateY = mousePos.x * 15 * intensity;
    const rotateX = -mousePos.y * 15 * intensity;
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Calculate parallax translation for layers
  const getParallaxTransform = (depth = 1) => {
    const translateX = mousePos.x * 20 * depth;
    const translateY = mousePos.y * 20 * depth;
    return `translate(${translateX}px, ${translateY}px)`;
  };

  return (
    <div className={`preloader preloader--${phase}`}>

      {/* ── Cursor follower dot ── */}
      <div 
        className="preloader__cursor-dot"
        style={{
          left: `${(mousePos.x + 1) * 50}%`,
          top: `${(mousePos.y + 1) * 50}%`,
        }}
      />

      {/* ── white wipe overlay ── */}
      <div className="preloader__wipe" />

      {/* ── floating particles (mount once lines phase starts) ── */}
      {after('lines','letters','tagline','hold','exit') && (
        <div className="preloader__particles">
          {particles.map((p, i) => (
            <div
              key={i}
              className="preloader__particle"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                animationDelay: `${p.delay}s`,
                transform: getParallaxTransform(0.3 + (i % 3) * 0.15),
              }}
            />
          ))}
        </div>
      )}

      {/* ── horizontal sweep lines ── */}
      <div 
        className={`preloader__lines ${after('lines','letters','tagline','hold','exit') ? 'preloader__lines--visible' : ''}`}
        style={{ transform: getParallaxTransform(0.2) }}
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} className="preloader__line" style={{ animationDelay: `${i * 0.07}s` }} />
        ))}
      </div>

      {/* ── main content ── */}
      <div 
        className="preloader__content"
        ref={contentRef}
        style={{ 
          transform: get3DTransform(0.6),
          transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >

        {/* Logo + shimmer + glow */}
        <div className="preloader__logo-wrap">
          <div 
            className="preloader__glow"
            style={{ 
              transform: `scale(${1 + Math.abs(mousePos.x) * 0.1})`,
              transition: 'transform 0.4s ease-out'
            }}
          />
          <img
            src={require('../img/logo3.png')}
            alt="PIS Logo"
            className="preloader__logo"
          />
          {/* shimmer sweep — loops continuously during hold phase */}
          <div className={`preloader__shimmer ${after('hold','exit') ? 'preloader__shimmer--active' : ''}`} />
        </div>

        {/* Staggered letters + blinking cursor */}
        <div className={`preloader__text ${after('letters','tagline','hold','exit') ? 'preloader__text--visible' : ''}`}>
          {letters.map((letter, i) => (
            <span
              key={i}
              className="preloader__letter"
              style={{ 
                animationDelay: `${i * 0.15}s`,
                transform: `translateZ(${Math.abs(mousePos.x) * 10}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              {letter}
            </span>
          ))}
          <span className={`preloader__cursor ${after('tagline','hold','exit') ? 'preloader__cursor--hide' : ''}`}>|</span>
        </div>

        {/* Tagline with side-lines */}
        <div className={`preloader__tagline ${after('tagline','hold','exit') ? 'preloader__tagline--visible' : ''}`}>
          <span className="preloader__tagline-line" />
          <span className="preloader__tagline-text">ISO Certification Excellence</span>
          <span className="preloader__tagline-line" />
        </div>

        {/* Progress bar */}
        <div className={`preloader__progress ${after('tagline','hold','exit') ? 'preloader__progress--visible' : ''}`}>
          <div className={`preloader__progress-bar ${after('hold','exit') ? 'preloader__progress-bar--full' : ''}`} />
        </div>

      </div>

      {/* ── 3D floating rings around logo ── */}
      {after('letters','tagline','hold','exit') && (
        <div className="preloader__rings">
          <div 
            className="preloader__ring preloader__ring--1"
            style={{ 
              transform: `${get3DTransform(0.8)} rotateZ(${mousePos.x * 30}deg)`,
              transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          />
          <div 
            className="preloader__ring preloader__ring--2"
            style={{ 
              transform: `${get3DTransform(1.2)} rotateZ(${-mousePos.y * 30}deg)`,
              transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Preloader;