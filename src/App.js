import React from 'react';
import photoSrc from './photo.jpeg';

const CV = {
  name: { first: 'Vlad-Ioan', last: 'Codreanu' },
  title: 'Entry Level Web Developer',
  summary: `Hardworking and passionate with strong organizational skills. Ready to help team achieve company goals. Currently following a JavaScript course with fundamentals in CSS and HTML, interested in landing an entry-level web developer role. Also has basic knowledge of Matlab and C++.`,
  contact: {
    phone: '(+40) 735 722 314',
    email: 'codreanu.vladd@gmail.com',
    location: 'Iași, Romania',
    linkedin: 'linkedin.com/in/codreanu-vlad-961126217',
    github: 'github.com/VladC0d',
  },
  education: [
    {
      degree: 'Automatic Control & Computer Science',
      school: 'Gheorghe Asachi Technical University',
      years: '2019 – 2023',
    },
  ],
  skills: [
    { name: 'JavaScript', level: 60 },
    { name: 'HTML', level: 75 },
    { name: 'CSS', level: 70 },
    { name: 'C++', level: 25 },
    { name: 'Matlab', level: 25 },
  ],
  languages: ['Romanian — Native', 'English — C1'],
  experience: [
    {
      title: 'Insurance Agent',
      company: 'Generali',
      years: 'Oct 2024 – Now',
      points: [
        'Educating clients about insurance options and benefits.',
        'Analyzing customer needs to recommend suitable coverage.',
        'Negotiating policy terms and building long-term client relationships.',
      ],
    },
    {
      title: 'Front End Internship (React)',
      company: 'Pentalog',
      years: 'Jun – Sep 2023',
      points: [
        'Participated in team meetings contributing ideas to discussions.',
        'Made contributions including bug fixes and feature implementations.',
        'Maintained up-to-date knowledge of React and front-end trends.',
      ],
    },
    {
      title: 'Volunteer — Afterhills Iași',
      company: 'Event Volunteer',
      years: 'Aug – Sep 2019',
      points: [
        'Helped with organization, planning and administrative support.',
        'Greeted visitors and answered questions about the program.',
      ],
    },
  ],
  certifications: [
    {
      name: 'Salesforce Administrator',
      issuer: 'OSF Digital — OSF Academy',
      date: 'Jun 2026',
      link: 'https://certificate.osf.digital/71177',
    },
  ],
  interests: [
    { icon: '✈️', label: 'Travel' },
    { icon: '🎵', label: 'Music' },
    { icon: '👗', label: 'Fashion' },
  ],
};

