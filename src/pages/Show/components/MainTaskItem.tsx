import EditControl from "./EditControl";
import { CheckBtn } from "./CheckBtn";
import { Task } from "../../common/types";

export function MainTaskItem({
  task,
  handleToggleComplete,
  setEditingTaskId,
  setEditTaskText,
  handleDeleteTask,
}: {
  task: Task;
  handleToggleComplete: (taskId: number, completed: boolean) => void;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
  handleDeleteTask: (taskId: number) => void;
}) {
  return (
    <>
      <CheckBtn
        completed={task.completed}
        onCheck={(e: React.MouseEvent) => {
          e.stopPropagation();
          handleToggleComplete(task.id, task.completed);
        }}
      />

      {/* Task Title */}
      <TaskTitle
        completed={task.completed}
        onDoubleClick={() => {
          setEditingTaskId(task.id);
          setEditTaskText(task.text);
        }}
        title={task.text}
      />

      {/* Edit controler for task */}
      <EditControl
        editOnClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setEditingTaskId(task.id);
          setEditTaskText(task.text);
        }}
        deleteOnClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          handleDeleteTask(task.id);
        }}
      />
    </>
  );
}

function TaskTitle({
  completed,
  onDoubleClick,
  title,
}: {
  completed: boolean;
  onDoubleClick: () => void;
  title: string;
}) {
  return (
    <span
      className={`flex-grow ${completed ? "line-through text-secondary" : "text-primary"}`}
      onDoubleClick={onDoubleClick}
    >
      {title}
    </span>
  );
}
