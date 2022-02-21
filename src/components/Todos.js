import React, { useContext } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";

const Todos = () => {
  const { todos } = useContext(TodoContext);

  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div className="todo-list">
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Todos;
