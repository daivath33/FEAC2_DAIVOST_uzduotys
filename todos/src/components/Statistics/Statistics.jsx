import PropTypes from "prop-types";

import classes from "./Statistics.module.css";

function Statistics({all, completed, incompleted}) {
  return (
    <div className={classes.todosInfo}>
    {all} todos ({incompleted} incompleted, {completed} completed)

  </div>
  )
}

export default Statistics;

Statistics.propTypes = {
    all: PropTypes.number,
    completed: PropTypes.number,
    incompleted: PropTypes.number,
  };