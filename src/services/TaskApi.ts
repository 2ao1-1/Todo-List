import { Task } from "../pages/common/types";
import { api } from "./AxiosApi";

export const addTask = async (
  todoId: number,
  taskData: { text: string; completed?: boolean }
): Promise<Task> => {
  const res = await api.post(`/todos/${todoId}/tasks`, taskData);
  return res.data;
};

export const editTask = async (
  toldId: number,
  taskId: number,
  taskData: { text?: string; completed?: boolean; order?: number }
): Promise<Task> => {
  const res = await api.put(`/todos/${toldId}/tasks/${taskId}`, taskData);
  return res.data;
};

export const deleteTask = async (
  todoId: number,
  taskId: number
): Promise<void> => {
  await api.delete(`/todos/${todoId}/tasks/${taskId}`);
};
