import "./skills-container.scss";
import SkillsCard from "../SkillsCard/SkillsCard";
import PropTypes from "prop-types";

function SkillsContainer({ skills }) {
  return (
    <div className="container">
      {skills.map((skill, index) => (
        <SkillsCard key={index} imageIcon={skill.imageIcon} alt={skill.alt} />
      ))}
    </div>
  );
}

SkillsContainer.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default SkillsContainer;
