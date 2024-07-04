import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import classes from "./TodoForm.module.css";

function TodoForm({ text, setText, todos, setTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([{ id: uuidv4(), completed: false, title: text }, ...todos]);
    setText("");
  };

  return (
    <form className={classes.todoForm} onSubmit={handleSubmit}>
      <div className={classes.formGroup}>
      <span className={classes.label}>title of new todo</span>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        className={classes.input}
      />
      </div>
      
      <Button type="submit"> Add</Button>
    </form>
  );
}

export default TodoForm;

TodoForm.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.func,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};
