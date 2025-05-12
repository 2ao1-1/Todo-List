import { Todo } from "../types";

export default function ProgressBar({ todo }: { todo: Todo }) {
  return (
    <div className="pb-4 flex items-center gap-1">
      <div className="flex-1 h-1.5 w-full bg-gray-200 rounded-full">
        <div
          className="h-1.5 bg-accent rounded-full transition-all duration-300 ease-out"
          style={{ width: `${todo?.completionPercentage || 0}%` }}
        ></div>
      </div>
      <div className="text-xs text-right text-gray-600">
        {todo?.completionPercentage || 0}%
      </div>
    </div>
  );
}

export function CompletedTask({ todo }: { todo: Todo }) {
  return (
    <div className="text-center text-sm py-2 text-secondary">
      <span>
        {todo?.tasks.filter((t) => t.completed).length || 0} /{" "}
        {todo?.tasks.length || 0} tasks
      </span>
    </div>
  );
}
