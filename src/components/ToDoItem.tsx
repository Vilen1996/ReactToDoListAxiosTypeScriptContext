import React, { useContext } from "react";
import { toggle, remove } from "../lib/api"; // Assuming you have an API function for toggling
import { ToDoContext } from "../lib/context";
import { ActionTypes, ITodo } from "../lib/types";

interface Props {
  todo: ITodo;
}

export const ToDoItem: React.FC<Props> = ({ todo }) => {
  const context = useContext(ToDoContext);

  if (!context) {
    throw new Error("Context not found!");
  }
  const { dispatch } = context;

  const handleToggle = () => {
    toggle(todo.id).then(() => {
      dispatch({
        type: ActionTypes.updateTodo,
        payload: { ...todo, completed: !todo.completed },
      });
    });
  };

  const handleRemove = () => {
    remove(todo.id).then(() => {
      dispatch({ type: ActionTypes.removeTodo, payload: todo.id });
    });
  };

  return (
    <div className={`item ${todo.completed ? "completed" : ""}`}>
      <p>{todo.text}</p>
      <div>
        <button onClick={handleToggle}>
          {todo.completed ? "Undo" : "Done"}
        </button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};
