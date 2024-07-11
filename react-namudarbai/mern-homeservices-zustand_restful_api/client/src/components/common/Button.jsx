import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.scss";

function Button({className, rounded, ...props}) {
  return (
    <button
    className={classNames(
      styles.button,
      rounded && styles.rounded,
      className
    )}
    {...props}
  />
  )
}

Button.propTypes = {
    className: PropTypes.string,
    rounded: PropTypes.bool,
  };

export default Button;