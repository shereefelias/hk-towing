import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'About', href: '#about' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="HK Towing" />
        </a>
        <ul id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="tel:+18646860012" className="nav-cta" data-umami-event="call-click" data-umami-event-location="navbar">
          <Phone size={16} />
          <span>(864) 686-0012</span>
        </a>
        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close Menu' : 'Open Menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
