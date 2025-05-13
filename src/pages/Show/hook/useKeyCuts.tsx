import { useEffect } from "react";
import { Task, Todo } from "../../common/types";

interface UseKeyCutsProps {
  todo?: Todo;
  localTasks: Task[];
  selectedTaskIndex: number | null;
  editingTaskId: number | null;
  setSelectedTaskIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setEditingTaskId: (id: number | null) => void;
  setEditTaskText: (text: string) => void;
  handleToggleComplete: (id: number, completed: boolean) => void;
  handleDeleteTask: (id: number) => void;
}

export default function useKeyCuts({
  todo,
  localTasks,
  selectedTaskIndex,
  editingTaskId,
  setSelectedTaskIndex,
  setEditingTaskId,
  setEditTaskText,
  handleToggleComplete,
  handleDeleteTask,
}: UseKeyCutsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        editingTaskId !== null ||
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (!todo || localTasks.length === 0) return;

      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedTaskIndex((prev: number | null) => {
          if (prev === null) return 0;
          return e.key === "ArrowUp"
            ? Math.max(prev - 1, 0)
            : Math.min(prev + 1, localTasks.length - 1);
        });
        return;
      }

      if (selectedTaskIndex === null) return;

      const currentTask = localTasks[selectedTaskIndex];

      switch (e.key) {
        case " ":
          e.preventDefault();
          handleToggleComplete(currentTask.id, currentTask.completed);
          break;
        case "e":
        case "Enter":
          e.preventDefault();
          setEditingTaskId(currentTask.id);
          setEditTaskText(currentTask.text);
          break;
        case "Delete":
          e.preventDefault();
          handleDeleteTask(currentTask.id);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    todo,
    localTasks,
    selectedTaskIndex,
    editingTaskId,
    handleToggleComplete,
    handleDeleteTask,
    setSelectedTaskIndex,
    setEditingTaskId,
    setEditTaskText,
  ]);
}
