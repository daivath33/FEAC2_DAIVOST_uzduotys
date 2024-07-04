import { useEffect, useState } from "react";

import Heading from "./components/Heading/Heading";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(()=>{
   let allTodos = JSON.parse(localStorage.getItem("todos")) 
   if(allTodos){
    setTodos(allTodos)
   }
  },[])

  return (
    <div className="todo-app">
      <div className="container">
        <Heading>Todos List</Heading>
        <TodoForm
          text={text}
          setText={setText}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />    
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>
    </div>
  );
}

export default App;
