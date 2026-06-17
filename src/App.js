import React from 'react';

const App = () => {
  const personalInfo = {
    name: 'Vlad-Ioan Codreanu',
    title: 'Entry Level Web Developer (Aspiring)',
    email: 'codreanu.vladd@gmail.com',
    phone: '(+40) 735722314',
    linkedin: 'www.linkedin.com/in/codreanu-vlad-961126217/',
    github: 'github.com/VladC0d',
    location: 'Iași, Romania'
  };

  const summary = `Hardworking and passionate with strong organizational skills. Ready to help team achieve company goals. Currently following a JavaScript course, having learned fundamentals and basic knowledge regarding CSS and HTML, interested in landing an entry-level web developer job. Also has basic knowledge of Matlab and C++.`;

  const experience = [
    {
      title: 'Insurance Agent',
      company: 'Generali',
      years: 'October 2024 - Current',
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
      years: 'June 2023 - September 2023',
      description: [
        'Actively participated in team meetings, contributing ideas and insights to discussions.',
        'Collaborated with cross-functional teams to enhance project understanding and foster a positive and inclusive work environment.',
        'Made substantive contributions to actual projects, including bug fixes and feature implementations, applying theoretical knowledge to real-world scenarios.',
        'Maintained up-to-date knowledge of React and front-end development trends by attending webinars, reading industry blogs, and exploring emerging technologies.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Student at the Faculty of Automatic Control and Computer Science',
      university: 'Gheorghe Asachi Technical University of Iași',
      years: 'October 2019 - Current'
    }
  ];

  const skills = {
    Languages: ['Romanian (Mother tongue)', 'English (C1)', 'JavaScript', 'HTML', 'CSS', 'Matlab (Basics)', 'C++ (Basics)'],
    'Digital Skills': ['Social Media', 'Microsoft Office', 'SAGA C – Accounting Software', 'Windows XP / 7 / 8 / 10'],
    Other: ['Driving Licence: B']
  };

  const certifications = [
    {
      name: 'Salesforce Administrator',
      issuer: 'OSF Digital – OSF Academy',
      date: 'June 10, 2026',
      description: 'Completed a 5-week global training program preparing new talents for the Salesforce technology market.',
      link: 'https://certificate.osf.digital/71177',
      id: '071177'
    }
  ];

  const projects = [
    {
      name: 'Projects',
      years: 'January 2022 - Current',
      description: 'Here you will find some of the projects I have done and fully understood.',
      link: 'https://github.com/VladC0d'
    }
  ];

  const volunteering = [
    {
      event: 'Afterhills Iași',
      years: 'August 23, 2019 – September 1, 2019',
      description: [
        'Helper with organization and planning.',
        'Greeted visitors and answered questions about program, requirements and opportunities.',
        'Used strong interpersonal communication skills to convey information to others.',
        'Helped program leaders with administrative support duties.',
        'Maintained clean facilities to better serve program needs.'
      ]
    }
  ];

  return (
    <div className="cv-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #f0f4f8;
        }

        .cv-container {
          min-height: 100vh;
          padding: 32px 20px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Print button ── */
        .print-button {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          padding: 10px 22px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: background 0.15s;
          align-self: flex-end;
          max-width: 960px;
          width: 100%;
          justify-content: flex-end;
        }

        .print-button:hover { background: #1d4ed8; }

        /* ── CV card ── */
        .cv-page {
          max-width: 960px;
          width: 100%;
          background: #fff;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          border-radius: 10px;
          overflow: hidden;
        }

        /* ── Header ── */
        .header {
          background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%);
          color: #fff;
          padding: 44px 48px 36px;
          text-align: center;
        }

        .header h1 {
          font-size: 34px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
          letter-spacing: -0.01em;
        }

        .header .subtitle {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0 0 24px;
        }

        .header-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px 24px;
          font-size: 13px;
          color: rgba(255,255,255,0.88);
        }

        .header-info-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .header-info-item svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          fill: currentColor;
        }

        .header-info-item a {
          color: rgba(255,255,255,0.88);
          text-decoration: none;
        }

        .header-info-item a:hover {
          color: #fff;
          text-decoration: underline;
        }

        /* ── Body sections ── */
        .cv-body {
          padding: 36px 48px 40px;
        }

        .section {
          margin-bottom: 32px;
        }

        .section:last-child { margin-bottom: 0; }

        .section-title {
          font-size: 11px;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 6px;
          margin-bottom: 18px;
        }

        /* ── Animations ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .summary-text,
        .entry-item,
        .skills-category {
          animation: fadeInUp 0.5s ease-out both;
        }

        .section:nth-child(1) .summary-text  { animation-delay: 0.05s; }
        .section:nth-child(2) .entry-item:nth-child(1) { animation-delay: 0.10s; }
        .section:nth-child(2) .entry-item:nth-child(2) { animation-delay: 0.18s; }
        .section:nth-child(3) .entry-item:nth-child(1) { animation-delay: 0.10s; }
        .section:nth-child(4) .skills-category:nth-child(1) { animation-delay: 0.05s; }
        .section:nth-child(4) .skills-category:nth-child(2) { animation-delay: 0.12s; }
        .section:nth-child(4) .skills-category:nth-child(3) { animation-delay: 0.19s; }
        .section:nth-child(5) .entry-item:nth-child(1) { animation-delay: 0.08s; }
        .section:nth-child(6) .entry-item:nth-child(1) { animation-delay: 0.08s; }

        /* ── Summary ── */
        .summary-text {
          color: #4b5563;
          line-height: 1.75;
          font-size: 15px;
        }

        /* ── Experience / Education / Projects / Volunteering ── */
        .entry-item {
          margin-bottom: 22px;
        }

        .entry-item:last-child { margin-bottom: 0; }

        .entry-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 4px;
        }

        .entry-item h3 {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin: 0;
        }

        .entry-date {
          font-size: 13px;
          color: #6b7280;
          white-space: nowrap;
        }

        .entry-sub {
          font-size: 14px;
          color: #2563eb;
          font-weight: 500;
          margin: 3px 0 0;
        }

        .entry-item ul {
          list-style: none;
          padding: 0;
          margin: 10px 0 0;
        }

        .entry-item ul li {
          position: relative;
          padding-left: 16px;
          margin-bottom: 5px;
          font-size: 14px;
          color: #374151;
          line-height: 1.6;
        }

        .entry-item ul li::before {
          content: '–';
          position: absolute;
          left: 0;
          color: #9ca3af;
        }

        .entry-desc {
          margin: 8px 0 0;
          font-size: 14px;
          color: #4b5563;
          line-height: 1.6;
        }

        .entry-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 6px;
          font-size: 13px;
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
        }

        .entry-link:hover { text-decoration: underline; }

        /* ── Skills ── */
        .skills-category {
          margin-bottom: 14px;
        }

        .skills-category:last-child { margin-bottom: 0; }

        .skills-category h3 {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin: 0 0 8px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          background: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
          font-size: 13px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 9999px;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .header { padding: 32px 24px 28px; }
          .cv-body  { padding: 28px 24px 32px; }
          .header h1 { font-size: 26px; }
          .entry-header { flex-direction: column; }
          .print-button { justify-content: center; }
        }

        /* ── Print ── */
        @media print {
          body { background: #fff; }

          .cv-container { padding: 0; }
          .print-button { display: none; }

          .cv-page {
            box-shadow: none;
            border-radius: 0;
            max-width: 100%;
          }

          .header {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .section { break-inside: avoid; }
          .entry-item { break-inside: avoid; }

          @keyframes fadeInUp {
            from { opacity: 1; transform: none; }
            to   { opacity: 1; transform: none; }
          }
        }
      `}</style>

      <button className="print-button" onClick={() => window.print()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v5a2 2 0 002 2h1v1a2 2 0 002 2h6a2 2 0 002-2v-1h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm2 0h6v3H7V4zm-1 9a1 1 0 100-2 1 1 0 000 2zm1 2v-1h6v1H7z" clipRule="evenodd"/>
        </svg>
        Print / Save as PDF
      </button>

      <div className="cv-page">
        {/* Header */}
        <header className="header">
          <h1>{personalInfo.name}</h1>
          <p className="subtitle">{personalInfo.title}</p>
          <div className="header-info">
            <span className="header-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </span>
            <span className="header-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 1.48a1 1 0 01-.542 1.353l-1.655.828a8.001 8.001 0 003.868 3.868l.828-1.655a1 1 0 011.353-.542l1.48.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.823 18 2 12.177 2 5V3z"/>
              </svg>
              {personalInfo.phone}
            </span>
            <span className="header-info-item">
              {/* LinkedIn brand icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </span>
            <span className="header-info-item">
              {/* GitHub brand icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.153 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.342 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.115-4.555-4.948 0-1.09.39-1.984 1.03-2.682-.104-.253-.448-1.27.098-2.65 0 0 .84-.268 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.7.116 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.38.202 2.398.098 2.65.64.698 1.029 1.592 1.029 2.682 0 3.841-2.339 4.685-4.566 4.935.359.307.678.915.678 1.846 0 1.33-.012 2.41-.012 2.74 0 .268.18.579.688.482C17.13 18.149 20 14.414 20 10.017A10.017 10.017 0 0010 0z" clipRule="evenodd"/>
              </svg>
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
            <span className="header-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              {personalInfo.location}
            </span>
          </div>
        </header>

        <div className="cv-body">
          {/* Summary */}
          <section className="section">
            <h2 className="section-title">Summary</h2>
            <p className="summary-text">{summary}</p>
          </section>

          {/* Work Experience */}
          <section className="section">
            <h2 className="section-title">Work Experience</h2>
            {experience.map((job, index) => (
              <div key={index} className="entry-item">
                <div className="entry-header">
                  <h3>{job.title}</h3>
                  <span className="entry-date">{job.years}</span>
                </div>
                <p className="entry-sub">{job.company}</p>
                <ul>
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="section">
            <h2 className="section-title">Education and Training</h2>
            {education.map((edu, index) => (
              <div key={index} className="entry-item">
                <div className="entry-header">
                  <h3>{edu.degree}</h3>
                  <span className="entry-date">{edu.years}</span>
                </div>
                <p className="entry-sub">{edu.university}</p>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section className="section">
            <h2 className="section-title">Certifications</h2>
            {certifications.map((cert, index) => (
              <div key={index} className="entry-item">
                <div className="entry-header">
                  <h3>{cert.name}</h3>
                  <span className="entry-date">{cert.date}</span>
                </div>
                <p className="entry-sub">{cert.issuer}</p>
                <p className="entry-desc">{cert.description}</p>
                {cert.link && (
                  <a className="entry-link" href={cert.link} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                    </svg>
                    View certificate
                  </a>
                )}
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="section">
            <h2 className="section-title">Skills</h2>
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="skills-category">
                <h3>{category}</h3>
                <div className="skills-list">
                  {items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="section">
            <h2 className="section-title">Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="entry-item">
                <div className="entry-header">
                  <h3>{project.name}</h3>
                  <span className="entry-date">{project.years}</span>
                </div>
                <p className="entry-desc">{project.description}</p>
                {project.link && (
                  <a className="entry-link" href={project.link} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                    </svg>
                    {project.link}
                  </a>
                )}
              </div>
            ))}
          </section>

          {/* Volunteering */}
          <section className="section">
            <h2 className="section-title">Volunteering</h2>
            {volunteering.map((vol, index) => (
              <div key={index} className="entry-item">
                <div className="entry-header">
                  <h3>{vol.event}</h3>
                  <span className="entry-date">{vol.years}</span>
                </div>
                <ul>
                  {vol.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
