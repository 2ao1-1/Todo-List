import { useEffect, useState } from "react";
import { Task } from "../../common/types";

export default function useTaskListState(todo?: { tasks: Task[] }) {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editTaskText, setEditTaskText] = useState("");
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(
    null
  );
  const [localTasks, setLocalTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (todo && todo.tasks) {
      setLocalTasks(todo.tasks);
    }
  }, [todo]);

  return {
    editingTaskId,
    setEditingTaskId,
    editTaskText,
    setEditTaskText,
    selectedTaskIndex,
    setSelectedTaskIndex,
    localTasks,
    setLocalTasks,
  };
}
