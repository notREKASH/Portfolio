import "./skills-container.scss";
import SkillsCard from "../SkillsCard/SkillsCard";

interface SkillsContainerProps {
  skills: {
    imageIcon: string;
    alt: string;
  }[];
}

function SkillsContainer({ skills }: SkillsContainerProps) {
  return (
    <div className="container">
      {skills.map((skill, index) => (
        <SkillsCard key={index} imageIcon={skill.imageIcon} alt={skill.alt} />
      ))}
    </div>
  );
}

export default SkillsContainer;
