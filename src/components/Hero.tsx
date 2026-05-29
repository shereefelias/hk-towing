import { Phone, ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/images/truck.jpg" alt="HK Towing truck" className="hero-truck" fetchPriority="high" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">Greenville, SC</div>
        <h1 className="hero-title">
          HK <span className="hero-title-accent">Towing</span>
        </h1>
        <p className="hero-tagline">Fast. Professional. Reliable.</p>
        <p className="hero-sub">
          Available 24/7 — We get to you fast, handle your vehicle with care,<br />
          and get you back on the road.
        </p>
        <div className="hero-actions">
          <a href="tel:+18646860012" className="btn-primary">
            <Phone size={18} />
            Call Now — (864) 686-0012
          </a>
          <a href="#services" className="btn-secondary">Our Services</a>
        </div>
      </div>

      <a href="#services" className="hero-scroll">
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
