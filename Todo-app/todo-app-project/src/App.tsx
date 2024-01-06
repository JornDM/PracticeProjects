import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import { todo } from './models/todo';
import TodoList from './components/TodoList';

function App() {
  const [todoArray, setTodoArray] = useState([] as todo[]);

  const addTodo = (newTodo: todo) => {
    setTodoArray(prevTodoArray => [...prevTodoArray, newTodo]);
  };

  return (
    <div className="App">
      <h1>Todo-app</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList listOfTodos={todoArray} />
    </div>
  );
}

export default App;
