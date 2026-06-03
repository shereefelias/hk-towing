import { Check } from 'lucide-react';
import './WhyChooseUs.css';

const REASONS = [
  { title: '24/7 Emergency Service', desc: 'Day or night, holidays included — we answer every call.' },
  { title: 'Fast Response Times', desc: "We prioritize getting to you quickly so you're never stranded long." },
  { title: 'Licensed & Insured', desc: 'Fully licensed and insured for your peace of mind.' },
  { title: 'Locally Owned & Operated', desc: 'Proudly serving Greenville, SC and surrounding communities.' },
  { title: 'Professional Equipment', desc: 'Modern flatbed and tow trucks to handle any vehicle safely.' },
  { title: 'Fair & Transparent Pricing', desc: 'No hidden fees — you know the cost before we hook up.' },
];

export default function WhyChooseUs() {
  return (
    <section className="why" id="why-choose-us">
      <div className="why-inner">
        <div className="section-header">
          <span className="section-label dark">Why Us</span>
          <h2 className="section-title dark">Why Choose HK Towing?</h2>
          <p className="section-sub dark">
            We built our reputation one tow at a time — here's what sets us apart.
          </p>
        </div>

        <div className="why-grid">
          {REASONS.map(r => (
            <div className="why-card" key={r.title}>
              <div className="why-icon"><Check size={20} strokeWidth={3} /></div>
              <div>
                <div className="why-title">{r.title}</div>
                <div className="why-desc">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
