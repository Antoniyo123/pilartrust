import React, { useState, useEffect } from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  // 6 distinct phases for precise timing control
  // logo → lines → letters → tagline → hold → exit → done
  const [phase, setPhase] = useState('logo');

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timers = [
      // logo is immediate — CSS keyframe handles the 0.7s blur-in
      [600,  () => setPhase('lines')],      // sweep lines slide in
      [700, () => setPhase('letters')],     // P I L A R drop staggered
      [800, () => setPhase('tagline')],     // tagline + progress appear
      [800, () => setPhase('hold')],        // idle: particles float, shimmer loops       // white wipe slides down
      [5000, () => {                         // fully gone
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

  return (
    <div className={`preloader preloader--${phase}`}>

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
              }}
            />
          ))}
        </div>
      )}

      {/* ── horizontal sweep lines ── */}
      <div className={`preloader__lines ${after('lines','letters','tagline','hold','exit') ? 'preloader__lines--visible' : ''}`}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="preloader__line" style={{ animationDelay: `${i * 0.07}s` }} />
        ))}
      </div>

      {/* ── main content ── */}
      <div className="preloader__content">

        {/* Logo + shimmer + glow */}
        <div className="preloader__logo-wrap">
          <div className="preloader__glow" />
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
              style={{ animationDelay: `${i * 0.15}s` }}
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
    </div>
  );
};

export default Preloader;