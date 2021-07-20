import React, { useState, useEffect } from 'react'
import './App.css';

import Form from "./components/Form"
import TodoList from './components/TodoList'

function App() {


  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterTodoHandler = () => {
      switch (filter) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterTodoHandler();
    localSave();
  }, [todos, filter]);


  const localSave = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoFromLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Srikhar's Todo List</h1>
      </header>
      <Form todoInput={todoInput} setTodoInput={setTodoInput} todos={todos} setTodos={setTodos} setFilter={setFilter} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
