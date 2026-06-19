import './Team.css';

const members = [
  {
    name: 'Hani',
    role: 'Owner & Operator',
    photo: 'hani.jpg',
    alt: 'Hani, owner of HK Towing',
    bio: 'Hani founded HK Towing with one goal in mind: deliver the kind of service he\'d want if he were the one stranded on the side of the road. With years of hands-on experience in towing and roadside assistance, he built the company from the ground up on a foundation of fast response, professional standards, and genuine care for every customer — no matter the hour.',
  },
  {
    name: 'Coming Soon',
    role: 'Driver',
    photo: null,
    alt: null,
    bio: 'We\'re adding team profiles soon. Every driver on our crew is trained, licensed, and held to the same high standards Hani set from day one.',
  },
  {
    name: 'Coming Soon',
    role: 'Driver',
    photo: null,
    alt: null,
    bio: 'Our team is growing. Stay tuned — more crew profiles on the way.',
  },
];

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="team-inner">
        <div className="section-header">
          <span className="section-label">The People Behind the Truck</span>
          <h2 className="section-title dark-on-dark">Meet the Team</h2>
          <p className="team-intro">
            When you call HK Towing, you're not calling a call center. You're calling real people
            who take pride in their work and show up ready to help.
          </p>
        </div>

        <div className="team-grid">
          {members.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-photo-wrap">
                {m.photo ? (
                  <img
                    src={`${import.meta.env.BASE_URL}images/${m.photo}`}
                    alt={m.alt!}
                    className="team-photo"
                    loading="lazy"
                  />
                ) : (
                  <div className="team-photo-placeholder" aria-hidden="true">
                    <span>?</span>
                  </div>
                )}
              </div>
              <div className="team-info">
                <div className="team-role">{m.role}</div>
                <h3 className="team-name">{m.name}</h3>
                <p className="team-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
