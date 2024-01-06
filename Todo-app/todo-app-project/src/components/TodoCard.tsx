import { todo } from "../models/todo";
import DatePicker from "react-datepicker";
export default function TodoCard(props: todo) {
    return (
        <div>
            <h2>{props.todoTitle}</h2>
            <p>{props.todoInfo}</p>
            <DatePicker selected={props.todoStartDate} onChange={() => {}}/>
        </div>
    )
}