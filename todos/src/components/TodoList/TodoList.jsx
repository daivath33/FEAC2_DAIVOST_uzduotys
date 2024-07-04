import PropTypes from "prop-types";
import { useEffect } from "react";
import Todo from "../Todo/Todo";
import Statistics from "../Statistics/Statistics";
import classes from "./TodoList.module.css";

function TodoList({ todos, setTodos }) {
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodo]);
  };

  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteCompleted = () => {
    const newTodo = todos.filter((todo) => todo.completed === false);
    setTodos([...newTodo]);
  };

  const completedTodos = todos.filter((todo) => todo.completed === true);
  const incompletedTodos = todos.filter((todo) => todo.completed === false);

  if (!todos || todos.length === 0) {
    return <h2 className={classes.message}>You have any Todos!</h2>;
  }
  return (
    <div className={classes.allTodos}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onChange={() => handleCompleted(todo.id)}
          onDelete={() => handleDelete(todo.id)}
        />
      ))}
      <Statistics
        all={todos.length}
        completed={completedTodos.length}
        incompleted={incompletedTodos.length}
      />
      <div onClick={deleteCompleted} className={classes.deleteCompleted}>
        Delete all completed todos
      </div>
    </div>
  );
}

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};
