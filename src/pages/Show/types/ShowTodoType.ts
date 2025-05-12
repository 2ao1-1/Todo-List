import { UseFormRegister } from "react-hook-form";
import { NewTaskFormData } from "../hook/useAddNewTask";
import { Task, Todo } from "../../common/types";
import { DraggableProvided, DraggableStateSnapshot } from "@hello-pangea/dnd";

export type AddInputProps = {
  registerNewTask: UseFormRegister<NewTaskFormData>;
  onAddClick: React.KeyboardEventHandler;
};

export type AddTaskBtnProps = {
  Adding: boolean;
  newTaskText: string;
};

export type CheckboxProps = {
  onCheck: (e: React.MouseEvent<HTMLButtonElement>) => void;
  completed: boolean;
};

export type EditControlProps = {
  editOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type EditHeadControlProps = {
  todo: { id: number; title: string; icon: string } | undefined;
  setIsEditingTodo: (value: boolean) => void;
};

export type EditInputProps = {
  registerEditTodo: UseFormRegister<{
    editTodoTitle: string;
    editTodoIcon: string;
  }>;
};

export type EditTaskInputProps = {
  editTaskText: string;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  handleUpdateTask: () => void;
};

export type EditTaskItemProps = {
  editTaskText: string;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  handleUpdateTask: () => void;
};

export type EditTodoFormProps = {
  editTodoIcon: string | undefined;
  handleIconSelect: (emoji: { native: string }) => void;
  registerEditTodo: UseFormRegister<{
    editTodoTitle: string;
    editTodoIcon: string;
  }>;
};

export type MainTaskItemProps = {
  task: Task;
  handleToggleComplete: (taskId: number, completed: boolean) => void;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteTask: (taskId: number) => void;
};

export type TaskItemProps = {
  children: React.ReactNode;
  completed: boolean;
  index: number;
  providedDraggable: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  selectedTaskIndex: number | null;
  setSelectedTaskIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

export type TaskDragDropProps = {
  todoId: number;
};

export type TodoHeadProps = {
  todo: Todo;
  setIsEditingTodo: (value: boolean) => void;
};
