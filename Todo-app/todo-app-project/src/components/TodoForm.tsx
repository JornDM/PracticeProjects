import React, { FormEvent } from "react";
import { todo } from "../models/todo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function TodoForm() {
  const [todoObject, setTodoObject] = useState({
    id: uuidv4(),
    todoTitle: "",
    todoInfo: "",
    todoStartDate: Date(),
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
    
  }
  return (
    <form>
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
        value={todoObject.todoStartDate}
        onChange={handleInputChange}
      ></input>

      <input
        type="submit"
        value={"Create todo!"}
        onClick={submitHandler}
      ></input>
    </form>
  );
}
