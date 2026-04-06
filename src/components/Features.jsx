import React from 'react';
import './Features.css';

export default function Features() {
  const featuresList = [
    {
      title: "Interactive Experiences",
      description: "Build interfaces that respond and live with the user. Fluid 3D interactions powered by modern rendering.",
      img: "/feature_1.png"
    },
    {
      title: "Premium Aesthetics",
      description: "Glassmorphism, deep shadows, and luminous accent colors create an environment of extreme polish.",
      img: "/feature_2.png"
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header center-text">
          <h2 className="title text-gradient">Why choose this architecture?</h2>
          <p className="subtitle">We built the foundation. You bring the magic.</p>
        </div>

        <div className="features-grid">
          {featuresList.map((feat, idx) => (
            <div className="feature-card glass-panel" key={idx}>
              <div className="feature-image-wrapper">
                <img src={feat.img} alt={feat.title} className="feature-img animate-float" style={{ animationDelay: `${idx * 0.5}s` }}/>
              </div>
              <div className="feature-text">
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
