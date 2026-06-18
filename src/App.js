import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import photoSrc from './photo.jpeg';

const data = {
  personalInfo: {
    name: 'Vlad-Ioan Codreanu',
    title: 'Entry Level Web Developer (Aspiring)',
    email: 'codreanu.vladd@gmail.com',
    phone: '(+40) 735722314',
    linkedin: 'www.linkedin.com/in/codreanu-vlad-961126217/',
    github: 'github.com/VladC0d',
    location: 'Iași, Romania'
  },

  summary: `Hardworking and passionate with strong organizational skills. Ready to help team achieve company goals. Currently following a JavaScript course, having learned fundamentals and basic knowledge regarding CSS and HTML, interested in landing an entry-level web developer job. Also has basic knowledge of Matlab and C++.`,

  interests: ['✈️ Travel', '🎵 Music', '👗 Fashion'],

  experience: [
    {
      title: 'Insurance Agent',
      company: 'Generali',
      years: 'Oct 2024 – Now',
      description: [
        'Educating clients about different insurance options and benefits.',
        'Analyzing customer needs to recommend suitable coverage.',
        'Negotiating policy terms and premiums with insurance providers.',
        'Building long-term relationships to ensure client satisfaction.'
      ]
    },
    {
      title: 'Front End Internship (React)',
      company: 'Pentalog',
      years: 'Jun – Sep 2023',
      description: [
        'Actively participated in team meetings, contributing ideas and insights.',
        'Collaborated with cross-functional teams to enhance project understanding.',
        'Made contributions including bug fixes and feature implementations.',
        'Maintained up-to-date knowledge of React and front-end development trends.'
      ]
    }
  ],

  volunteering: [
    {
      event: 'Afterhills Iași',
      role: 'Volunteer',
      years: 'Aug – Sep 2019',
      description: [
        'Helper with organization and planning.',
        'Greeted visitors and answered questions about the program.',
        'Used strong interpersonal skills to convey information to others.',
        'Helped program leaders with administrative support duties.'
      ]
    }
  ],

  education: [
    {
      degree: 'Faculty of Automatic Control and Computer Science',
      university: 'Gheorghe Asachi Technical University of Iași',
      years: '2019 – 2023'
    }
  ],

  certifications: [
    {
      name: 'Salesforce Administrator',
      issuer: 'OSF Digital – OSF Academy',
      date: 'Jun 2026',
      description: 'Completed a 5-week global training program preparing new talents for the Salesforce technology market.',
      link: 'https://certificate.osf.digital/71177'
    }
  ],

  skills: {
    Languages: ['Romanian', 'English (C1)', 'JavaScript', 'HTML', 'CSS', 'Matlab', 'C++'],
    'Digital Skills': ['Social Media', 'Microsoft Office', 'SAGA C', 'Windows'],
    Other: ['Driving Licence B']
  },

  projects: [
    {
      name: 'GitHub Projects',
      years: 'Jan 2022 – Now',
      description: 'A collection of personal projects built while learning web development.',
      link: 'https://github.com/VladC0d'
    }
  ]
};

// ── Hamburger menu ────────────────────────────────────────────────────────────

const Menu = ({ open, onClose }) => {
  const navigate = useNavigate();
  const go = (path) => { navigate(path); onClose(); };
  if (!open) return null;
  return (
    <>
      <div className="menu-overlay" onClick={onClose} />
      <nav className="slide-menu">
        <button className="menu-close" onClick={onClose} aria-label="Close">✕</button>
        {[
          ['/', 'Summary'],
          ['/experience', 'Work Experience'],
          ['/education', 'Education'],
          ['/skills', 'Skills'],
          ['/projects', 'Projects'],
        ].map(([path, label]) => (
          <NavLink key={path} to={path} end={path === '/'} onClick={() => go(path)}>{label}</NavLink>
        ))}
      </nav>
    </>
  );
};

// ── Pages ─────────────────────────────────────────────────────────────────────

