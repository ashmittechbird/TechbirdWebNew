import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

/* ─── Background SVG Art ─── */

const ErpBg = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Circuit traces */}
    <path d="M0 190 H170 V100 H370 V210 H560" stroke="currentColor" strokeWidth="1.5" opacity="0.45"/>
    <path d="M0 290 H110 V250 H310 V330 H560" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    <path d="M250 0 V100 M250 210 V380" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <path d="M370 0 V210" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    <path d="M110 250 V190 H170" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    {/* Junction nodes */}
    <circle cx="170" cy="190" r="10" fill="currentColor" opacity="0.45"/>
    <circle cx="170" cy="190" r="18" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    <circle cx="370" cy="100" r="7" fill="currentColor" opacity="0.4"/>
    <circle cx="370" cy="210" r="11" fill="currentColor" opacity="0.45"/>
    <circle cx="370" cy="210" r="20" stroke="currentColor" strokeWidth="1" opacity="0.15"/>
    <circle cx="110" cy="290" r="6" fill="currentColor" opacity="0.35"/>
    <circle cx="310" cy="250" r="8" fill="currentColor" opacity="0.4"/>
    <circle cx="250" cy="100" r="5" fill="currentColor" opacity="0.3"/>
    {/* Server rack */}
    <rect x="420" y="80" width="110" height="155" rx="6" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <rect x="428" y="90"  width="94" height="13" rx="2" fill="currentColor" opacity="0.15"/>
    <rect x="428" y="109" width="94" height="13" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="428" y="128" width="94" height="13" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="428" y="147" width="94" height="13" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="428" y="166" width="94" height="13" rx="2" fill="currentColor" opacity="0.1"/>
    <circle cx="513" cy="97" r="3.5" fill="currentColor" opacity="0.6"/>
    <circle cx="501" cy="97" r="3.5" fill="currentColor" opacity="0.25"/>
    {/* Database cylinder */}
    <ellipse cx="80" cy="130" rx="40" ry="13" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <line x1="40" y1="130" x2="40" y2="175" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <line x1="120" y1="130" x2="120" y2="175" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <ellipse cx="80" cy="175" rx="40" ry="13" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <line x1="80" y1="175" x2="110" y2="250" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
    {/* Data packets */}
    <rect x="246" y="184" width="9" height="9" rx="1.5" fill="currentColor" opacity="0.55"/>
    <rect x="358" y="244" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.4"/>
    {/* Dot grid */}
    {Array.from({ length: 40 }, (_, i) => (
      <circle key={i} cx={20 + (i % 8) * 65} cy={25 + Math.floor(i / 8) * 80} r="1.5" fill="currentColor" opacity="0.08"/>
    ))}
  </svg>
);

const AiBg = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Neural hub rings */}
    <circle cx="300" cy="190" r="68" stroke="currentColor" strokeWidth="0.8" opacity="0.12"/>
    <circle cx="300" cy="190" r="44" stroke="currentColor" strokeWidth="1.2" opacity="0.18"/>
    <circle cx="300" cy="190" r="20" fill="currentColor" opacity="0.22"/>
    {/* Axons */}
    <line x1="300" y1="146" x2="195" y2="72" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <line x1="300" y1="146" x2="424" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <line x1="256" y1="170" x2="108" y2="153" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <line x1="256" y1="208" x2="92"  y2="270" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <line x1="300" y1="234" x2="214" y2="328" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <line x1="344" y1="234" x2="438" y2="318" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <line x1="344" y1="170" x2="490" y2="136" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <line x1="344" y1="208" x2="514" y2="254" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    {/* Outer neurons */}
    <circle cx="195" cy="72"  r="14" fill="currentColor" opacity="0.35"/>
    <circle cx="195" cy="72"  r="23" stroke="currentColor" strokeWidth="0.8" opacity="0.12"/>
    <circle cx="424" cy="52"  r="10" fill="currentColor" opacity="0.32"/>
    <circle cx="108" cy="153" r="9"  fill="currentColor" opacity="0.28"/>
    <circle cx="92"  cy="270" r="11" fill="currentColor" opacity="0.3"/>
    <circle cx="214" cy="328" r="8"  fill="currentColor" opacity="0.28"/>
    <circle cx="438" cy="318" r="10" fill="currentColor" opacity="0.3"/>
    <circle cx="490" cy="136" r="13" fill="currentColor" opacity="0.35"/>
    <circle cx="514" cy="254" r="9"  fill="currentColor" opacity="0.28"/>
    {/* Cross-connections */}
    <line x1="195" y1="72"  x2="424" y2="52"  stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    <line x1="424" y1="52"  x2="490" y2="136" stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    <line x1="108" y1="153" x2="92"  y2="270" stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    <line x1="438" y1="318" x2="514" y2="254" stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    {/* Floating packets */}
    <rect x="292" y="182" width="10" height="10" rx="2" fill="currentColor" opacity="0.55"/>
    <circle cx="162" cy="110" r="4" fill="currentColor" opacity="0.4"/>
    <circle cx="458" cy="198" r="4" fill="currentColor" opacity="0.4"/>
    {/* Dash tails */}
    <path d="M0 72 Q100 55 195 72" stroke="currentColor" strokeWidth="1" opacity="0.12" strokeDasharray="4 4"/>
    <path d="M490 136 Q526 168 560 152" stroke="currentColor" strokeWidth="1" opacity="0.12" strokeDasharray="4 4"/>
  </svg>
);

