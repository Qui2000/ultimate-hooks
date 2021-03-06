import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { theme } = useContext(ThemeContext);

  const { isLightTheme, dark, light } = theme;

  const { deleteTodo } = useContext(TodoContext);

  const style = isLightTheme ? light : dark;

  return (
    <li onClick={deleteTodo.bind(this, todo.id)} style={style}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
