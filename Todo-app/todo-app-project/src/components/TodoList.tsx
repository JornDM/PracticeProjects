import React, { Fragment } from "react";
import { todo } from "../models/todo";
import TodoCard from "./TodoCard";

interface TodoListProps {
  listOfTodos: todo[];
}

export default function TodoList(props: TodoListProps) {
  return (
    <Fragment>
      {props.listOfTodos.map((todo: todo) => (
        <TodoCard
          key={todo.id}
          id={todo.id}
          todoTitle={todo.todoTitle}
          todoInfo={todo.todoInfo}
          todoStartDate={todo.todoStartDate}
        />
      ))}
    </Fragment>
  );
}
