import { Todo } from "../../common/types";
import useAddNewTask from "../hook/useAddNewTask";
import { AddInput } from "./AddInput";
import { KeyboardEvent } from "react";
import { AddTaskBtn } from "./AddTaskBtn";

export default function AddTaskForm({ todo }: { todo: Todo | undefined }) {
  const {
    isAdding,
    registerNewTask,
    handleSubmitNewTask,
    newTaskText,
    onSubmitNewTask,
  } = useAddNewTask({ todo });

  function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitNewTask(onSubmitNewTask);
    }
  }
  const handleAddClick = (e: React.KeyboardEvent<HTMLInputElement>) =>
    handleKeyPress(e);

  return (
    <form onSubmit={handleSubmitNewTask(onSubmitNewTask)} className="flex">
      <AddInput registerNewTask={registerNewTask} onAddClick={handleAddClick} />

      <AddTaskBtn Adding={isAdding} newTaskText={newTaskText} />
    </form>
  );
}
