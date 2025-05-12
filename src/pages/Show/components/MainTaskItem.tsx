import EditControl from "./EditControl";
import { CheckBtn } from "./CheckBtn";
import { MainTaskItemProps } from "../types/ShowTodoType";

export function MainTaskItem({
  task,
  handleToggleComplete,
  setEditingTaskId,
  setEditTaskText,
  handleDeleteTask,
}: MainTaskItemProps) {
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
