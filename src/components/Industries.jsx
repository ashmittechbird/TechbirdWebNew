import React, { useRef, useState, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Industries.css';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: '01',
    name: 'IT & Technology',
    tagline: 'Digital Transformation at Scale',
    desc: 'End-to-end digital transformation and AI integration for technology-forward organisations at any scale.',
    image: '/ai_analytics_web.png',
    stat: { value: '300+', label: 'Projects Delivered' },
    tags: ['AI Integration', 'Cloud Migration', 'Custom Software'],
    accent: '#0ea5e9',
  },
  {
    id: '02',
    name: 'Manufacturing',
    tagline: 'Industry 4.0 Readiness',
    desc: 'Smart factory solutions integrating ERP, IoT, and process automation for full Industry 4.0 readiness.',
    image: '/erp_dashboard_ui.png',
    stat: { value: '40%', label: 'Efficiency Gained' },
    tags: ['ERP Systems', 'IoT Automation', 'Supply Chain'],
    accent: '#38bdf8',
  },
  {
    id: '03',
    name: 'Retail & E-commerce',
    tagline: 'Omnichannel Commerce',
    desc: 'Omnichannel platforms and AI-driven personalisation that convert browsers into loyal buyers.',
    image: '/feature_1.png',
    stat: { value: '2.4×', label: 'Revenue Growth' },
    tags: ['E-commerce Platforms', 'AI Personalisation', 'POS Integration'],
    accent: '#ec4899',
  },
  {
    id: '04',
    name: 'Legal & Financial',
    tagline: 'Compliance-Ready Technology',
    desc: 'Compliance-ready technology with AI-powered analytics purpose-built for regulated industries.',
    image: '/cloud_devops_icons.png',
    stat: { value: '99.9%', label: 'Compliance Rate' },
    tags: ['Legal Tech', 'Compliance AI', 'Document Management'],
    accent: '#818cf8',
  },
  {
    id: '05',
    name: 'Finance & Professional',
    tagline: 'Secure Financial Infrastructure',
    desc: 'Secure, scalable infrastructure meeting the exacting demands of modern financial operations.',
    image: '/feature_2.png',
    stat: { value: '₹500Cr+', label: 'Transactions Managed' },
    tags: ['Fintech Platforms', 'HRMS', 'Advanced Analytics'],
    accent: '#34d399',
  },
  {
    id: '06',
    name: 'BPO & Call Centers',
    tagline: 'Intelligent Operations',
    desc: 'Intelligent automation and CRM integration to streamline high-volume, customer-facing operations.',
    image: '/ai_analytics_web.png',
    stat: { value: '60%', label: 'Cost Reduction' },
    tags: ['CRM Systems', 'Workforce Mgmt', 'Quality Monitoring'],
    accent: '#fb923c',
  },
];

const values = [
  { label: 'Innovation', sub: 'Agentic AI & RAG at core' },
  { label: 'Agility', sub: 'Fast, flexible delivery' },
  { label: 'Integrity', sub: 'Absolute transparency' },
  { label: 'End-to-End', sub: 'Consult → Scale' },
  { label: 'Cost Excellence', sub: 'Global-grade pricing' },
];

