import { memo } from "react";

interface TodoTaskFormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}

export const TodoTaskForm = memo(
  ({ value, onChange, onSubmit, onKeyPress }: TodoTaskFormProps) => (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        id="new-task-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyPress}
        placeholder="Add a new task... (Ctrl/Cmd + Enter to add)"
        className="w-full p-2 rounded border border-secondary/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="w-full bg-accent text-card rounded-md p-2 hover:bg-accent/80 active:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add Task
      </button>
    </form>
  )
);

TodoTaskForm.displayName = "TodoTaskForm";
