import React, { FormEvent, useState } from "react";
import { todo } from "../models/todo";
import { v4 as uuidv4 } from "uuid";

interface TodoFormProps {
  addTodo: (newTodo: todo) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [todoObject, setTodoObject] = useState({
    id: uuidv4(),
    todoTitle: "",
    todoInfo: "",
    todoStartDate: new Date().toISOString().substr(0, 10), // Omgezet naar een string in het formaat 'YYYY-MM-DD'
  });

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setTodoObject((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  }

  function submitHandler(event: FormEvent) {
    event?.preventDefault();

    addTodo(todoObject);

    setTodoObject({
      id: uuidv4(),
      todoTitle: "",
      todoInfo: "",
      todoStartDate: new Date().toISOString().substr(0, 10), // Opnieuw ingesteld als een string in het formaat 'YYYY-MM-DD'
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo-title">Todo-title*</label>
      <input
        type="text"
        id="todo-title"
        name="todoTitle"
        required
        value={todoObject.todoTitle}
        onChange={handleInputChange}
      ></input>
      <br />

      <label htmlFor="todo-info">Todo-info</label>
      <textarea
        id="todo-info"
        name="todoInfo"
        value={todoObject.todoInfo}
        onChange={handleInputChange}
      ></textarea>

      <br />
      <label htmlFor="todo-date">Todo-Start Date</label>
      <input
        type="date"
        id="todo-date"
        name="todoStartDate"
        value={todoObject.todoStartDate} // Als dit veld geen string is, verwijder dit dan voor nu
        onChange={handleInputChange}
      ></input>
      <input type="submit" value={"Create todo!"}></input>
    </form>
  );
}