const App = () => (
  <div className="page-bg">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      body {
        font-family: 'Inter', sans-serif;
        background: #0D0D0D;
        -webkit-font-smoothing: antialiased;
      }

      .page-bg {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 40px 20px 60px;
      }

      /* ── CV shell ── */
      .cv {
        display: grid;
        grid-template-columns: 260px 1fr;
        max-width: 880px;
        width: 100%;
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 24px 80px rgba(0,0,0,0.7);
      }

      /* ══════════════════════════════
         LEFT SIDEBAR
      ══════════════════════════════ */
      .sidebar {
        background: #141414;
        display: flex;
        flex-direction: column;
      }

      .photo-wrap {
        width: 100%;
        aspect-ratio: 1;
        overflow: hidden;
        flex-shrink: 0;
      }
      .photo-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 20%;
        display: block;
      }

      .role-badge {
        background: #22d3ee;
        color: #000;
        text-align: center;
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        padding: 9px 16px;
      }

      .sidebar-section {
        padding: 20px 22px;
        border-bottom: 1px solid #222;
      }
      .sidebar-section:last-child { border-bottom: none; }

      .sidebar-heading {
        font-size: 11px;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 8px;
      }

      .s-accent {
        width: 26px;
        height: 3px;
        background: #22d3ee;
        border-radius: 2px;
        margin-bottom: 14px;
      }

      /* Education */
      .edu-entry { margin-bottom: 14px; }
      .edu-entry:last-child { margin-bottom: 0; }
      .edu-degree {
        font-size: 11px;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        line-height: 1.4;
        margin-bottom: 3px;
      }
      .edu-school {
        font-size: 10px;
        color: #8E8E93;
        margin-bottom: 2px;
      }
      .edu-years { font-size: 10px; color: #666; }

      /* Skills bars */
      .skill-row {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 9px;
      }
      .skill-row:last-child { margin-bottom: 0; }
      .skill-name {
        font-size: 11px;
        color: #EBEBF5;
        width: 80px;
        flex-shrink: 0;
      }
      .skill-bar {
        flex: 1;
        height: 3px;
        background: #2C2C2E;
        border-radius: 2px;
        overflow: hidden;
      }
      .skill-fill {
        height: 100%;
        background: #22d3ee;
        border-radius: 2px;
      }

      /* Languages */
      .lang-item {
        font-size: 11px;
        color: #EBEBF5;
        margin-bottom: 6px;
        padding-left: 10px;
        position: relative;
      }
      .lang-item::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #FF0066;
      }
      .lang-item:last-child { margin-bottom: 0; }

      /* Contact */
      .contact-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin-bottom: 12px;
      }
      .contact-item:last-child { margin-bottom: 0; }
      .contact-icon-box {
        width: 26px;
        height: 26px;
        background: #22d3ee;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        flex-shrink: 0;
      }
      .contact-info { display: flex; flex-direction: column; }
      .contact-label {
        font-size: 9px;
        font-weight: 600;
        color: #8E8E93;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 1px;
      }
      .contact-value {
        font-size: 10px;
        color: #EBEBF5;
        word-break: break-all;
        line-height: 1.4;
        text-decoration: none;
      }
      a.contact-value:hover { color: #22d3ee; }

      /* ══════════════════════════════
         RIGHT CONTENT
      ══════════════════════════════ */
      .content {
        background: #fff;
        padding: 32px 34px 36px;
        display: flex;
        flex-direction: column;
        gap: 22px;
      }

      .content-header { }
      .content-name {
        font-size: 30px;
        font-weight: 300;
        color: #111;
        line-height: 1.1;
        margin-bottom: 8px;
      }
      .content-name strong { font-weight: 800; }
      .content-badge {
        display: inline-block;
        background: #22d3ee;
        color: #000;
        font-size: 9px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        padding: 4px 10px;
      }

      /* Sections */
      .c-section { }
      .c-heading {
        font-size: 12px;
        font-weight: 700;
        color: #111;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 6px;
      }
      .c-accent {
        width: 26px;
        height: 3px;
        background: #22d3ee;
        border-radius: 2px;
        margin-bottom: 12px;
      }

      /* Profile */
      .profile-text {
        font-size: 12px;
        color: #555;
        line-height: 1.75;
      }

      /* Experience */
      .exp-entry { margin-bottom: 14px; }
      .exp-entry:last-child { margin-bottom: 0; }
      .exp-title {
        font-size: 13px;
        font-weight: 700;
        color: #111;
        margin-bottom: 4px;
      }
      .exp-meta {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
      }
      .exp-date {
        background: #FF0066;
        color: #fff;
        font-size: 9px;
        font-weight: 700;
        padding: 2px 7px;
        border-radius: 3px;
        letter-spacing: 0.04em;
      }
      .exp-company {
        font-size: 11px;
        color: #888;
      }
      .exp-points {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .exp-points li {
        font-size: 11px;
        color: #555;
        padding-left: 12px;
        position: relative;
        line-height: 1.55;
      }
      .exp-points li::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #FF0066;
      }

      /* Certifications */
      .cert-entry {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
      }
      .cert-name {
        font-size: 13px;
        font-weight: 700;
        color: #111;
        margin-bottom: 2px;
      }
      .cert-issuer {
        font-size: 11px;
        color: #888;
        margin-bottom: 4px;
      }
      .cert-link {
        font-size: 10px;
        color: #22d3ee;
        text-decoration: none;
        font-weight: 600;
      }
      .cert-link:hover { text-decoration: underline; }
      .cert-date {
        background: #FF0066;
        color: #fff;
        font-size: 9px;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 3px;
        white-space: nowrap;
        flex-shrink: 0;
      }

      /* Interests */
      .interests-row {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
      }
      .interest-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }
      .interest-icon {
        font-size: 26px;
        line-height: 1;
      }
      .interest-label {
        font-size: 10px;
        color: #666;
        font-weight: 500;
      }

      /* ── Responsive ── */
      @media (max-width: 640px) {
        .cv { grid-template-columns: 1fr; }
        .photo-wrap { aspect-ratio: 4/3; }
        .page-bg { padding: 16px 12px 40px; }
        .content { padding: 24px 20px; }
      }

      /* ── Print ── */
      @media print {
        .page-bg { background: #fff; padding: 0; }
        .cv { box-shadow: none; border-radius: 0; }
      }
    `}</style>

    <div className="cv">
      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="photo-wrap">
          <img src={photoSrc} alt={`${CV.name.first} ${CV.name.last}`} />
        </div>

        <div className="role-badge">{CV.title}</div>

        {/* Education */}
        <div className="sidebar-section">
          <p className="sidebar-heading">Education</p>
          <div className="s-accent" />
          {CV.education.map((e, i) => (
            <div key={i} className="edu-entry">
              <p className="edu-degree">{e.degree}</p>
              <p className="edu-school">{e.school}</p>
              <p className="edu-years">{e.years}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="sidebar-section">
          <p className="sidebar-heading">Skills</p>
          <div className="s-accent" />
          {CV.skills.map((s, i) => (
            <div key={i} className="skill-row">
              <span className="skill-name">{s.name}</span>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="sidebar-section">
          <p className="sidebar-heading">Languages</p>
          <div className="s-accent" />
          {CV.languages.map((l, i) => (
            <p key={i} className="lang-item">{l}</p>
          ))}
        </div>

        {/* Contact */}
        <div className="sidebar-section">
          <p className="sidebar-heading">Contact</p>
          <div className="s-accent" />
          <div className="contact-item">
            <div className="contact-icon-box">📞</div>
            <div className="contact-info">
              <span className="contact-label">Phone</span>
              <span className="contact-value">{CV.contact.phone}</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box">📧</div>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <a href={`mailto:${CV.contact.email}`} className="contact-value">{CV.contact.email}</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box">📍</div>
            <div className="contact-info">
              <span className="contact-label">Location</span>
              <span className="contact-value">{CV.contact.location}</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box">💼</div>
            <div className="contact-info">
              <span className="contact-label">LinkedIn</span>
              <a href={`https://${CV.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-value">{CV.contact.linkedin}</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-box">🐙</div>
            <div className="contact-info">
              <span className="contact-label">GitHub</span>
              <a href={`https://${CV.contact.github}`} target="_blank" rel="noopener noreferrer" className="contact-value">{CV.contact.github}</a>
            </div>
          </div>
        </div>
      </aside>

      {/* ── CONTENT ── */}
      <main className="content">
        {/* Name + title */}
        <div className="content-header">
          <h1 className="content-name">
            {CV.name.first} <strong>{CV.name.last}</strong>
          </h1>
          <span className="content-badge">{CV.title}</span>
        </div>

        {/* Profile */}
        <div className="c-section">
          <h2 className="c-heading">Profile</h2>
          <div className="c-accent" />
          <p className="profile-text">{CV.summary}</p>
        </div>

        {/* Work Experience */}
        <div className="c-section">
          <h2 className="c-heading">Work Experience</h2>
          <div className="c-accent" />
          {CV.experience.map((job, i) => (
            <div key={i} className="exp-entry">
              <p className="exp-title">{job.title}</p>
              <div className="exp-meta">
                <span className="exp-date">{job.years}</span>
                <span className="exp-company">{job.company}</span>
              </div>
              <ul className="exp-points">
                {job.points.map((pt, j) => <li key={j}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="c-section">
          <h2 className="c-heading">Certifications</h2>
          <div className="c-accent" />
          {CV.certifications.map((cert, i) => (
            <div key={i} className="cert-entry">
              <div>
                <p className="cert-name">{cert.name}</p>
                <p className="cert-issuer">{cert.issuer}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">View certificate →</a>
              </div>
              <span className="cert-date">{cert.date}</span>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="c-section">
          <h2 className="c-heading">Interests</h2>
          <div className="c-accent" />
          <div className="interests-row">
            {CV.interests.map((item, i) => (
              <div key={i} className="interest-item">
                <span className="interest-icon">{item.icon}</span>
                <span className="interest-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default App;
