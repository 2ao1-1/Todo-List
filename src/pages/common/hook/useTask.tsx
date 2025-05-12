import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask, deleteTask, editTask } from "../../../services/TaskApi";
import { Task } from "../types/TodoType";

type taskData = { text: string; completed?: boolean; order?: number };

export default function useTask() {
  const queryClient = useQueryClient();

  const AddTask = useMutation<
    Task,
    Error,
    { todoId: number; taskData: taskData }
  >({
    mutationFn: ({ todoId, taskData }) => addTask(todoId, taskData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const EditTask = useMutation<
    Task,
    Error,
    { todoId: number; taskId: number; taskData: taskData }
  >({
    mutationFn: ({ todoId, taskId, taskData }) =>
      editTask(todoId, taskId, taskData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const DeleteTask = useMutation<
    void,
    Error,
    { todoId: number; taskId: number }
  >({
    mutationFn: ({ todoId, taskId }) => deleteTask(todoId, taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { AddTask, EditTask, DeleteTask };
}
