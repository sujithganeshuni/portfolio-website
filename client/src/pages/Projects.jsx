const Projects = () => {
  const projects = [
    { name: 'Portfolio Website', description: 'A personal portfolio website built with React and Vite.' },
    { name: 'E-commerce App', description: 'A full-stack e-commerce application using MERN stack.' },
    { name: 'Chat App', description: 'A real-time chat application using Socket.io and Node.js.' },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;