const WebBg = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Browser shell */}
    <rect x="80" y="35" width="420" height="295" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.35"/>
    <rect x="80" y="35" width="420" height="38" rx="8" fill="currentColor" opacity="0.07"/>
    {/* Traffic lights */}
    <circle cx="102" cy="54" r="6" fill="currentColor" opacity="0.38"/>
    <circle cx="120" cy="54" r="6" fill="currentColor" opacity="0.24"/>
    <circle cx="138" cy="54" r="6" fill="currentColor" opacity="0.16"/>
    {/* URL bar */}
    <rect x="162" y="46" width="242" height="16" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.22"/>
    {/* Hero block */}
    <rect x="100" y="90" width="380" height="90" rx="5" fill="currentColor" opacity="0.05"/>
    <rect x="118" y="106" width="145" height="12" rx="3" fill="currentColor" opacity="0.22"/>
    <rect x="118" y="124" width="98"  height="9"  rx="2" fill="currentColor" opacity="0.12"/>
    <rect x="118" y="139" width="120" height="9"  rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="118" y="154" width="72"  height="9"  rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="298" y="96" width="158" height="78" rx="5" fill="currentColor" opacity="0.08"/>
    {/* Card grid */}
    <rect x="100" y="196" width="120" height="72" rx="5" fill="currentColor" opacity="0.07"/>
    <rect x="230" y="196" width="120" height="72" rx="5" fill="currentColor" opacity="0.05"/>
    <rect x="360" y="196" width="100" height="72" rx="5" fill="currentColor" opacity="0.07"/>
    {/* Text lines */}
    <rect x="100" y="282" width="220" height="7" rx="2" fill="currentColor" opacity="0.15"/>
    <rect x="100" y="296" width="175" height="7" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="100" y="310" width="195" height="7" rx="2" fill="currentColor" opacity="0.12"/>
    {/* Cursor */}
    <path d="M468 330 L450 348 L455 348 L451 360 L457 357 L460 367 L465 348 L470 348 Z" fill="currentColor" opacity="0.55"/>
    {/* Side code */}
    <rect x="20" y="112" width="46" height="8" rx="2" fill="currentColor" opacity="0.1"/>
    <rect x="20" y="128" width="36" height="8" rx="2" fill="currentColor" opacity="0.07"/>
    <rect x="20" y="144" width="52" height="8" rx="2" fill="currentColor" opacity="0.09"/>
    <rect x="20" y="160" width="30" height="8" rx="2" fill="currentColor" opacity="0.06"/>
    <rect x="20" y="176" width="44" height="8" rx="2" fill="currentColor" opacity="0.08"/>
  </svg>
);

