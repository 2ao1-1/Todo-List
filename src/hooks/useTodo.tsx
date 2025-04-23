import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { Todo } from "../types/TodoListTypes";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      setAuthToken(token);
    }
  }, []);

  // get All Todos
  const getAllTodos = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get("/todos");
      setTodos(res.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // get todo by id
  const getTodoById = useCallback(async (id: number) => {
    try {
      const res = await api.get(`/todos/${id}`);
      // Update the todo in the list if it exists
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? res.data : todo))
      );
      return res.data;
    } catch (err) {
      setError("Failed to get todo");
      console.error(err);
      throw err;
    }
  }, []);

  // create new todo
  const createTodo = useCallback(
    async (todoData: {
      title: string;
      icon?: string;
      tasks?: { text: string; completed?: boolean }[];
    }) => {
      try {
        const res = await api.post("/todos", todoData);

        setTodos((prevTodos) => [res.data, ...prevTodos]);
        return res.data;
      } catch (err) {
        setError("Failed to create todo");
        console.error(err);
        throw err;
      }
    },
    []
  );

  // update todo
  const updateTodo = useCallback(
    async (
      id: number,
      updateData: { title?: string; icon?: string; completed?: boolean }
    ) => {
      try {
        const res = await api.put(`/todos/${id}`, updateData);
        // Update the todo in the list
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? res.data : todo))
        );
        return res.data;
      } catch (err) {
        setError("Failed to update todo");
        console.error(err);
        throw err;
      }
    },
    []
  );

  // delete Todo
  const deleteTodo = useCallback(async (id: number) => {
    try {
      await api.delete(`/todos/${id}`);
      // Remove the todo from the list
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError("Failed to delete todo");
      console.error(err);
      throw err;
    }
  }, []);

  // add Task
  const addTask = useCallback(
    async (todoId: number, taskData: { text: string; completed?: boolean }) => {
      try {
        const res = await api.post(`/todos/${todoId}/tasks`, taskData);
        // Update the todo in the list
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === todoId ? res.data : todo))
        );
        return res.data;
      } catch (err) {
        setError("Failed to add task");
        console.error(err);
        throw err;
      }
    },
    []
  );

  // update task
  const updateTask = useCallback(
    async (
      todoId: number,
      taskId: number,
      taskData: { text?: string; completed?: boolean; order?: number }
    ) => {
      try {
        const res = await api.put(`/todos/${todoId}/tasks/${taskId}`, taskData);
        // Update the todo in the list
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === todoId ? res.data : todo))
        );
        return res.data;
      } catch (err) {
        setError("Failed to update task");
        console.error(err);
        throw err;
      }
    },
    []
  );

  // delete task
  const deleteTask = useCallback(async (todoId: number, taskId: number) => {
    try {
      const res = await api.delete(`/todos/${todoId}/tasks/${taskId}`);
      // Update the todo in the list
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === todoId ? res.data : todo))
      );
      return res.data;
    } catch (err) {
      setError("Failed to delete task");
      console.error(err);
      throw err;
    }
  }, []);

  return {
    todos,
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    addTask,
    updateTask,
    deleteTask,
    loading,
    error,
  };
};
