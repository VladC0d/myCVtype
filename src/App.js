import React from 'react';

// Main App component for the CV page
const App = () => {
  // Sample data for the CV
  const personalInfo = {
    name: 'Vlad-Ioan Codreanu',
    title: 'Entry Level Web Developer (Aspiring)',
    email: 'codreanu.vladd@gmail.com',
    phone: '(+40) 735722314',
    linkedin: 'www.linkedin.com/in/codreanu-vlad-961126217/',
    github: 'github.com/VladC0d',
    location: 'Iași, Romania'
  };

  const summary = `
    Hardworking and passionate with strong organizational skills. Ready to help team achieve company goals.
    Currently following a JavaScript course, having learned fundamentals and basic knowledge regarding CSS and HTML,
    interested in landing an entry-level web developer job. Also has basic knowledge of Matlab and C++.
  `;

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
    languages: ['Romanian (Mother tongue)', 'English (C1 Listening, C1 Reading, B1 Writing, B2 Spoken Production, B2 Spoken Interaction)', 'JavaScript (Fundamentals)', 'HTML', 'CSS', 'Matlab (Basics)', 'C++ (Basics)'],
    digitalSkills: ['Social Media', 'Microsoft Office', 'SAGA C - Accounting Software', 'Installing and operation of Microsoft XP, Windows 7, 8 & 10 MS-Office'],
    other: ['Driving Licence: B']
  };

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
      years: 'August 23, 2019 - September 1, 2019',
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
      {/* Basic CSS for the CV page */}
      <style>
        {`
        body {
          margin: 0;
          font-family: 'Inter', sans-serif; /* Using Inter font, fallback to sans-serif */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #f3f4f6; /* Light gray background */
        }

        .cv-container {
          min-height: 100vh;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start; /* Align to top */
        }

        .cv-page {
          max-width: 960px;
          width: 100%;
          background-color: #ffffff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 40px;
          box-sizing: border-box; /* Include padding in element's total width and height */
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .cv-page {
            padding: 20px;
          }
          .header-info-item {
            flex-direction: column; /* Stack items vertically on smaller screens */
            align-items: center;
            text-align: center;
            margin: 5px 0; /* Reduce margin */
          }
        }

        .header {
          text-align: center;
          margin-bottom: 32px;
        }

        .header h1 {
          font-size: 36px;
          font-weight: bold;
          color: #333;
          margin-bottom: 8px;
        }

        .header p {
          font-size: 20px;
          color: #555;
          margin-bottom: 16px;
        }

        .header-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          color: #777;
          font-size: 14px;
        }

        .header-info-item {
          display: flex;
          align-items: center;
          margin: 0 10px;
          margin-bottom: 10px; /* Add some space below each item */
        }

        .header-info-item svg {
          width: 16px;
          height: 16px;
          margin-right: 4px;
          fill: currentColor; /* Use current text color for SVG */
        }

        .header-info-item a {
          color: #777;
          text-decoration: none;
        }

        .header-info-item a:hover {
          text-decoration: underline;
        }

        .section {
          margin-bottom: 32px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 600;
          color: #444;
          border-bottom: 2px solid #ddd;
          padding-bottom: 8px;
          margin-bottom: 16px;
        }

        /* Animation for paragraphs */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .summary-text,
        .experience-item p,
        .experience-item ul li,
        .education-item p,
        .projects p,
        .volunteering ul li {
          opacity: 0; /* Start hidden */
          animation: fadeInUp 0.6s ease-out forwards;
          /* Staggering can be added with individual delays if needed,
             but for simplicity, applying to all relevant elements. */
        }

        /* Staggering for lists within sections */
        .experience-item ul li:nth-child(1),
        .volunteering ul li:nth-child(1) { animation-delay: 0.1s; }
        .experience-item ul li:nth-child(2),
        .volunteering ul li:nth-child(2) { animation-delay: 0.2s; }
        .experience-item ul li:nth-child(3),
        .volunteering ul li:nth-child(3) { animation-delay: 0.3s; }
        .experience-item ul li:nth-child(4),
        .volunteering ul li:nth-child(4) { animation-delay: 0.4s; }
        .experience-item ul li:nth-child(5),
        .volunteering ul li:nth-child(5) { animation-delay: 0.5s; }
        .experience-item ul li:nth-child(6),
        .volunteering ul li:nth-child(6) { animation-delay: 0.6s; }

        /* Staggering for main paragraphs in sections */
        .summary-text { animation-delay: 0.1s; }
        .education-item:nth-child(1) p { animation-delay: 0.2s; }
        .education-item:nth-child(2) p { animation-delay: 0.3s; }
        .projects .experience-item p:nth-of-type(1) { animation-delay: 0.1s; }
        .projects .experience-item p:nth-of-type(2) { animation-delay: 0.2s; }


        .summary-text {
          color: #555;
          line-height: 1.6;
        }

        .experience-item {
          margin-bottom: 24px;
        }

        .experience-item:last-child {
          margin-bottom: 0;
        }

        .experience-item h3 {
          font-size: 20px;
          font-weight: 600;
          color: #333;
        }

        .experience-item p {
          font-size: 16px;
          color: #666;
          font-style: italic;
          margin-top: 4px;
        }

        .experience-item ul {
          list-style: disc;
          margin-left: 20px;
          margin-top: 8px;
          color: #555;
        }

        .experience-item ul li {
          margin-bottom: 4px;
        }

        .education-item {
          margin-bottom: 16px;
        }

        .education-item:last-child {
          margin-bottom: 0;
        }

        .education-item h3 {
          font-size: 20px;
          font-weight: 600;
          color: #333;
        }

        .education-item p {
          font-size: 16px;
          color: #666;
          font-style: italic;
          margin-top: 4px;
        }

        .skills-category {
          margin-bottom: 16px;
        }

        .skills-category:last-child {
          margin-bottom: 0;
        }

        .skills-category h3 {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          background-color: #e0f2f7; /* Light blue */
          color: #007bff; /* Darker blue text */
          font-size: 14px;
          padding: 6px 12px;
          border-radius: 9999px; /* Fully rounded */
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        `}
      </style>

      <div className="cv-page">
        {/* Header Section */}
        <header className="header">
          <h1>{personalInfo.name}</h1>
          <p>{personalInfo.title}</p>
          <div className="header-info">
            <span className="header-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              {personalInfo.email}
            </span>
            <span className="header-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 1.48a1 1 0 01-.542 1.353l-1.655.828a8.001 8.001 0 003.868 3.868l.828-1.655a1 1 0 011.353-.542l1.48.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.823 18 2 12.177 2 5V3z"></path></svg>
              {personalInfo.phone}
            </span>
            <span className="header-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 9.707a1 1 0 00-1.414-1.414L9 11.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a>
            </span>
            <span className="header-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.153 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.892 1.529 2.342 1.087 2.91.832.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.115-4.555-4.948 0-1.09.39-1.984 1.03-2.682-.104-.253-.448-1.27.098-2.65 0 0 .84-.268 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.7.116 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.38.202 2.398.098 2.65.64.698 1.029 1.592 1.029 2.682 0 3.841-2.339 4.685-4.566 4.935.359.307.678.915.678 1.846 0 1.33-.012 2.41-.012 2.74 0 .268.18.579.688.482C17.13 18.149 20 14.414 20 10.017A10.017 10.017 0 0010 0z" clipRule="evenodd"></path></svg>
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">{personalInfo.github}</a>
            </span>
            <span className="header-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              {personalInfo.location}
            </span>
          </div>
        </header>

        {/* Summary Section */}
        <section className="section">
          <h2 className="section-title">Summary</h2>
          <p className="summary-text">{summary}</p>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2 className="section-title">Work Experience</h2>
          {experience.map((job, index) => (
            <div key={index} className="experience-item">
              <h3>{job.title}</h3>
              <p>{job.company} | {job.years}</p>
              <ul>
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Education and Training</h2>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.degree}</h3>
              <p>{edu.university} | {edu.years}</p>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Skills</h2>
          {Object.entries(skills).map(([category, items], index) => (
            <div key={index} className="skills-category">
              <h3>{category.replace(/([A-Z])/g, ' $1').trim()}:</h3>
              <div className="skills-list">
                {items.map((item, i) => (
                  <span key={i} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="section">
          <h2 className="section-title">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="experience-item">
              <h3>{project.name}</h3>
              <p>{project.years}</p>
              <p>{project.description}</p>
              {project.link && <p><a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>}
            </div>
          ))}
        </section>

        {/* Volunteering Section */}
        <section className="section">
          <h2 className="section-title">Volunteering</h2>
          {volunteering.map((vol, index) => (
            <div key={index} className="experience-item">
              <h3>{vol.event}</h3>
              <p>{vol.years}</p>
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
  );
};

export default App;
