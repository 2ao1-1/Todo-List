import { FaTrash } from "react-icons/fa";

export function ToastDeleteBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title="Delete"
      className="text-sx px-1 rounded bg-accent/80 text-white hover:bg-accent flex items-center gap-1.5"
    >
      <span className="text-sm">Delete</span>
      <FaTrash size={16} />
    </button>
  );
}
