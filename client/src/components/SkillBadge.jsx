import '/src/styles/SkillBadge.css';

const SkillBadge = ({ skill }) => {
  return (
    <span className="skill-badge">
      {skill}
    </span>
  );
};

export default SkillBadge;