import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Todo } from "../TodoType";
import toast from "react-hot-toast";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodoByID,
  getTodos,
} from "../../../services/TodoApi";

type CreateTodoInput = {
  title: string;
  icon?: string;
  tasks?: { text: string; completed?: boolean }[];
};

export const useTodos = () => {
  const queryClient = useQueryClient();

  const AllTodos = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const GetTodoById = (id: number) =>
    useQuery<Todo, Error>({
      queryKey: ["todos", id],
      queryFn: () => getTodoByID(id),
    });

  const CreateTodo = useMutation<Todo, Error, CreateTodoInput>({
    mutationFn: (data) => createTodo(data),
    onSuccess: () => {
      toast.success("Todo created successfully!");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const EditTodo = useMutation<
    Todo,
    Error,
    { id: number; data: Partial<Todo> }
  >({
    mutationFn: ({ id, data }) => editTodo(id, data),
    onSuccess: () => {
      toast.success("Todo updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const DeleteTodo = useMutation<void, Error, number>({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      toast.success("Todo deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    AllTodos,
    GetTodoById,
    CreateTodo,
    EditTodo,
    DeleteTodo,
  };
};
