import React from "react";
import { todo } from "../models/todo";


export default function TodoCard(props: todo) {
  return (
    <div>
      <h2>{props.todoTitle}</h2>
      <p>{props.todoInfo}</p>
        <p>{props.todoStartDate}</p>
    </div>
  );
}
