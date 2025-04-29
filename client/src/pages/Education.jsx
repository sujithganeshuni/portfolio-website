const Education = () => {
  const education = [
    { degree: 'B.Tech in Computer Science', institution: 'XYZ University', year: '2022 - 2026' },
    { degree: 'High School', institution: 'ABC School', year: '2016 - 2018' },
  ];

  return (
    <div className="education-container">
      {education.map((edu, index) => (
        <div key={index} className="education-card">
          <h3>{edu.degree}</h3>
          <p>{edu.institution}</p>
          <p>{edu.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;