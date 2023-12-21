import "./filter-button.scss";
import PropTypes from "prop-types";

function FilterButton({ name, bgColor, fontColor }) {
  return (
    <>
      <button
        className="filter-button"
        style={{ backgroundColor: bgColor, color: fontColor }}
      >
        {name}
      </button>
    </>
  );
}

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
};

export default FilterButton;
