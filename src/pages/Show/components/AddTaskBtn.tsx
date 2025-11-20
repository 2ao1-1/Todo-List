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
      className="bg-accent hover:bg-accent text-white px-2 py-1 md:px-4 md:py-2 disabled:opacity-70 transition-colors text-xs md:text-sm font-semibold"
    >
      {Adding ? "Adding..." : "Add Task"}
    </button>
  );
}
