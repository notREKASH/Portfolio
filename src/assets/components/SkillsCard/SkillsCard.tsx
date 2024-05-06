import React from "react";
import "./skills-card.scss";
import PropTypes from "prop-types";

interface SkillsCardProps {
  imageIcon: string;
  alt: string;
}

function SkillsCard({ imageIcon, alt }: SkillsCardProps) {
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
