import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  addTask,
  updateTask,
  deleteTask,
} from "../services/TodosApi";
import { Todo } from "../types/TodoType";

export const useTodos = () => {
  const queryClient = useQueryClient();

  // Get all todos
  const todosQuery = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  // Get single todo
  const todoQuery = (id: number) =>
    useQuery<Todo, Error>({
      queryKey: ["todos", id],
      queryFn: () => getTodoById(id),
    });

  // Create todo
  const createTodoMutation = useMutation<
    Todo,
    Error,
    Parameters<typeof createTodo>[0]
  >({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  // Update todo
  const updateTodoMutation = useMutation<
    Todo,
    Error,
    { id: number; data: Parameters<typeof updateTodo>[1] }
  >({
    mutationFn: ({ id, data }) => updateTodo(id, data),
    onSuccess: (data) => {
      queryClient.setQueryData(["todos", data.id], data);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  // Delete todo
  const deleteTodoMutation = useMutation<void, Error, number>({
    mutationFn: deleteTodo,
    onSuccess: (_, id) => {
      queryClient.setQueryData<Todo[]>(["todos"], (old) =>
        old ? old.filter((todo) => todo.id !== id) : []
      );
    },
  });

  // Add task
  const addTaskMutation = useMutation<
    Todo,
    Error,
    { todoId: number; taskData: Parameters<typeof addTask>[1] }
  >({
    mutationFn: ({ todoId, taskData }) => addTask(todoId, taskData),
    onSuccess: (data) => {
      queryClient.setQueryData(["todos", data.id], data);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  // Update task
  const updateTaskMutation = useMutation<
    Todo,
    Error,
    {
      todoId: number;
      taskId: number;
      taskData: Parameters<typeof updateTask>[2];
    }
  >({
    mutationFn: ({ todoId, taskId, taskData }) =>
      updateTask(todoId, taskId, taskData),
    onSuccess: (data) => {
      queryClient.setQueryData(["todos", data.id], data);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  // Delete task
  const deleteTaskMutation = useMutation<
    Todo,
    Error,
    { todoId: number; taskId: number }
  >({
    mutationFn: ({ todoId, taskId }) => deleteTask(todoId, taskId),
    onSuccess: (data) => {
      queryClient.setQueryData(["todos", data.id], data);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    todosQuery,
    todoQuery,
    createTodoMutation,
    updateTodoMutation,
    deleteTodoMutation,
    addTaskMutation,
    updateTaskMutation,
    deleteTaskMutation,
  };
};
