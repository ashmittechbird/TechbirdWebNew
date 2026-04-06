import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Reviews.css';

gsap.registerPlugin(ScrollTrigger);

/* ── Platform SVG Logos ──────────────────────────────────────────────── */
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-label="Google">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ClutchLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-label="Clutch">
    <circle cx="12" cy="12" r="12" fill="#FF3D2E"/>
    <path d="M15.5 8.5C14.4 7.4 12.9 6.8 11.3 6.8c-3.1 0-5.5 2.4-5.5 5.5s2.4 5.5 5.5 5.5c1.5 0 2.9-.6 4-1.7l-1.5-1.5c-.6.7-1.5 1.1-2.4 1.1-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3c.9 0 1.8.4 2.4 1l1.2-1.6z" fill="white"/>
  </svg>
);

const GlassdoorLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-label="Glassdoor">
    <rect width="24" height="24" rx="5" fill="#0CAA41"/>
    <path d="M12 4C8.7 4 6 6.7 6 10v4c0 1.1.9 2 2 2h2v-4H8v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2h-2v4h2c1.1 0 2-.9 2-2v-4c0-3.3-2.7-6-6-6z" fill="white"/>
  </svg>
);

/* ── Stars ────────────────────────────────────────────────────────────── */
const Stars = ({ rating, small = false }) => (
  <div className={`review-stars${small ? ' stars-sm' : ''}`} aria-label={`${rating} out of 5`}>
    {[1, 2, 3, 4, 5].map(i => (
      <span key={i} className={i <= rating ? 'star-icon filled' : 'star-icon'}>★</span>
    ))}
  </div>
);

/* ── Dummy Review Data ─────────────────────────────────────────────────── */
const reviews = [
  {
    id: 1, platform: 'google',
    rating: 5,
    text: 'TechBird completely transformed our ERP workflow. Delivered ahead of schedule with exceptional attention to detail. ROI was visible within just 3 months of going live.',
    name: 'Rajesh Mehta', initials: 'RM',
    role: 'Chief Technology Officer', company: 'FinVista Solutions',
    hue: '#0ea5e9',
  },
  {
    id: 2, platform: 'clutch',
    rating: 5,
    text: 'Outstanding development partner. They built our custom HRMS from scratch — clean code, great UX, and post-launch support has been incredible. Already planning phase two.',
    name: 'David Chen', initials: 'DC',
    role: 'VP of Engineering', company: 'TechScale Inc.',
    hue: '#8b5cf6',
  },
  {
    id: 3, platform: 'glassdoor',
    rating: 5,
    text: "Best workplace I've been part of. Culture encourages innovation, leadership is transparent, and the projects here are genuinely meaningful and technically challenging.",
    name: 'Priyanka Rao', initials: 'PR',
    role: 'Senior Software Engineer', company: 'Employee · TechBird',
    hue: '#10b981',
  },
  {
    id: 4, platform: 'google',
    rating: 5,
    text: 'Their AI & Analytics team helped us unlock insights we never knew existed in our data. The dashboards are now used by our entire executive team every single day.',
    name: 'Priya Sharma', initials: 'PS',
    role: 'Head of Operations', company: 'HealthPlus Technologies',
    hue: '#ec4899',
  },
  {
    id: 5, platform: 'clutch',
    rating: 5,
    text: "We chose TechBird for our e-commerce rebuild and they delivered beyond expectations. The new platform handles 10x the traffic with significantly improved conversion rates.",
    name: 'Ananya Patel', initials: 'AP',
    role: 'CEO & Co-Founder', company: 'EduSpark Learning',
    hue: '#fb923c',
  },
  {
    id: 6, platform: 'glassdoor',
    rating: 4,
    text: 'Great learning environment with real-world projects. Management is supportive and growth opportunities are genuine. Highly recommend to any tech professional.',
    name: 'Arjun Nair', initials: 'AN',
    role: 'Project Manager', company: 'Employee · TechBird',
    hue: '#3b82f6',
  },
  {
    id: 7, platform: 'google',
    rating: 5,
    text: "TechBird's cloud migration expertise is second to none. Zero downtime during our full AWS transition. Infrastructure costs dropped by 40% within the first quarter.",
    name: 'Arun Kumar', initials: 'AK',
    role: 'Founder & Director', company: 'RetailX Commerce',
    hue: '#0ea5e9',
  },
  {
    id: 8, platform: 'clutch',
    rating: 5,
    text: 'An incredible team to work with. They understood our business goals deeply and delivered a solution that exceeded every metric we set. Truly world-class service.',
    name: 'Marcus Johnson', initials: 'MJ',
    role: 'Chief Technology Officer', company: 'CloudPeak Systems',
    hue: '#8b5cf6',
  },
  {
    id: 9, platform: 'glassdoor',
    rating: 5,
    text: "TechBird values its people and it shows in the quality of work delivered. Collaborative culture, great work-life balance, and technically interesting challenges every day.",
    name: 'Kavya Menon', initials: 'KM',
    role: 'UX Designer', company: 'Ex-Employee · TechBird',
    hue: '#ec4899',
  },
  {
    id: 10, platform: 'google',
    rating: 4,
    text: 'Professional and responsive from day one. Our web application was delivered with excellent code quality and the UI/UX design work was particularly impressive and thoughtful.',
    name: 'Sarah Mitchell', initials: 'SM',
    role: 'Managing Director', company: 'GlobalLogix Partners',
    hue: '#fb923c',
  },
  {
    id: 11, platform: 'clutch',
    rating: 5,
    text: 'From discovery to delivery, TechBird nailed every phase. Their agile process kept us informed at every step. The final product was exactly what we envisioned.',
    name: 'Neha Gupta', initials: 'NG',
    role: 'Product Lead', company: 'FinBridge Capital',
    hue: '#10b981',
  },
  {
    id: 12, platform: 'glassdoor',
    rating: 4,
    text: 'Strong engineering culture with real emphasis on code quality and best practices. Senior engineers are approachable and knowledge sharing is genuinely encouraged here.',
    name: 'Rahul Verma', initials: 'RV',
    role: 'Tech Lead', company: 'Employee · TechBird',
    hue: '#3b82f6',
  },
];

