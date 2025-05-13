export default function EditTaskInput({
  editTaskText,
  setEditTaskText,
  setEditingTaskId,
  handleUpdateTask,
}: {
  editTaskText: string;
  setEditTaskText: React.Dispatch<React.SetStateAction<string>>;
  setEditingTaskId: React.Dispatch<React.SetStateAction<number | null>>;
  handleUpdateTask: () => void;
}) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTaskText(e.target.value);
  };

  const handleUpdateTaskKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleUpdateTask();
    } else if (e.key === "Escape") {
      setEditingTaskId(null);
      setEditTaskText("");
    }
  };

  return (
    <input
      type="text"
      value={editTaskText}
      onChange={handleOnChange}
      onKeyDown={handleUpdateTaskKey}
      className="w-full flex-1 p-1 border-b border-accent focus:outline-none"
      autoFocus
    />
  );
}
