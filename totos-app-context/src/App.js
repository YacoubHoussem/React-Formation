import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import React, { useState, useEffect } from "react";

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    fecthTodos();
  }, []);

  async function fecthTodos() {
    const response = await fetch(process.env.REACT_APP_TODOS_URL);
    const data = await response.json();
    setTodos(data);
  }

  const deleteTodo = async (todo) => {
    const url_delete = `${process.env.REACT_APP_TODOS_URL}/${todo.id}`;
    const response = await fetch(url_delete, { method: "DELETE" });
    fecthTodos();
  };

  // form integration

  const today = new Date();
  const strToday =
    today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();

  let initFormState = {
    title: "le titre",
    dueDate: strToday,
    completed: false,
  };

  let [formState, setFormState] = useState(initFormState);

  let handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setFormState({ ...formState, [name]: value });
  };

  let handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(process.env.REACT_APP_TODOS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    console.log(response.status);
  };

  return (
    <div className="App">
      <h1>Application</h1>
      <hr />
      <TodoForm
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        formState={formState}
      ></TodoForm>
      <hr />
      <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
}

export default App;
