import axios from "axios";
import { getToken } from "../utils/helper";
import { Todo } from "../types/TodoType";

const API_URL = "http://144.91.75.57:5012/api";

export const getTodos = async (): Promise<Todo[]> => {
  const token = getToken();
  const response = await axios.get(`${API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getTodoById = async (id: number): Promise<Todo> => {
  const token = getToken();
  const response = await axios.get(`${API_URL}/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createTodo = async (todoData: {
  title: string;
  icon?: string;
  tasks?: { text: string; completed?: boolean }[];
}): Promise<Todo> => {
  const token = getToken();
  const response = await axios.post(`${API_URL}/todos`, todoData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateTodo = async (
  id: number,
  updateData: { title?: string; icon?: string; completed?: boolean }
): Promise<Todo> => {
  const token = getToken();
  const response = await axios.put(`${API_URL}/todos/${id}`, updateData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  const token = getToken();
  await axios.delete(`${API_URL}/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addTask = async (
  todoId: number,
  taskData: { text: string; completed?: boolean }
): Promise<Todo> => {
  const token = getToken();
  const response = await axios.post(
    `${API_URL}/todos/${todoId}/tasks`,
    taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const updateTask = async (
  todoId: number,
  taskId: number,
  taskData: { text?: string; completed?: boolean; order?: number }
): Promise<Todo> => {
  const token = getToken();
  const response = await axios.put(
    `${API_URL}/todos/${todoId}/tasks/${taskId}`,
    taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteTask = async (
  todoId: number,
  taskId: number
): Promise<Todo> => {
  const token = getToken();
  const response = await axios.delete(
    `${API_URL}/todos/${todoId}/tasks/${taskId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
