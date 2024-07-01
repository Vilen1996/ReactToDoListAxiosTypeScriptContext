import { ActionTypes, IAction, IState, ITodo } from "./types";

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.setTodos:
      return { ...state, todos: action.payload as ITodo[] };
    case ActionTypes.addTodo:
      return { ...state, todos: [...state.todos, action.payload as ITodo] };
    case ActionTypes.removeTodo:
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: updatedTodos };

    case ActionTypes.updateTodo:
      const updatedTodoIndex = state.todos.findIndex(
        (todo) => todo.id === (action.payload as ITodo).id
      );
      if (updatedTodoIndex !== -1) {
        const updatedTodos = [...state.todos];
        updatedTodos[updatedTodoIndex] = action.payload as ITodo;
        return { ...state, todos: updatedTodos };
      }
      return state;
    default:
      return state;
  }
};
