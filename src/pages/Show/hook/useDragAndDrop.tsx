import { DropResult } from "@hello-pangea/dnd";
import { Task, Todo } from "../../../types/TodoType";
import { UseMutationResult } from "@tanstack/react-query";

export default function UseDragAndDrop(
  localTasks: Task[],
  setLocalTasks: (tasks: Task[]) => void,
  selectedTaskIndex: number | null,
  setSelectedTaskIndex: React.Dispatch<React.SetStateAction<number | null>>,
  todo: Todo | null,
  EditTask: UseMutationResult<
    Task,
    Error,
    {
      todoId: number;
      taskId: number;
      taskData: { text: string; order: number | undefined };
    },
    unknown
  >
) {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination || !todo) return;

    const { source, destination } = result;
    if (source.index === destination.index) return;

    const updatedTasks = [...localTasks];
    const [movedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, movedTask);

    const reorderedTasks = updatedTasks.map((task, index) => ({
      ...task,
      order: index,
    }));

    setLocalTasks(reorderedTasks);

    EditTask.mutate({
      todoId: todo.id,
      taskId: movedTask.id,
      taskData: { text: movedTask.text, order: destination.index },
    });

    const startIdx = Math.min(source.index, destination.index);
    const endIdx = Math.max(source.index, destination.index);

    for (let i = startIdx; i <= endIdx; i++) {
      if (i === destination.index) continue;

      const task = reorderedTasks[i];
      EditTask.mutate({
        todoId: todo.id,
        taskId: task.id,
        taskData: { text: task.text, order: i },
      });
    }

    if (selectedTaskIndex !== null) {
      if (selectedTaskIndex === source.index) {
        setSelectedTaskIndex(destination.index);
      } else if (
        selectedTaskIndex > source.index &&
        selectedTaskIndex <= destination.index
      ) {
        setSelectedTaskIndex(selectedTaskIndex - 1);
      } else if (
        selectedTaskIndex < source.index &&
        selectedTaskIndex >= destination.index
      ) {
        setSelectedTaskIndex(selectedTaskIndex + 1);
      }
    }
  };
  return handleDragEnd;
}
