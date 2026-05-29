import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const ADDRESS = '1321 White Horse Road, Greenville, SC';
const PHONE = '+18646860012';
const PHONE_DISPLAY = '(864) 686-0012';
const EMAIL = 'hani@hk-towing.com';
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const APPLE_MAPS = `https://maps.apple.com/?q=${encodeURIComponent(ADDRESS)}`;

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-sub">
            Need a tow or have a question? Call us anytime — we're available 24 hours a day, 7 days a week.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info cards */}
          <div className="contact-cards">
            <a href={`tel:${PHONE}`} className="contact-card highlight">
              <div className="cc-icon"><Phone size={24} /></div>
              <div>
                <div className="cc-label">Call Us Anytime</div>
                <div className="cc-value">{PHONE_DISPLAY}</div>
                <div className="cc-hint">Tap to call now</div>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="contact-card">
              <div className="cc-icon"><Mail size={24} /></div>
              <div>
                <div className="cc-label">Email</div>
                <div className="cc-value">{EMAIL}</div>
              </div>
            </a>

            <div className="contact-card">
              <div className="cc-icon"><MapPin size={24} /></div>
              <div>
                <div className="cc-label">Location</div>
                <div className="cc-value">{ADDRESS}</div>
                <div className="map-links">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="map-btn">Google Maps</a>
                  <a href={APPLE_MAPS} target="_blank" rel="noopener noreferrer" className="map-btn">Apple Maps</a>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="cc-icon"><Clock size={24} /></div>
              <div>
                <div className="cc-label">Hours</div>
                <div className="cc-value">24 Hours / 7 Days a Week</div>
                <div className="cc-hint">We never close</div>
              </div>
            </div>

            <a href="https://www.instagram.com/hktowingrecovering/" target="_blank" rel="noopener noreferrer" className="contact-card instagram-card">
              <div className="cc-icon insta"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></div>
              <div className="insta-content">
                <div className="cc-label">Follow Us on Instagram</div>
                <div className="cc-hint">Scan the QR code or tap here</div>
              </div>
              <img src="/images/instagram_qr.png" alt="Instagram QR Code" className="qr-code" loading="lazy" />
            </a>
          </div>

          {/* Map embed */}
          <div className="contact-map">
            <iframe
              title="HK Towing Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.485121287667!2d-82.43431612457788!3d34.82348577587883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88582e0e0a5b281f%3A0x6b49e3974c424683!2s1321%20White%20Horse%20Rd%2C%20Greenville%2C%20SC%2029605!5e0!3m2!1sen!2sus!4v1716987654321!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-fallback">
              <MapPin size={32} />
              <p>1321 White Horse Road<br />Greenville, SC</p>
              <div className="map-links-big">
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">Open in Google Maps</a>
                <a href={APPLE_MAPS} target="_blank" rel="noopener noreferrer" className="btn-secondary-dark">Open in Apple Maps</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
