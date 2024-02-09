import React, { useState } from "react";
import "./TodoApp.css";
const TodoApp = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (text.trim() !== "") {
      setTodos([...todos, text.trim()]);
      setText("");
    } else {
      alert("Please enter a task");
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleUpdate = (index) => {
    const updatedTodo = prompt("Enter updated todo:", todos[index]);
    if (updatedTodo !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index] = updatedTodo.trim();
      setTodos(updatedTodos);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>+</button>
      {todos.length === 0 ? (
        <p>No todos found</p>
      ) : (
        todos.map((todo, index) => (
          <div key={index}>
            <p>{todo}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleUpdate(index)}>Update</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoApp;