const CloudBg = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Cloud silhouette */}
    <path d="M128 198 Q106 155 144 132 Q141 98 180 93 Q194 70 234 76 Q258 52 292 64 Q336 48 358 90 Q402 82 414 118 Q448 122 446 156 Q468 178 456 202 Z" stroke="currentColor" strokeWidth="1.5" opacity="0.35"/>
    {/* K8s hex pods */}
    {[[118,268],[192,300],[266,268],[340,300],[414,268],[488,300]].map(([cx,cy],i) => (
      <polygon key={i}
        points={`${cx},${cy-19} ${cx+17},${cy-9.5} ${cx+17},${cy+9.5} ${cx},${cy+19} ${cx-17},${cy+9.5} ${cx-17},${cy-9.5}`}
        stroke="currentColor" strokeWidth="1.5" opacity={0.38 - i * 0.03}
      />
    ))}
    {/* Pod connections */}
    <line x1="118" y1="268" x2="192" y2="300" stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    <line x1="192" y1="300" x2="266" y2="268" stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    <line x1="266" y1="268" x2="340" y2="300" stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    <line x1="340" y1="300" x2="414" y2="268" stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    <line x1="414" y1="268" x2="488" y2="300" stroke="currentColor" strokeWidth="0.8" opacity="0.18"/>
    {/* Drop lines */}
    <path d="M238 202 L238 268" stroke="currentColor" strokeWidth="1" opacity="0.18" strokeDasharray="5 4"/>
    <path d="M332 202 L332 268" stroke="currentColor" strokeWidth="1" opacity="0.18" strokeDasharray="5 4"/>
    {/* Stacked container */}
    <rect x="68" y="128" width="55" height="46" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <rect x="68" y="128" width="55" height="15" fill="currentColor" opacity="0.1"/>
    <rect x="74" y="122" width="55" height="46" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.18"/>
    {/* CI/CD pipeline */}
    <rect x="88"  y="340" width="28" height="28" rx="4" fill="currentColor" opacity="0.15"/>
    <line x1="116" y1="354" x2="152" y2="354" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
    <polygon points="152,349 162,354 152,359" fill="currentColor" opacity="0.38"/>
    <rect x="162" y="340" width="28" height="28" rx="4" fill="currentColor" opacity="0.15"/>
    <line x1="190" y1="354" x2="226" y2="354" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
    <polygon points="226,349 236,354 226,359" fill="currentColor" opacity="0.38"/>
    <rect x="236" y="340" width="28" height="28" rx="4" fill="currentColor" opacity="0.15"/>
  </svg>
);

const GrowthBg = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Chart fill */}
    <polygon
      points="30,312 112,265 202,218 296,166 388,116 472,76 542,50 542,360 30,360"
      fill="currentColor" opacity="0.05"
    />
    {/* Main trend line */}
    <polyline
      points="30,312 112,265 202,218 296,166 388,116 472,76 542,50"
      stroke="currentColor" strokeWidth="2.5" opacity="0.45" strokeLinejoin="round" strokeLinecap="round"
    />
    {/* Data points */}
    {[[30,312],[112,265],[202,218],[296,166],[388,116],[472,76],[542,50]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="5.5" fill="currentColor" opacity="0.45"/>
    ))}
    {/* Grid verticals */}
    {[112,202,296,388,472].map((x,i) => (
      <line key={i} x1={x} y1="40" x2={x} y2="345" stroke="currentColor" strokeWidth="0.5" opacity="0.09"/>
    ))}
    {/* Grid horizontals */}
    {[100,160,220,280].map((y,i) => (
      <line key={i} x1="30" y1={y} x2="542" y2={y} stroke="currentColor" strokeWidth="0.5" opacity="0.09"/>
    ))}
    {/* Bar chart ghost */}
    <rect x="50"  y="272" width="32" height="68"  rx="3" fill="currentColor" opacity="0.1"/>
    <rect x="104" y="236" width="32" height="104" rx="3" fill="currentColor" opacity="0.07"/>
    <rect x="193" y="192" width="32" height="148" rx="3" fill="currentColor" opacity="0.07"/>
    <rect x="287" y="148" width="32" height="192" rx="3" fill="currentColor" opacity="0.07"/>
    <rect x="379" y="110" width="32" height="230" rx="3" fill="currentColor" opacity="0.07"/>
    {/* Upward arrow */}
    <line x1="488" y1="222" x2="488" y2="110" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
    <polygon points="480,120 488,98 496,120" fill="currentColor" opacity="0.5"/>
    {/* Progress ring */}
    <circle cx="488" cy="222" r="32" stroke="currentColor" strokeWidth="1.5" opacity="0.28"/>
    <path d="M488 222 m-26,0 a26,26 0 1,1 26,-26" stroke="currentColor" strokeWidth="3" opacity="0.45" strokeLinecap="round"/>
    {/* Network mini */}
    <circle cx="88" cy="100" r="5" fill="currentColor" opacity="0.28"/>
    <circle cx="146" cy="76"  r="4" fill="currentColor" opacity="0.22"/>
    <circle cx="66"  cy="144" r="4" fill="currentColor" opacity="0.22"/>
    <line x1="88" y1="100" x2="146" y2="76"  stroke="currentColor" strokeWidth="0.8" opacity="0.15"/>
    <line x1="88" y1="100" x2="66"  y2="144" stroke="currentColor" strokeWidth="0.8" opacity="0.15"/>
    <line x1="146" y1="76" x2="66"  y2="144" stroke="currentColor" strokeWidth="0.8" opacity="0.12"/>
  </svg>
);

