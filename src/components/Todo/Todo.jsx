import React from "react";
import "./Todo.css";
import IconButton from "components/IconButton";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";


const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      <button onClick={onDeleteTodo}>Удалить</button>

      {/* <IconButton>
        <DeleteIcon
          width="16px"
          height="16px"
          fill="#fff"
          onClick={onDeleteTodo}
        />
      </IconButton> */}
    </div>
  );
};


export default Todo;