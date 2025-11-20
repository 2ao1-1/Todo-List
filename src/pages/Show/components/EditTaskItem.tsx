import EditTaskInput from "./EditTaskInput";
import { SaveControl } from "../../common/components/SaveControl";

export function EditTaskItem({
  editTaskText,
  setEditTaskText,
  setEditingTaskId,
  handleUpdateTask,
}: {
  editTaskText: string;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  handleUpdateTask: () => void;
}) {
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
