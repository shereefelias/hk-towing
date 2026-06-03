import { Phone } from 'lucide-react';
import './StickyCallBar.css';

export default function StickyCallBar() {
  return (
    <a href="tel:+18646860012" className="sticky-call-bar">
      <Phone size={18} />
      <span>Call Now — (864) 686-0012</span>
    </a>
  );
}
