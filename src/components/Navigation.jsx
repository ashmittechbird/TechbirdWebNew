import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import logo from '../assets/techbirdlogo.png';
import './Navigation.css';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Approach', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setScrolled(window.scrollY > 20));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Slide navbar down on load
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -32,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.1,
    });
  }, { scope: navRef });

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? 'nav-scrolled' : ''}`} ref={navRef}>
        <div className="container nav-content">
          <a href="#" className="logo" onClick={closeMenu}>
            <img src={logo} alt="TechBird" className="logo-img" />
          </a>
          <nav className="desktop-links">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <a href="mailto:info@techbirdit.in" className="btn btn-primary btn-sm">Get Started</a>
            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="mobile-nav-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="mailto:info@techbirdit.in" className="mobile-cta" onClick={closeMenu}>
            Get Started →
          </a>
        </nav>
      </div>
    </>
  );
}
