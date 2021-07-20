import React from 'react'


const Form = ({ todoInput, setTodoInput, todos, setTodos, setFilter }) => {

    const todoInputHandler = (e) => {
        setTodoInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: todoInput, completed: false, id: Math.random() * 1000 },
        ])
        setTodoInput("")
    }

    const filterHandler = (e) => {
        setFilter(e.target.value);
    }

    return (
        <form>
            <input value={todoInput} onChange={todoInputHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;

