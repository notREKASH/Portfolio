import "./toast-message.scss";
import PropTypes from "prop-types";

function ToastMessage({ message, type }) {
  return (
    <div className={`toast-message ${type}`}>
      <p>{message}</p>
    </div>
  );
}

export default ToastMessage;

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
