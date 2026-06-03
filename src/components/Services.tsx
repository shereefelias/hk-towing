import { Truck, Wrench, MapPin, Layers, Bike, Clock } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Clock size={32} />,
    title: '24/7 Emergency Towing',
    desc: 'Stuck at any hour? We respond fast — day or night, weekends and holidays. One call and we\'re on our way.',
  },
  {
    icon: <Wrench size={32} />,
    title: 'Roadside Assistance',
    desc: 'Dead battery or locked out? We handle the everyday breakdowns so you don\'t have to stress.',
  },
  {
    icon: <MapPin size={32} />,
    title: 'Long Distance Towing',
    desc: 'Need your vehicle moved across state lines or across the country? We\'ve got the equipment and experience to get it there safely.',
  },
  {
    icon: <Layers size={32} />,
    title: 'Flatbed Towing',
    desc: 'Low-clearance, all-wheel drive, or luxury vehicles? Our flatbed trucks provide the safest, damage-free transport available.',
  },
  {
    icon: <Bike size={32} />,
    title: 'Motorcycle Towing',
    desc: 'We treat your bike with the same care you do. Specialized equipment and experienced hands — your motorcycle is in good hands.',
  },
  {
    icon: <Truck size={32} />,
    title: 'Light Duty Towing',
    desc: 'From sedans and SUVs to small trucks, we handle all standard passenger vehicles quickly and professionally.',
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="section-header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">
            From emergency towing to long-distance transport — HK Towing has you covered anywhere in the Greenville area.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