/* ─── Service Data ─── */

const services = [
  {
    num: '01',
    tag: 'ENTERPRISE',
    title: 'Enterprise Solutions',
    accent: '& ERP',
    desc: 'End-to-end expertise in enterprise resource planning — digitizing and automating core business operations at scale.',
    points: ['ERPNext & Frappe Specialist', 'Practice Management Systems', 'SAP S/4HANA Services'],
    color: '#3b82f6',
    Art: ErpBg,
  },
  {
    num: '02',
    tag: 'INTELLIGENCE',
    title: 'Advanced AI',
    accent: '& Analytics',
    desc: 'Empowering businesses with Agentic AI and data-driven intelligence for fully autonomous decision-making.',
    points: ['Legal & Tax AI (Kulkee)', 'RAG & AI Agents', 'Autonomous Decision Systems'],
    color: '#00c3ff',
    Art: AiBg,
  },
  {
    num: '03',
    tag: 'DIGITAL',
    title: 'Web Development',
    accent: '& UI/UX',
    desc: 'Digital experiences that balance aesthetic sophistication with technical rigor and measurable performance.',
    points: ['Corporate Identities', 'High-Performance Web Apps', 'SEO-Optimized Development'],
    color: '#ec4899',
    Art: WebBg,
  },
  {
    num: '04',
    tag: 'INFRASTRUCTURE',
    title: 'Cloud',
    accent: '& DevOps',
    desc: 'Modern infrastructure ensuring resilience, scalability, and 99.9% uptime for your critical systems.',
    points: ['AWS, GCP & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines'],
    color: '#8b5cf6',
    Art: CloudBg,
  },
  {
    num: '05',
    tag: 'GROWTH',
    title: 'Digital',
    accent: '& Growth Solutions',
    desc: 'Marketing intelligence integrated directly into your technology stack for compounding, measurable growth.',
    points: ['SEO & Performance Marketing', 'Lead Generation Systems', 'Marketing Automation'],
    color: '#10b981',
    Art: GrowthBg,
  },
];

/* ─── Component ─── */

export default function Services() {
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.from([
      '.services-section .section-tag',
      '.services-section .section-title',
      '.services-section .section-subtitle',
    ], {
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

    gsap.from('.service-card', {
      y: 32,
      opacity: 0,
      duration: 0.55,
      stagger: 0.07,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 88%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">WHAT WE DO</span>
          <h2 className="section-title">
            Core <span className="text-gradient">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Turning complex operational challenges into streamlined digital solutions — from initial consultancy to long-term support.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`service-card glass-panel service-card--${i + 1}`}
              style={{ '--card-color': s.color, '--card-glow': s.color + '2a' }}
            >
              {/* Faded background art */}
              <div className="card-bg-art">
                <s.Art />
              </div>
              {/* Gradient fade overlay — left opaque, right reveals art */}
              <div className="card-art-fade" />

              {/* Card content */}
              <div className="card-content">
                <div className="svc-header-row">
                  <span className="svc-num">{s.num}</span>
                  <span className="svc-badge">{s.tag}</span>
                </div>

                <div className="svc-title-block">
                  <h3 className="svc-title">
                    {s.title}
                    <br />
                    <span className="svc-title-accent">{s.accent}</span>
                  </h3>
                </div>

                <p className="svc-desc">{s.desc}</p>

                <ul className="svc-points">
                  {s.points.map((p, j) => (
                    <li key={j}>
                      <span className="svc-bullet" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="card-cta">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.5 9H14.5M10 4.5L14.5 9L10 13.5"
                      stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Explore</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
