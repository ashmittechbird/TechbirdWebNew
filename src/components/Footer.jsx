import React from 'react';
import logo from '../assets/techbirdlogo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src={logo} alt="TechBird" className="footer-logo-img" />
          <p className="footer-tagline">
            Premier technology partner driving digital transformation — from agile startups to large-scale enterprises.
          </p>
          <div className="footer-contact-info">
            <a href="mailto:info@techbirdit.in" className="footer-contact-link">
              info@techbirdit.in
            </a>
            <span className="footer-location">Pune, Maharashtra, India</span>
          </div>
        </div>

        <div className="footer-links">
          <div className="link-col">
            <h4>Services</h4>
            <a href="#services">Enterprise ERP</a>
            <a href="#services">AI & Analytics</a>
            <a href="#services">Web Development</a>
            <a href="#services">Cloud & DevOps</a>
            <a href="#services">Digital Growth</a>
          </div>
          <div className="link-col">
            <h4>Products</h4>
            <a href="#products">Custom ERP</a>
            <a href="#products">HRMS</a>
            <a href="#products">E-commerce</a>
            <a href="#products">DMS</a>
            <a href="#products">Practice Management</a>
          </div>
          <div className="link-col">
            <h4>Company</h4>
            <a href="#industries">Industries</a>
            <a href="#process">Our Approach</a>
            <a href="#contact">Contact Us</a>
            <a href="https://techbirdit.in/" target="_blank" rel="noopener noreferrer">
              Website ↗
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} TechBird IT Services. All rights reserved.</p>
        <p className="footer-hq">Pune, India</p>
      </div>
    </footer>
  );
}
