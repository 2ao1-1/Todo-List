export function AddTaskBtn({
  Adding,
  newTaskText,
}: {
  Adding: boolean;
  newTaskText: string;
}) {
  return (
    <button
      type="submit"
      disabled={Adding || !newTaskText?.trim()}
      className="bg-accent hover:bg-accent text-white px-4 py-2 disabled:opacity-70 transition-colors text-sm"
    >
      {Adding ? "Adding..." : "Add Task"}
    </button>
  );
}
