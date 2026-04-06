import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef();

  useGSAP(() => {
    // Whole card scales up + fades in
    gsap.from('.contact-card', {
      y: 50,
      opacity: 0,
      scale: 0.97,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
      },
    });

    // Inner content staggered reveal
    gsap.from(['.contact-card .section-tag', '.contact-title', '.contact-desc', '.contact-actions', '.contact-meta'], {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-card',
        start: 'top 75%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="contact-card glass-panel">
          <div className="contact-glow contact-glow-left"></div>
          <div className="contact-glow contact-glow-right"></div>

          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="contact-title">
            Ready to <span className="text-gradient">Transform</span><br />
            Your Business?
          </h2>
          <p className="contact-desc">
            Partner with TechBird for end-to-end digital transformation — from expert consultancy to deployment, scaling, and beyond.
          </p>

          <div className="contact-actions">
            <a href="mailto:info@techbirdit.in" className="btn btn-primary contact-cta">
              Start a Conversation
            </a>
            <a
              href="https://techbirdit.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline contact-cta"
            >
              Visit Website
            </a>
          </div>

          <div className="contact-meta">
            <span className="meta-item">
              <span className="meta-icon">✉</span>
              info@techbirdit.in
            </span>
            <span className="meta-divider"></span>
            <span className="meta-item">
              <span className="meta-icon">◎</span>
              Pune, Maharashtra, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
