import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQS = [
  {
    q: 'Do you provide 24-hour towing in Greenville, SC?',
    a: 'Yes — HK Towing operates 24 hours a day, 7 days a week, 365 days a year. Call us any time and we\'ll dispatch immediately.',
  },
  {
    q: 'How much does a tow cost in Greenville, SC?',
    a: 'Pricing depends on vehicle type, distance, and service required. We believe in fair, transparent pricing — call us for a quick quote with no obligation.',
  },
  {
    q: 'How quickly can you arrive?',
    a: 'Response times vary by location and traffic, but we prioritize getting to you as fast as possible. In most cases we arrive within 30–45 minutes.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Greenville, Greer, Simpsonville, Mauldin, Travelers Rest, Taylors, Fountain Inn, Easley, Piedmont, and the surrounding Upstate SC area.',
  },
  {
    q: 'Do you tow motorcycles and heavy vehicles?',
    a: 'We can tow standard passenger vehicles and light trucks. Call us to discuss your specific vehicle and we\'ll let you know if we can help.',
  },
  {
    q: 'What roadside assistance services do you offer?',
    a: 'Beyond towing, we provide jump starts and lockout service. Call us anytime for help.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="section-header">
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Everything you need to know about our towing services.</p>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)} data-umami-event="faq-open" data-umami-event-question={item.q}>
                <span>{item.q}</span>
                <ChevronDown size={20} className="faq-chevron" />
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
