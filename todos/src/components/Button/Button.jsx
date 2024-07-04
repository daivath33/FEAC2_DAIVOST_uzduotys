import PropTypes from "prop-types"
import classes from "./Button.module.css"

function Button({onClick, children, type}) {
  return (
    <button onClick={onClick} type={type} className={classes.btn}>{children}</button>
  )
}

export default Button;

Button.propTypes ={
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired
}