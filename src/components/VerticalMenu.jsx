import React from 'react';
import './VerticalMenu.css';

export default function VerticalMenu() {
  return (
    <aside className="vertical-menu">
      <div className="menu-items">
        <a href="mailto:info@techbirdit.in" className="vert-link">EMAIL</a>
        <span className="vert-dot">•</span>
        <a href="tel:+910000000000" className="vert-link">CONTACT NO</a>
        <span className="vert-dot">•</span>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="vert-link">LINKEDIN</a>
        <span className="vert-dot">•</span>
        <a href="#" className="vert-link icon-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </aside>
  );
}
