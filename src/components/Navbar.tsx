import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'Services', 'About', 'Contact'];

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="HK Towing" />
        </a>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
        </ul>
        <a href="tel:+18646860012" className="nav-cta">
          <Phone size={16} />
          <span>(864) 686-0012</span>
        </a>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
