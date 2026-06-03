import { MapPin } from 'lucide-react';
import './ServiceAreas.css';

const LINKED_AREAS = [
  { name: 'Greenville', slug: 'towing-greenville-sc' },
  { name: 'Greer', slug: 'towing-greer-sc' },
  { name: 'Simpsonville', slug: 'towing-simpsonville-sc' },
  { name: 'Mauldin', slug: 'towing-mauldin-sc' },
  { name: 'Travelers Rest', slug: 'towing-travelers-rest-sc' },
  { name: 'Taylors', slug: 'towing-taylors-sc' },
  { name: 'Fountain Inn', slug: 'towing-fountain-inn-sc' },
  { name: 'Easley', slug: 'towing-easley-sc' },
];

const OTHER_AREAS = ['Piedmont', 'Pelzer', 'Berea', 'Gantt', 'Dunean', 'Judson', 'Parker', 'Ware Place'];

export default function ServiceAreas() {
  return (
    <section className="areas" id="service-areas">
      <div className="areas-inner">
        <div className="section-header">
          <span className="section-label dark">We Come to You</span>
          <h2 className="section-title dark">Service Areas</h2>
          <p className="section-sub dark">
            Serving Greenville, SC and all surrounding Upstate communities — 24/7.
          </p>
        </div>

        <div className="areas-grid">
          {LINKED_AREAS.map(city => (
            <a href={`/${city.slug}/`} className="area-chip area-chip-link" key={city.name}>
              <MapPin size={14} />
              <span>{city.name}, SC</span>
            </a>
          ))}
          {OTHER_AREAS.map(city => (
            <div className="area-chip" key={city}>
              <MapPin size={14} />
              <span>{city}, SC</span>
            </div>
          ))}
        </div>

        <p className="areas-note">
          Don't see your city? Call us — if we can get there, we will.{' '}
          <a href="tel:+18646860012">(864) 686-0012</a>
        </p>
      </div>
    </section>
  );
}
