import EditTaskInput from "./EditTaskInput";
import { SaveControl } from "../../common/components/SaveControl";
import { EditTaskItemProps } from "../types/ShowTodoType";

export function EditTaskItem({
  editTaskText,
  setEditTaskText,
  setEditingTaskId,
  handleUpdateTask,
}: EditTaskItemProps) {
  return (
    <div className="flex-grow flex items-center gap-2">
      <EditTaskInput
        editTaskText={editTaskText}
        setEditTaskText={setEditTaskText}
        setEditingTaskId={setEditingTaskId}
        handleUpdateTask={handleUpdateTask}
      />

      <SaveControl saveOnClick={handleUpdateTask} />
    </div>
  );
}
