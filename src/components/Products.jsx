import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Products.css';

const products = [
  {
    title: 'Custom ERP Systems',
    desc: 'Tailored enterprise cores built for niche industries and specific operational needs.',
  },
  {
    title: 'HRMS',
    desc: 'Comprehensive talent management with automated payroll, attendance, and full employee lifecycle.',
  },
  {
    title: 'Travel & Expense Management',
    desc: 'Policy-driven systems to manage corporate bookings, approvals, and reimbursements automatically.',
  },
  {
    title: 'Lead & Sales Automation',
    desc: 'Unified platforms for pipeline management, lead scoring, and conversion optimization.',
  },
  {
    title: 'Visitor Management System',
    desc: 'Secure digital check-in for modern offices — enhancing security and guest experience.',
  },
  {
    title: 'Document Management System',
    desc: 'Centralized, secure repository with version control and advanced search capabilities.',
  },
  {
    title: 'E-commerce Platforms',
    desc: 'Scalable, high-conversion storefronts integrated with inventory and logistics engines.',
  },
  {
    title: 'Practice Management System',
    desc: 'Specialized workflows for CAs and consultants to manage clients, tasks, and billing.',
  },
  {
    title: 'Litigation Management',
    desc: 'Robust platform for legal teams tracking cases, deadlines, and GST/IT law documentation.',
  },
  {
    title: 'Financial Market Products',
    desc: 'Advanced tools and dashboards designed for fintech analytics and market intelligence.',
  },
];

export default function Products() {
  const sectionRef = useRef();

  useGSAP(() => {
    // Header
    gsap.from(['.products-section .section-tag', '.products-section .section-title', '.products-section .section-subtitle'], {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        once: true,
      },
    });

    gsap.from('.product-card', {
      y: 24,
      opacity: 0,
      duration: 0.45,
      stagger: 0.04,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.products-grid',
        start: 'top 88%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="products" className="products-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PROPRIETARY IP</span>
          <h2 className="section-title">
            Our <span className="text-gradient-pink">Products</span>
          </h2>
          <p className="section-subtitle">
            TechBird develops proprietary platforms designed to solve specific enterprise pain points across industries.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <div className="product-card glass-panel" key={i}>
              <span className="product-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="product-title">{p.title}</h3>
              <p className="product-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
