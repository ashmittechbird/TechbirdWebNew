import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Hero.css';

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

function GlowFallback() {
  return (
    <div className="mobile-fallback">
      <div className="glow-orb" />
    </div>
  );
}

export default function Hero() {
  // null = not determined yet (avoids flash on mobile)
  const [showSpline, setShowSpline] = useState(null);
  const canvasRef = useRef(null);
  const heroRef  = useRef(null);

  // Determine once on mount whether to show Spline
  useEffect(() => {
    const desktop = window.innerWidth >= 768 && isWebGLAvailable();
    setShowSpline(desktop);
  }, []);

  // Load Spline runtime directly onto our sized canvas
  useEffect(() => {
    if (!showSpline) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let app;
    let cancelled = false;

    import('@splinetool/runtime')
      .then(({ Application }) => {
        if (cancelled) return;
        app = new Application(canvas, { renderOnDemand: true });
        return app.load(
          'https://prod.spline.design/6rHJRgcMIpI0iZ6g/scene.splinecode'
        );
      })
      .catch(() => {
        // Silently fall through — canvas stays hidden, GlowFallback shows
        if (!cancelled) setShowSpline(false);
      });

    return () => {
      cancelled = true;
      app?.dispose();
    };
  }, [showSpline]);

  // Text / button entrance animations
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.25 });

    tl.from('.main-title', {
      y: 60, opacity: 0, duration: 1.1, ease: 'power4.out',
    });

    tl.from('.tags-row span', {
      y: 14, opacity: 0, duration: 0.45, stagger: 0.07, ease: 'power2.out',
    }, '-=0.5');

    tl.from('.sub-paragraph', {
      y: 24, opacity: 0, duration: 0.7, ease: 'power2.out',
    }, '-=0.3');

    tl.from('.action-buttons > a', {
      y: 14, opacity: 0, scale: 0.95, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)',
    }, '-=0.4');

  }, { scope: heroRef });

  return (
    <section className="hero-section" ref={heroRef}>

      {/* 3D background */}
      <div className="spline-bg">
        {showSpline === false && <GlowFallback />}

        {/* Canvas is always in DOM when showSpline isn't false —
            stays hidden until the runtime loads it */}
        {showSpline !== false && (
          <canvas
            ref={canvasRef}
            className="spline-canvas"
          />
        )}
      </div>

      {/* Overlay: left = all text, right = buttons */}
      <div className="hero-overlay container">

        <div className="hero-left">
          <h1 className="main-title">
            Driving Digital<br />Transformation
          </h1>
          <div className="tags-row">
            <span>AI</span><span className="slash">/</span>
            <span>ERP</span><span className="slash">/</span>
            <span>CLOUD</span><span className="slash">/</span>
            <span>WEB</span><span className="slash">/</span>
            <span>GROWTH</span>
          </div>
          <p className="sub-paragraph">
            Premier technology partner for businesses — from agile startups to large-scale enterprises.
            We build scalable, secure, and future-ready technology foundations.
          </p>
        </div>

        <div className="hero-right">
          <div className="action-buttons">
            <a href="#contact" className="btn-hollow">Contact Us</a>
            <a href="#services" className="btn-hollow">
              Explore Services <span className="icon-circle">↓</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
