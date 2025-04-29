import SkillBadge from '../components/SkillBadge';

const Skills = () => {
  const skills = ['Java','Python','JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'HTML', 'CSS', 'Git', 'Docker', 'Kubernetes', 'AWS',];

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;