import "./footer-button.scss";
import PropTypes from "prop-types";

function FooterButton({ icon, link, alt }) {
  return (
    <div className="footerButton">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={alt} />
      </a>
    </div>
  );
}

export default FooterButton;

FooterButton.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
