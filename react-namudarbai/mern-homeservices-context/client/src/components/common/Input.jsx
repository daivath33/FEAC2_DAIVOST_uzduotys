import PropTypes from "prop-types";
import styles from "./Input.module.scss";

function Input({ label, icon, error, ...props }) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <div className={styles.input_box}>
        <p className={styles.icon}>{icon}</p>
        <input {...props} />
      </div>
      <div className={styles.error}> {error && <p>{error}</p>}</div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  error: PropTypes.string,
};

export default Input;
