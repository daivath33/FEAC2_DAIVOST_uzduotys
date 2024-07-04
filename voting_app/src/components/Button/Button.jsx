import PropTypes from "prop-types"
import classes from "./Button.module.css"

function Button({onClick, children, type, background}) {
  return (
    <button onClick={onClick} type={type} className={classes.btn} style={{background: background}}>{children}</button>
  )
}

export default Button;

Button.propTypes ={
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
}