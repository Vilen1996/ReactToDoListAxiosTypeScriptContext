import { AddToDo } from "./AddToDo";
import { List } from "./List";

export const ToDoList: React.FC = () => {
  return (
    <div className="todo-list">
      <h3>ToDoList</h3>
      <AddToDo />
      <List />
    </div>
  );
};
