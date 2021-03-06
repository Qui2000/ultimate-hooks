import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  const { addTodo } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      id: uuidv4(),
      title: title,
    });
    setTitle("");
    alert('Add successful')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter a new todo..."
        onChange={onTitleChange}
        value={title}
        required
      />
      <input type="submit" value="Add" style={style} />
    </form>
  );
};

export default TodoForm;
