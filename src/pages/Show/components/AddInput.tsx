import { UseFormRegister } from "react-hook-form";
import { NewTaskFormData } from "../hook/useAddNewTask";

export function AddInput({
  registerNewTask,
  onAddClick,
}: {
  registerNewTask: UseFormRegister<NewTaskFormData>;
  onAddClick: React.KeyboardEventHandler;
}) {
  return (
    <input
      type="text"
      {...registerNewTask("newTaskText", { required: true })}
      placeholder="Enter task description"
      className="flex-1 border-b border-accent p-2 focus:outline-none focus:ring-none text-xs md:text-sm"
      onKeyDown={onAddClick}
    />
  );
}
