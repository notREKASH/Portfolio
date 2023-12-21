import "./about-card.scss";
import PropTypes from "prop-types";

function AboutCard({ title, imageIcon, description }) {
  return (
    <>
      <div className="aboutCard">
        <h4>{title}</h4>
        <img src={imageIcon} alt={description} />
        <p>{description}</p>
      </div>
    </>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageIcon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutCard;
