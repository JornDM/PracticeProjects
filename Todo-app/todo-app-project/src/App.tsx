import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import { todo } from './models/todo';
function App() {
  const [todoArray, setTodoArray] = useState([] as todo[]);
  
  return (
    <div className="App">
      <h1>Todo-app</h1>
      <TodoForm />
    </div>
  );
}

export default App;
