import React from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Experience Museums in Augmented Reality</h1>
          <p>Discover, explore, and interact with exhibits like never before</p>
          <div className="hero-buttons">
            <Link to="/book" className="btn-primary">
              Schedule a Visit
            </Link>
            <Link to="/nearby-museums" className="btn-secondary">
              Find Museums
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our AR Museum Experience?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Interactive Exploration</h3>
            <p>Interact with exhibits in 3D and discover hidden details.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Seamless Technology</h3>
            <p>Easy to use AR technology that works on most smartphones.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Worldwide Collections</h3>
            <p>Access museums and exhibits from around the world.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Educational Content</h3>
            <p>
              Learn through immersive storytelling and detailed information.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Find a Museum</h3>
            <p>Browse and search for museums in your area or worldwide.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Schedule Your Visit</h3>
            <p>Book your visit and get your personal AR access code.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Scan & Explore</h3>
            <p>
              Use our app to scan exhibits and immerse yourself in AR
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Museum Experience?</h2>
          <p>
            Join thousands of users who are experiencing museums in a whole new
            way.
          </p>
          <Link to="/book" className="btn-primary">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
