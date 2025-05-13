import { Todo } from "../pages/common/types";
import { api } from "./AxiosApi";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await api.get("/todos");
  return res.data;
};

export const getTodoByID = async (todoId: number): Promise<Todo> => {
  const res = await api.get(`/todos/${todoId}`);
  return res.data;
};

export const createTodo = async (todoData: {
  title: string;
  icon?: string;
  tasks?: { text: string; completed?: boolean }[];
}): Promise<Todo> => {
  const res = await api.post("/todos", todoData);
  return res.data;
};

export const editTodo = async (
  todoId: number,
  dateData: { title?: string; icon?: string; completed?: boolean }
): Promise<Todo> => {
  const response = await api.put(`/todos/${todoId}`, dateData);
  return response.data;
};

export const deleteTodo = async (todoId: number): Promise<void> => {
  await api.delete(`/todos/${todoId}`);
};
