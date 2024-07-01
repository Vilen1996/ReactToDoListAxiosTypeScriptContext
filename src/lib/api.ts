import axios from "axios";
import { ITodo } from "./types";

export const getAll = async (): Promise<ITodo[]> => {
  const response = await axios.get("http://localhost:3004/todos");
  return response.data;
};

type InputTodo = Omit<ITodo, "id">;
export const add = async (obj: InputTodo): Promise<ITodo> => {
  const response = await axios.post("http://localhost:3004/todos", obj);
  return response.data;
};

export const remove = async (id: number): Promise<void> => {
  await axios.delete(`http://localhost:3004/todos/${id}`);
};

export const toggle = async (id: number): Promise<ITodo> => {
  const todo = await getById(id);
  const updatedTodo = { ...todo, completed: !todo.completed };
  const response = await axios.put(
    `http://localhost:3004/todos/${id}`,
    updatedTodo
  );
  return response.data;
};

const getById = async (id: number): Promise<ITodo> => {
  const response = await axios.get(`http://localhost:3004/todos/${id}`);
  return response.data;
};
