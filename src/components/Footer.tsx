import { Phone, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="HK Towing" className="footer-logo" loading="lazy" decoding="async" />
            <p className="footer-tagline">Fast. Professional. Reliable.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service-areas">Service Areas</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <a href="tel:+18646860012" data-umami-event="call-click" data-umami-event-location="footer"><Phone size={14} /> (864) 686-0012</a>
            <a href="mailto:hani@hk-towing.com" data-umami-event="email-click" data-umami-event-location="footer"><Mail size={14} /> hani@hk-towing.com</a>
            <a href="https://www.instagram.com/hktowingrecovering/" target="_blank" rel="noopener noreferrer" data-umami-event="instagram-click" data-umami-event-location="footer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/></svg> Follow on Instagram
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} HK Towing. All rights reserved. Greenville, SC</p>
          <a href="tel:+18646860012" className="footer-cta" data-umami-event="call-click" data-umami-event-location="footer-bottom">
            <Phone size={14} /> (864) 686-0012
          </a>
        </div>
      </div>
    </footer>
  );
}
