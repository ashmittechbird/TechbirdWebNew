import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Discovery & Requirement Analysis',
    desc: 'Deep dive into business logic, operational workflows, and pain points to build a solid technical foundation.',
  },
  {
    num: '02',
    title: 'Solution Architecture & Planning',
    desc: 'Designing scalable blueprints, data schemas, and technology stacks aligned with your business goals.',
  },
  {
    num: '03',
    title: 'Agile Development & Testing',
    desc: 'Sprint-based execution with continuous stakeholder visibility and rigorous quality assurance at every stage.',
  },
  {
    num: '04',
    title: 'Deployment & Integration',
    desc: 'Seamlessly connecting new solutions with existing ecosystems for a zero-disruption go-live.',
  },
  {
    num: '05',
    title: 'Continuous Support & Optimization',
    desc: 'Ensuring the software evolves alongside your business — 24/7 monitoring and proactive improvements.',
  },
];

// Flat list with category metadata for marquee
const marqueeItems = [
  { name: 'Python',     cat: 'Backend',    accent: '#0ea5e9' },
  { name: 'Node.js',    cat: 'Backend',    accent: '#0ea5e9' },
  { name: 'Go',         cat: 'Backend',    accent: '#0ea5e9' },
  { name: 'React.js',   cat: 'Frontend',   accent: '#8b5cf6' },
  { name: 'Vue.js',     cat: 'Frontend',   accent: '#8b5cf6' },
  { name: 'Next.js',    cat: 'Frontend',   accent: '#8b5cf6' },
  { name: 'Frappe',     cat: 'Frameworks', accent: '#ec4899' },
  { name: 'ERPNext',    cat: 'Frameworks', accent: '#ec4899' },
  { name: 'PostgreSQL', cat: 'Databases',  accent: '#10b981' },
  { name: 'MySQL',      cat: 'Databases',  accent: '#10b981' },
  { name: 'MongoDB',    cat: 'Databases',  accent: '#10b981' },
  { name: 'Redis',      cat: 'Databases',  accent: '#10b981' },
  { name: 'Docker',     cat: 'DevOps',     accent: '#f59e0b' },
  { name: 'Kubernetes', cat: 'DevOps',     accent: '#f59e0b' },
  { name: 'CI/CD',      cat: 'DevOps',     accent: '#f59e0b' },
  { name: 'AWS',        cat: 'Cloud',      accent: '#3b82f6' },
  { name: 'GCP',        cat: 'Cloud',      accent: '#3b82f6' },
  { name: 'Azure',      cat: 'Cloud',      accent: '#3b82f6' },
];

// Row 2 is reversed for visual variety
const row2Items = [...marqueeItems].reverse();

function MarqueeItem({ item }) {
  return (
    <div className="mq-item" style={{ '--accent': item.accent }}>
      <span className="mq-dot" style={{ background: item.accent }} />
      <span className="mq-name">{item.name}</span>
      <span className="mq-cat">{item.cat}</span>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef();

  useGSAP(() => {
    // ── Section header ────────────────────────────────────────────
    gsap.from(
      [
        '.process-section .section-tag',
        '.process-section .section-title',
        '.process-section .section-subtitle',
      ],
      {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', once: true },
      }
    );

    gsap.from('.step-row', {
      x: -28,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.steps-list', start: 'top 88%', once: true },
    });

    gsap.from('.stack-block', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.stack-block', start: 'top 90%', once: true },
    });
  }, { scope: sectionRef });

  return (
    <section id="process" className="process-section" ref={sectionRef}>
      <div className="container">
        {/* ── Section header ── */}
        <div className="section-header">
          <span className="section-tag">HOW WE WORK</span>
          <h2 className="section-title">
            Our <span className="text-gradient">Approach</span>
          </h2>
          <p className="section-subtitle">
            Enterprise-grade delivery model ensuring project success at every stage — from discovery to long-term support.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="steps-list">
          {steps.map((step, i) => (
            <div className="step-row" key={i}>
              <div className="step-num">{step.num}</div>
              <div className="step-body">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Tech Stack Marquee ── */}
        <div className="stack-block">
          <p className="stack-label">Technology Stack</p>

          {/* Row 1 — left */}
          <div className="mq-wrapper" aria-label="Scrolling technology list">
            <div className="mq-track mq-track-1">
              {/* Duplicate the set so -50% lands on an identical copy */}
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <MarqueeItem key={i} item={item} />
              ))}
            </div>
          </div>

          {/* Row 2 — right */}
          <div className="mq-wrapper" aria-label="Scrolling technology list">
            <div className="mq-track mq-track-2">
              {[...row2Items, ...row2Items].map((item, i) => (
                <MarqueeItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
