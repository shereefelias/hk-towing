import { ShieldCheck, Star, Zap } from 'lucide-react';
import './About.css';

const pillars = [
  { icon: <Zap size={22} />, label: 'Fast', desc: 'Quick response times when you need help most.' },
  { icon: <ShieldCheck size={22} />, label: 'Professional', desc: 'Trained, licensed, and fully insured operators.' },
  { icon: <Star size={22} />, label: 'Reliable', desc: 'We show up — every time, no excuses.' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-text">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title dark">About HK Towing</h2>
          <p className="about-body">
            HK Towing is a locally owned and operated towing company serving Greenville, SC and the surrounding Upstate area. 
            We built this business on one simple promise: when you call us, we show up — fast, professional, and ready to help.
          </p>
          <p className="about-body">
            Whether it's a late-night breakdown, an accident on the highway, or a vehicle that needs to be moved across the state, 
            our team treats every job with the same level of care and urgency. We take pride in our work and in the trust our 
            customers place in us.
          </p>
          <p className="about-body">
            No matter the situation, HK Towing is the name Greenville calls — because when your day goes sideways, 
            you deserve a towing company that has your back.
          </p>

          <div className="about-pillars">
            {pillars.map((p, i) => (
              <div className="pillar" key={i}>
                <div className="pillar-icon">{p.icon}</div>
                <div>
                  <div className="pillar-label">{p.label}</div>
                  <div className="pillar-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual">
          <div className="about-img-wrap">
            <img src={`${import.meta.env.BASE_URL}images/img_8868.jpg`} alt="HK Towing flatbed truck" className="about-truck" loading="lazy" />
            <div className="about-badge">
              <span className="badge-num">24/7</span>
              <span className="badge-label">Always Available</span>
            </div>
          </div>
          <div className="about-img-secondary">
            <img src={`${import.meta.env.BASE_URL}images/img_8870.jpg`} alt="HK Towing truck ready for service" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
