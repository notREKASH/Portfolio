import "./skills-card.scss";
import PropTypes from "prop-types";

function SkillsCard({ imageIcon, alt }) {
  return (
    <>
      <div className="skill">
        <img src={imageIcon} alt={alt} className="icon" />
      </div>
    </>
  );
}

SkillsCard.propTypes = {
  imageIcon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SkillsCard;
