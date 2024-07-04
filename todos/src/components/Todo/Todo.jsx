import PropTypes from "prop-types";
import { LuTrash2 } from "react-icons/lu";
import classes from "./Todo.module.css";

function Todo({todo, onChange, onDelete}) {
  return (
    <div>
          <div className={classes.singleTodo} key={todo.id}>
          <div className={classes.todoGroup}>
          <input type="checkbox" onChange={onChange}/>
          <span
            className={`${classes.todoText} ${
              todo.completed === true ? classes.lineThrough : undefined
            }`}
          >
            {todo.completed === true ? "DONE: " : "TODO: "}
            {todo.title}
          </span>
          </div>
            <LuTrash2 onClick={onDelete} size={20} color="gray"/>

        </div>
    </div>
  )
}

export default Todo;

Todo.propTypes = {
    todo: PropTypes.object,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
  };