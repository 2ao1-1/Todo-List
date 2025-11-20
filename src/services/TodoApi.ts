import { Todo } from "../pages/common/types";
import { api } from "./AxiosApi";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await api.get("todos");
  // Handle both array response and { data: [...] } response
  const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
  return data;
};

export const getTodoByID = async (todoId: number): Promise<Todo> => {
  const res = await api.get(`todos/${todoId}`);
  return res.data;
};

export const createTodo = async (todoData: {
  title: string;
  icon?: string;
  tasks?: { text: string; completed?: boolean }[];
}): Promise<Todo> => {
  const res = await api.post("todos", todoData);
  return res.data;
};

export const editTodo = async (
  todoId: number,
  todoData: { title?: string; icon?: string; completed?: boolean }
): Promise<Todo> => {
  const res = await api.put(`todos/${todoId}`, todoData);
  return res.data;
};

export const deleteTodo = async (todoId: number): Promise<void> => {
  await api.delete(`todos/${todoId}`);
};