const About = () => (
  <div className="page">
    <div className="top-grid">
      <div className="card photo-card">
        <img src={photoSrc} alt="Vlad-Ioan Codreanu" className="profile-photo" />
      </div>
      <div className="card bio-card">
        <p className="bio-text">{data.summary}</p>
      </div>
    </div>

    <div className="card row-card">
      <span className="row-label">Interests</span>
      <div className="row-divider" />
      <div className="row-pills">
        {data.interests.map((item, i) => (
          <span key={i} className="interest-pill">{item}</span>
        ))}
      </div>
    </div>

    <div className="card row-card">
      <span className="row-label">Details</span>
      <div className="row-divider" />
      <div className="row-pills">
        <span className="detail-pill">📧 {data.personalInfo.email}</span>
        <span className="detail-pill">📞 {data.personalInfo.phone}</span>
        <span className="detail-pill">📍 {data.personalInfo.location}</span>
        <a className="detail-pill detail-link" href={`https://${data.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="detail-pill detail-link" href={`https://${data.personalInfo.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </div>
);

const Experience = () => (
  <div className="page">
    <div className="card-grid">
      {data.experience.map((job, i) => (
        <div key={i} className="card exp-card">
          <div className="exp-header">
            <h3>{job.title}</h3>
            <span className="date-pill">{job.years}</span>
          </div>
          <p className="exp-sub">{job.company}</p>
          <div className="card-divider" />
          <ul className="exp-list">
            {job.description.map((pt, j) => <li key={j}>{pt}</li>)}
          </ul>
        </div>
      ))}
    </div>
    {data.volunteering.map((vol, i) => (
      <div key={i} className="card exp-card" style={{ marginTop: 16 }}>
        <div className="exp-header">
          <h3>{vol.event}</h3>
          <span className="date-pill">{vol.years}</span>
        </div>
        <p className="exp-sub">{vol.role}</p>
        <div className="card-divider" />
        <ul className="exp-list">
          {vol.description.map((pt, j) => <li key={j}>{pt}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

const Education = () => (
  <div className="page">
    <div className="card-grid">
      {data.education.map((edu, i) => (
        <div key={i} className="card exp-card">
          <div className="exp-header">
            <h3>{edu.degree}</h3>
            <span className="date-pill">{edu.years}</span>
          </div>
          <p className="exp-sub">{edu.university}</p>
        </div>
      ))}
      {data.certifications.map((cert, i) => (
        <div key={i} className="card exp-card">
          <div className="exp-header">
            <h3>{cert.name}</h3>
            <span className="date-pill">{cert.date}</span>
          </div>
          <p className="exp-sub">{cert.issuer}</p>
          <div className="card-divider" />
          <p className="exp-desc">{cert.description}</p>
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="card-link">
            View certificate →
          </a>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <div className="page">
    {Object.entries(data.skills).map(([category, items], i) => (
      <div key={i} className="card row-card">
        <span className="row-label">{category}</span>
        <div className="row-divider" />
        <div className="row-pills">
          {items.map((item, j) => <span key={j} className="skill-pill">{item}</span>)}
        </div>
      </div>
    ))}
    {data.certifications.map((cert, i) => (
      <div key={i} className="card row-card" style={{ alignItems: 'flex-start', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}>
          <span className="row-label">Certified</span>
          <div className="row-divider" />
          <span className="skill-pill accent-pill">{cert.name}</span>
          <span className="date-pill" style={{ marginLeft: 'auto' }}>{cert.date}</span>
        </div>
        <p style={{ margin: '0 0 0 0', color: '#8E8E93', fontSize: 13, paddingLeft: 0 }}>{cert.issuer}</p>
      </div>
    ))}
  </div>
);

const Projects = () => (
  <div className="page">
    {data.projects.map((project, i) => (
      <div key={i} className="card exp-card">
        <div className="exp-header">
          <h3>{project.name}</h3>
          <span className="date-pill">{project.years}</span>
        </div>
        <div className="card-divider" />
        <p className="exp-desc">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
          {project.link} →
        </a>
      </div>
    ))}
  </div>
);

// ── App ───────────────────────────────────────────────────────────────────────

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HashRouter>
      <div className="app">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            font-family: 'Inter', sans-serif;
            background: #0D0D0D;
            color: #fff;
            -webkit-font-smoothing: antialiased;
          }

          .app { min-height: 100vh; }

          /* ── Header ── */
          .header {
            background: #1C1C1E;
            border-bottom: 1px solid #2C2C2E;
            padding: 18px 24px 18px 72px;
            display: flex;
            align-items: center;
            gap: 16px;
            position: sticky;
            top: 0;
            z-index: 50;
          }
          .header h1 {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            white-space: nowrap;
          }
          .header-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #FF0066;
            flex-shrink: 0;
          }
          .header-title {
            font-size: 12px;
            color: #8E8E93;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            white-space: nowrap;
          }

          /* ── Hamburger ── */
          .hamburger {
            position: fixed;
            top: 12px;
            left: 16px;
            z-index: 200;
            width: 40px;
            height: 40px;
            background: #2C2C2E;
            border: none;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            padding: 0;
          }
          .hamburger span {
            display: block;
            width: 18px;
            height: 2px;
            background: #fff;
            border-radius: 2px;
            transition: transform 0.2s, opacity 0.2s;
          }
          .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
          .hamburger.open span:nth-child(2) { opacity: 0; }
          .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

          /* ── Slide menu ── */
          .menu-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            z-index: 150;
          }
          .slide-menu {
            position: fixed;
            top: 0; left: 0; bottom: 0;
            width: 240px;
            background: #1C1C1E;
            border-right: 1px solid #2C2C2E;
            z-index: 160;
            display: flex;
            flex-direction: column;
            padding: 64px 0 32px;
          }
          .menu-close {
            position: absolute;
            top: 14px; right: 14px;
            background: none;
            border: none;
            color: #8E8E93;
            font-size: 16px;
            cursor: pointer;
            padding: 4px 8px;
          }
          .menu-close:hover { color: #fff; }
          .slide-menu a {
            padding: 14px 24px;
            color: #8E8E93;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            border-left: 3px solid transparent;
            transition: color 0.15s, border-color 0.15s, background 0.15s;
          }
          .slide-menu a:hover { color: #fff; background: rgba(255,255,255,0.04); }
          .slide-menu a.active { color: #22d3ee; border-left-color: #22d3ee; }

          /* ── Page container ── */
          .page {
            max-width: 900px;
            margin: 0 auto;
            padding: 28px 20px 48px;
            animation: fadeIn 0.2s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          /* ── Cards ── */
          .card {
            background: #1C1C1E;
            border-radius: 16px;
            padding: 24px;
          }

          /* ── Top grid: photo + bio ── */
          .top-grid {
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 16px;
            margin-bottom: 16px;
          }
          .photo-card {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .profile-photo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center 30%;
            border: 3px solid #22d3ee;
          }
          .bio-card { display: flex; align-items: center; }
          .bio-text {
            color: #EBEBF5;
            font-size: 15px;
            line-height: 1.75;
            font-style: italic;
          }

          /* ── Row cards (interests / details / skills) ── */
          .row-card {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 16px;
            flex-wrap: wrap;
          }
          .row-label {
            font-size: 14px;
            font-weight: 700;
            color: #fff;
            white-space: nowrap;
            min-width: 90px;
          }
          .row-divider {
            width: 1px;
            height: 32px;
            background: #3A3A3C;
            flex-shrink: 0;
          }
          .row-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
          }
          .interest-pill {
            background: #2C2C2E;
            color: #EBEBF5;
            font-size: 13px;
            font-weight: 500;
            padding: 6px 14px;
            border-radius: 9999px;
          }
          .detail-pill {
            background: #2C2C2E;
            color: #EBEBF5;
            font-size: 12px;
            font-weight: 500;
            padding: 6px 12px;
            border-radius: 9999px;
          }
          .detail-link {
            text-decoration: none;
            color: #22d3ee;
            transition: opacity 0.15s;
          }
          .detail-link:hover { opacity: 0.75; }
          .skill-pill {
            background: rgba(255,0,102,0.1);
            color: #FF0066;
            border: 1px solid rgba(255,0,102,0.25);
            font-size: 13px;
            font-weight: 500;
            padding: 5px 13px;
            border-radius: 9999px;
          }
          .accent-pill {
            background: rgba(34,211,238,0.1);
            color: #22d3ee;
            border: 1px solid rgba(34,211,238,0.25);
          }

          /* ── Card grid (experience / education) ── */
          .card-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .exp-card { display: flex; flex-direction: column; gap: 6px; }
          .exp-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 12px;
          }
          .exp-card h3 {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            line-height: 1.2;
          }
          .date-pill {
            background: #2C2C2E;
            color: #EBEBF5;
            font-size: 12px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 9999px;
            white-space: nowrap;
            flex-shrink: 0;
          }
          .exp-sub {
            font-size: 13px;
            color: #8E8E93;
          }
          .card-divider {
            height: 1px;
            background: #2C2C2E;
            margin: 8px 0;
          }
          .exp-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 6px;
            flex: 1;
          }
          .exp-list li {
            font-size: 13px;
            color: #EBEBF5;
            line-height: 1.5;
            padding-left: 14px;
            position: relative;
          }
          .exp-list li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #FF0066;
          }
          .exp-desc {
            font-size: 13px;
            color: #8E8E93;
            line-height: 1.6;
          }
          .card-link {
            font-size: 13px;
            color: #22d3ee;
            text-decoration: none;
            font-weight: 500;
            margin-top: 4px;
          }
          .card-link:hover { text-decoration: underline; }

          /* ── Print button ── */
          .print-button {
            display: none;
          }

          /* ── Responsive ── */
          @media (max-width: 640px) {
            .header { padding-left: 64px; }
            .header-title { display: none; }
            .top-grid { grid-template-columns: 1fr; }
            .photo-card { padding: 16px; }
            .card-grid { grid-template-columns: 1fr; }
            .row-card { flex-direction: column; align-items: flex-start; }
            .row-divider { width: 32px; height: 1px; }
          }

          /* ── Print ── */
          @media print {
            body { background: #fff; color: #000; }
            .card { background: #f5f5f5; break-inside: avoid; }
            .hamburger, .slide-menu, .menu-overlay { display: none; }
            .header { background: #f5f5f5; border-bottom: 1px solid #ddd; }
          }
        `}</style>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Header */}
        <header className="header">
          <h1>{data.personalInfo.name}</h1>
          <div className="header-dot" />
          <span className="header-title">{data.personalInfo.title}</span>
        </header>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
