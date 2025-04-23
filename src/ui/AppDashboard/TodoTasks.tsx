import { Task } from "../../types/TodoListTypes";

/**
 * TodoTasks Component
 * - Displays a list of tasks
 * - Strikes through completed tasks
 */
export const TodoTasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`text-sm px-2 py-1 rounded bg-main/50 ${
            task.completed ? "line-through text-secondary" : ""
          }`}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
};
