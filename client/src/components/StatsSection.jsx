import React from 'react';
import '/src/styles/StatsSection.css';
import SkillBadge from './SkillBadge';

const StatsSection = () => {
  const stats = [
    { title: 'CodersRank Score', value: '210.2' },
    { title: 'Projects Completed', value: '15+' },
    { title: 'Years of Experience', value: '3+' },
  ];

  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.title}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
      <footer className="powered-by">Powered by Sujith Ganeshuni</footer>
    </section>
  );
};

export default StatsSection;