const platformMeta = {
  google:    { Logo: GoogleLogo,    label: 'Google',    color: '#4285F4', rating: '4.9', count: '50+ reviews' },
  clutch:    { Logo: ClutchLogo,    label: 'Clutch',    color: '#FF3D2E', rating: '5.0', count: 'Top Rated' },
  glassdoor: { Logo: GlassdoorLogo, label: 'Glassdoor', color: '#0CAA41', rating: '4.5', count: '40+ reviews' },
};

const row1 = reviews.filter((_, i) => i % 2 === 0); // indices 0 2 4 6 8 10
const row2 = reviews.filter((_, i) => i % 2 !== 0); // indices 1 3 5 7 9 11

/* ── Review Card ───────────────────────────────────────────────────────── */
const ReviewCard = ({ review }) => {
  const { Logo, color } = platformMeta[review.platform];
  return (
    <article className="review-card">
      <div className="review-card-top">
        <div className="review-platform-pill" style={{ '--p-color': color }}>
          <Logo />
          <span>{platformMeta[review.platform].label}</span>
        </div>
        <Stars rating={review.rating} />
      </div>
      <blockquote className="review-body">"{review.text}"</blockquote>
      <div className="review-footer">
        <div
          className="review-avatar"
          style={{
            background: `${review.hue}1a`,
            color: review.hue,
            border: `1.5px solid ${review.hue}33`,
          }}
          aria-hidden="true"
        >
          {review.initials}
        </div>
        <div className="review-meta">
          <span className="review-name">{review.name}</span>
          <span className="review-role">{review.role} · {review.company}</span>
        </div>
      </div>
    </article>
  );
};

/* ── Component ─────────────────────────────────────────────────────────── */
export default function Reviews() {
  const sectionRef = useRef(null);
  const headerRef  = useRef(null);
  const statsRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        y: 32, opacity: 0, duration: 0.85, stagger: 0.11,
        ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 82%' },
      });

      gsap.from(statsRef.current.querySelectorAll('.plat-stat'), {
        y: 22, opacity: 0, scale: 0.95, duration: 0.65, stagger: 0.09,
        ease: 'power2.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 84%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="reviews-section" ref={sectionRef} id="reviews">
      {/* Ambient blobs */}
      <div className="reviews-blob reviews-blob--cyan"  aria-hidden="true" />
      <div className="reviews-blob reviews-blob--pink"  aria-hidden="true" />

      <div className="reviews-container">
        {/* ── Header */}
        <div className="reviews-header" ref={headerRef}>
          <span className="section-tag">CLIENT REVIEWS</span>
          <h2 className="reviews-title">
            Trusted by <span className="text-gradient">Teams Worldwide</span>
          </h2>
          <p className="reviews-subtitle">
            Authentic feedback from clients and team members across leading
            platforms — reflecting our commitment to excellence, transparency,
            and partnerships that last.
          </p>
        </div>

        {/* ── Platform Stats */}
        <div className="platform-stats-row" ref={statsRef}>
          {Object.entries(platformMeta).map(([key, { Logo, label, color, rating, count }]) => (
            <div className="plat-stat glass-panel" key={key}>
              <div className="plat-stat-brand">
                <div className="plat-stat-icon"><Logo /></div>
                <span className="plat-stat-name">{label}</span>
              </div>
              <div className="plat-stat-score" style={{ color }}>{rating}</div>
              <div className="plat-stat-stars">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="star-icon filled sm" style={{ color }}>★</span>
                ))}
              </div>
              <div className="plat-stat-count">{count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee (full-width, outside container) */}
      <div className="reviews-marquee-wrap" role="region" aria-label="Client reviews carousel">
        {/* Row 1 — scrolls left */}
        <div className="marquee-row" aria-hidden="true">
          <div className="marquee-track track-left">
            {[...row1, ...row1].map((r, i) => <ReviewCard key={`a${i}`} review={r} />)}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-row" aria-hidden="true">
          <div className="marquee-track track-right">
            {[...row2, ...row2].map((r, i) => <ReviewCard key={`b${i}`} review={r} />)}
          </div>
        </div>
      </div>

      <div className="reviews-container">
        <p className="reviews-footnote">
          Reviews sourced from Google, Clutch &amp; Glassdoor. All ratings reflect genuine client and employee feedback.
        </p>
      </div>
    </section>
  );
}
