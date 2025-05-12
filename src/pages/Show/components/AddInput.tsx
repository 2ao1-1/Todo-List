import { AddInputProps } from "../types/ShowTodoType";

export function AddInput({ registerNewTask, onAddClick }: AddInputProps) {
  return (
    <input
      type="text"
      {...registerNewTask("newTaskText", { required: true })}
      placeholder="Enter task description (Ctrl+N to focus)"
      className="flex-1 border-b border-accent p-2 focus:outline-none focus:ring-none text-sm"
      onKeyDown={onAddClick}
    />
  );
}
