const Experience = () => {
  const experiences = [
    { role: 'AI/ML Engineer', company: 'TechCorp', duration: '2022 - Present' },
    { role: 'MERN Stack Developer', company: 'WebSolutions', duration: '2020 - 2022' },
  ];

  return (
    <div className="experience-container">
      {experiences.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3>{exp.role}</h3>
          <p>{exp.company}</p>
          <p>{exp.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;