export default function Industries() {
  const sectionRef = useRef();
  const contentRef = useRef();
  const [activeIdx, setActiveIdx] = useState(0);
  const [busy, setBusy] = useState(false);

  /* ── Entry animations ── */
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
    });
    tl.from('.isc-eyebrow', { y: 18, opacity: 0, duration: 0.55, ease: 'power3.out' })
      .from('.isc-title',   { y: 24, opacity: 0, duration: 0.60, ease: 'power3.out' }, '-=0.35')
      .from('.isc-sub',     { y: 16, opacity: 0, duration: 0.50, ease: 'power3.out' }, '-=0.30')
      .from('.isc-tab',     { x: -28, opacity: 0, duration: 0.50, stagger: 0.07, ease: 'power3.out' }, '-=0.25')
      .from('.isc-showcase',{ x: 32,  opacity: 0, duration: 0.65, ease: 'power3.out' }, '-=0.55');

    gsap.from('.isc-value', {
      y: 20, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: '.isc-values', start: 'top 85%' },
    });
  }, { scope: sectionRef });

  /* ── Tab switch with crossfade ── */
  const switchTab = useCallback((idx) => {
    if (idx === activeIdx || busy) return;
    setBusy(true);
    gsap.to(contentRef.current, {
      opacity: 0, y: 14, duration: 0.22, ease: 'power2.in',
      onComplete: () => {
        setActiveIdx(idx);
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: -14 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out',
            onComplete: () => setBusy(false) }
        );
      },
    });
  }, [activeIdx, busy]);

  const ind = industries[activeIdx];

  return (
    <section id="industries" className="isc-section" ref={sectionRef}>
      <div className="isc-island">
        {/* Dot-grid texture overlay */}
        <div className="isc-dot-grid" aria-hidden="true" />
        {/* Ambient glow */}
        <div className="isc-glow" aria-hidden="true" />

        <div className="container">

          {/* ── Section header ── */}
          <div className="isc-header">
            <span className="section-tag isc-eyebrow">WHO WE SERVE</span>
            <div className="isc-header-right">
              <h2 className="section-title isc-title">
                Industry <span className="isc-gradient-text">Solutions</span>
              </h2>
              <p className="isc-sub">
                Domain-specific platforms built for each sector's
                unique operational demands.
              </p>
            </div>
          </div>

          {/* ── Main split layout ── */}
          <div className="isc-main">

            {/* Left — vertical tab list */}
            <nav className="isc-tabs" aria-label="Industry selector">
              {industries.map((item, i) => (
                <button
                  key={i}
                  className={`isc-tab ${i === activeIdx ? 'isc-tab--active' : ''}`}
                  onClick={() => switchTab(i)}
                  style={{ '--accent': item.accent }}
                  aria-pressed={i === activeIdx}
                >
                  <span className="isc-tab-num">{item.id}</span>
                  <span className="isc-tab-name">{item.name}</span>
                  <span className="isc-tab-arrow" aria-hidden="true">›</span>
                </button>
              ))}
            </nav>

            {/* Right — cinematic showcase */}
            <div className="isc-showcase">
              {/* Photo layer — use <img> for lazy loading & LCP eligibility */}
              <img
                className="isc-photo"
                src={ind.image}
                alt=""
                aria-hidden="true"
                width="800"
                height="480"
                loading={activeIdx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={activeIdx === 0 ? 'high' : 'low'}
              />
              {/* Colour tint overlay */}
              <div
                className="isc-tint"
                style={{ '--accent': ind.accent }}
                aria-hidden="true"
              />

              {/* Animated content block */}
              <div className="isc-content" ref={contentRef}>
                {/* Giant decorative number */}
                <span className="isc-big-num" aria-hidden="true">{ind.id}</span>

                <div className="isc-body">
                  <p className="isc-tagline" style={{ color: ind.accent }}>
                    {ind.tagline}
                  </p>
                  <h3 className="isc-name">{ind.name}</h3>
                  <p className="isc-desc">{ind.desc}</p>

                  <div className="isc-tags" aria-label="Service areas">
                    {ind.tags.map((t, i) => (
                      <span key={i} className="isc-tag">{t}</span>
                    ))}
                  </div>

                  <div className="isc-footer">
                    <div className="isc-stat">
                      <span className="isc-stat-val" style={{ color: ind.accent }}>
                        {ind.stat.value}
                      </span>
                      <span className="isc-stat-lbl">{ind.stat.label}</span>
                    </div>
                    <a href="#contact" className="isc-cta" style={{ '--accent': ind.accent }}>
                      Get Started <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Dot page indicator */}
              <div className="isc-dots" role="group" aria-label="Industry navigation">
                {industries.map((_, i) => (
                  <button
                    key={i}
                    className={`isc-dot ${i === activeIdx ? 'isc-dot--active' : ''}`}
                    onClick={() => switchTab(i)}
                    style={{ '--accent': ind.accent }}
                    aria-label={`Switch to ${industries[i].name}`}
                  />
                ))}
              </div>
            </div>

          </div>{/* /isc-main */}

          {/* ── Why TechBird strip ── */}
          <div className="isc-values">
            <p className="isc-values-label">WHY TECHBIRD</p>
            <div className="isc-values-grid">
              {values.map((v, i) => (
                <div className="isc-value" key={i}>
                  <span className="isc-value-name">{v.label}</span>
                  <span className="isc-value-sub">{v.sub}</span>
                </div>
              ))}
            </div>
          </div>

        </div>{/* /container */}
      </div>{/* /isc-island */}
    </section>
  );
}
