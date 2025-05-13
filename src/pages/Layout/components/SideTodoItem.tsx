export default function SideTodoItem({
  id,
  title,
  icon,
  isOpen,
  type,
}: {
  id: number;
  title: string;
  icon: string;
  isOpen: boolean;
  type: string;
}) {
  return (
    <li
      key={id}
      className={`flex items-center space-x-2 py-2 px-1 cursor-pointer ${type === "completed" ? "hover:bg-secondary/50" : "hover:bg-accent/50"}`}
    >
      <span>{icon}</span>
      {isOpen && <span className="truncate w-full">{title}</span>}
    </li>
  );
}
